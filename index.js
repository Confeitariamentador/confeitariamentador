const express = require("express")
const app = express()
const path = require("path")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const login = require("./routes/login")
const cadastro = require("./routes/cadastro")
const loja = require("./routes/loja")
const historico = require("./routes/historico")
const PORT = process.env.PORT || 8090
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const bd = require("./database/Database")

//configurações

    app.engine("handlebars", handlebars.engine({defaultLayout:"main"}))
    app.set("view engine", "handlebars")

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    app.use(express.static(path.join(__dirname, "public")))

    app.use(cookieParser());
    app.use(sessions({
    secret: "chave1234567890secreta0987654321&22",
    saveUninitialized: true,
    resave: false,
    name: 'CookieSessao',
    cookie: {maxAge: 1000*60*5}
    }));

//middleware

app.use("*", async function(req, res, next) {
    if (!req.session.usuario && req.cookies.token) {
        const resultado = await bd.query("SELECT token FROM comprador WHERE token = ?", [req.cookies.token]);
        if (resultado.length) {
            req.session.usuario = resultado[0];
        }
    }
    next();
});

//rotas

app.get("/", (req,res)=>{
    res.render("home")
})

app.use("/loja", loja)

app.use("/login", login)

app.use("/cadastro", cadastro)

app.use("/historico", historico)

app.get("/logout", function(req, res) {
    res.cookie("token", "");
    req.session.destroy();
    res.redirect("/login");
});

app.listen(PORT, () => {
    console.log(`Servidor ativo na porta: ${PORT}`);
})
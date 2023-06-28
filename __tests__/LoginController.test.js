const LoginController = require("../Controllers/LoginController");
const ClienteModel = require("../model/ClienteModel");

jest.mock("../model/ClienteModel"); 

describe("Testando o LoginController", () => {
  let loginController;

  beforeEach(() => {
    loginController = new LoginController();
    ClienteModel.mockClear();
  });

  it("Deve fazer login com sucesso sem gerar token", async () => {
    const email = "teste@teste.com";
    const senha = "senha123";
    const checkbox = false;
    
    ClienteModel.prototype.verificarCredenciais.mockResolvedValue("userIdTest");

    const response = await loginController.fazerLogin(email, senha, checkbox);

    expect(response).toEqual({ success: true });
    expect(ClienteModel.prototype.verificarCredenciais).toBeCalledWith(email, senha);
  });

  it("Deve fazer login com sucesso e gerar token", async () => {
    const email = "teste@teste.com";
    const senha = "senha123";
    const checkbox = true;
    
    ClienteModel.prototype.verificarCredenciais.mockResolvedValue("userIdTest");
    ClienteModel.prototype.gerarToken.mockResolvedValue("tokenTest");

    const response = await loginController.fazerLogin(email, senha, checkbox);

    expect(response).toEqual({ success: true, token: "tokenTest" });
    expect(ClienteModel.prototype.verificarCredenciais).toBeCalledWith(email, senha);
    expect(ClienteModel.prototype.gerarToken).toBeCalledWith("userIdTest");
  });

  it("Deve lançar uma exceção quando algo der errado", async () => {
    const email = "teste@teste.com";
    const senha = "senha123";
    const checkbox = false;
    
    ClienteModel.prototype.verificarCredenciais.mockRejectedValue(new Error());

    await expect(loginController.fazerLogin(email, senha, checkbox)).rejects.toThrow();
  });
});

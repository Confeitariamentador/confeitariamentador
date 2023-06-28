const LoginController = require("../Controllers/LoginController");
const ClienteModel = require("../model/ClienteModel");

jest.mock("../model/ClienteModel");

describe("Testando o LoginController", () => {
  let loginController;

  beforeEach(() => {
    loginController = new LoginController();
    ClienteModel.mockClear();
  });

  it("should successfully login without generating token", async () => {
    const email = "test@example.com";
    const senha = "password";
    const checkbox = false;

    ClienteModel.prototype.verificarCredenciais.mockResolvedValue("userIdTest");

    const response = await loginController.fazerLogin(email, senha, checkbox);

    expect(response).toEqual({ success: true });
    expect(ClienteModel.prototype.verificarCredenciais).toBeCalledWith(email, senha);
  });

  it("should successfully login and generate token", async () => {
    const email = "test@example.com";
    const senha = "password";
    const checkbox = true;

    ClienteModel.prototype.verificarCredenciais.mockResolvedValue("userIdTest");
    ClienteModel.prototype.gerarToken.mockResolvedValue("tokenTest");

    const response = await loginController.fazerLogin(email, senha, checkbox);

    expect(response).toEqual({ success: true, token: "tokenTest" });
    expect(ClienteModel.prototype.verificarCredenciais).toBeCalledWith(email, senha);
    expect(ClienteModel.prototype.gerarToken).toBeCalledWith("userIdTest");
  });

  it("should throw an exception when something goes wrong", async () => {
    const email = "test@example.com";
    const senha = "password";
    const checkbox = false;

    ClienteModel.prototype.verificarCredenciais.mockRejectedValue(new Error());

    await expect(loginController.fazerLogin(email, senha, checkbox)).rejects.toThrow();
  });
});

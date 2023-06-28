const Item = require('../model/Item')

describe('Testando a classe Item', () => {

  it('Deve criar um novo Item corretamente', () => {
    const item = new Item(1, 'Arroz', '2023-12-31');

    expect(item._id).toBe(1);
    expect(item._nome).toBe('Arroz');
    expect(item._prazoValidade).toBe('2023-12-31');
  });

  it('Deve retornar os valores corretos com os métodos get', () => {
    const item = new Item(1, 'Arroz', '2023-12-31');

    expect(item.getId()).toBe(1);
    expect(item.getNome()).toBe('Arroz');
    expect(item.getPrazoValidade()).toBe('2023-12-31');
  });

  it('Deve setar os valores corretamente com os métodos set', () => {
    const item = new Item(1, 'Arroz', '2023-12-31');

    item.setId(2);
    item.setNome('Feijão');
    item.setPrazoValidade('2024-01-31');

    expect(item._id).toBe(2);
    expect(item._nome).toBe('Feijão');
    expect(item._prazoValidade).toBe('2024-01-31');
  });
});

const Item = require('../model/Item');

describe('Testando a classe Item', () => {
  it('should create a new Item correctly', () => {
    const item = new Item(1, 'Arroz', '2023-12-31');

    expect(item._id).toBe(1);
    expect(item._nome).toBe('Arroz');
    expect(item._prazoValidade).toBe('2023-12-31');
  });

  it('should return correct values with get methods', () => {
    const item = new Item(1, 'Arroz', '2023-12-31');

    expect(item.getId()).toBe(1);
    expect(item.getNome()).toBe('Arroz');
    expect(item.getPrazoValidade()).toBe('2023-12-31');
  });

  it('should set values correctly with set methods', () => {
    const item = new Item(1, 'Arroz', '2023-12-31');

    item.setId(2);
    item.setNome('Feijão');
    item.setPrazoValidade('2024-01-31');

    expect(item._id).toBe(2);
    expect(item._nome).toBe('Feijão');
    expect(item._prazoValidade).toBe('2024-01-31');
  });
});

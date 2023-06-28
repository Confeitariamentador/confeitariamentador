const Comprador = require('../model/Comprador');

describe('Comprador', () => {
  test('should initialize with correct properties', () => {
    const comprador = new Comprador(1, 'John Doe', 'password', 'john@example.com', []);

    expect(comprador.getId()).toBe(1);
    expect(comprador.getNome()).toBe('John Doe');
    expect(comprador.getSenha()).toBe('password');
    expect(comprador.getEmail()).toBe('john@example.com');
    expect(comprador.getHistoricoPedidos()).toEqual([]);
  });

  test('should set properties correctly', () => {
    const comprador = new Comprador();

    comprador.setId(1);
    comprador.setNome('John Doe');
    comprador.setSenha('password');
    comprador.setEmail('john@example.com');
    comprador.setHistoricoPedidos([]);

    expect(comprador.getId()).toBe(1);
    expect(comprador.getNome()).toBe('John Doe');
    expect(comprador.getSenha()).toBe('password');
    expect(comprador.getEmail()).toBe('john@example.com');
    expect(comprador.getHistoricoPedidos()).toEqual([]);
  });
});

const { ChevroletCorsa } = require('./Rodado');

describe("Rodados", () => {
    var corsaUno
  
    beforeEach(() => {
        corsaUno = new ChevroletCorsa("Rojo")
    })
  
    test("Color del kwidUno", () => {
        corsaUno.setColor("Rojo")
      expect(corsaUno.color).toEqual("Rojo")
    })
  })
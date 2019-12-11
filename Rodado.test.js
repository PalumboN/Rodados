const  {RenaultKwid} = require('./Rodado');
const { ChevroletCorsa } = require('./Rodado');
const { Especiales } = require('./Rodado');
const { trafic } = require('./Rodado');
const { Interior } = require('./Rodado');
const { interiorComodo  }= require('./Rodado');
const { interiorPopular } = require('./Rodado');
const { motorPulenta } = require('./Rodado');
const { motorBataton } = require('./Rodado');
const { Rodado } = require('./Rodado');

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
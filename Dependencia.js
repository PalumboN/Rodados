/* Dependecia */
class Dependecia {
    constructor(flotas, empleados) {
        this.flotas = flotas,
        this.empleados = empleados,
        this.motores = [motorPulenta, motorBataton],
        this.interiores = [InteriorComodo, InteriorPopular],
        
        agregarAFlota(rodado) ;{
            this.flotas.push(rodado);
        }

        quitarDeFlota(rodado) ;{
            for( var i = 0; i < this.flotas.length; i++){ 
                if ( this.flotas[i] === rodado) {
                    this.flotas.splice(i, 1); 
                }
             }
        }

        estaBienEquipada() ;{
            return (this.flotas.length > 3 && this.todosLosRodadosConVelocidadMayorA(100));
        }

        capacidadTotalEnColor(color) ;{
            this.flotas.filter(rodado => rodado.color() == color)
        }
    }
}


















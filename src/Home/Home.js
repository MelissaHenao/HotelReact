
import'./Home.css'
import { FormularioReserva } from '../FormularioReserva/FormularioReserva.js'
import { Actividades } from '../Actividades/Actividades.js'


export function Home(){

    return(
        <>
        <div className='banner'>
           <FormularioReserva></FormularioReserva>
        </div>
        
        <div>
            <Actividades></Actividades>
        </div>
        </>
    )

}
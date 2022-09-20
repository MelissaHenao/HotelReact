
import'./Home.css'
import { FormularioReserva } from '../FormularioReserva/FormularioReserva.js'
import { Actividades } from '../Actividades/Actividades.js'
import {Footer} from '../Footer/Footer.js'


export function Home(){

    return(
        <>
        <div className='banner'>
           <FormularioReserva></FormularioReserva>
        </div>
        
        <div>
            <Actividades></Actividades>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </>
    )

}
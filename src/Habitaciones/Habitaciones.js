import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion.js"
import {Footer} from '../Footer/Footer.js'
import './Habitaciones.css'



import  {useEffect,useState} from 'react'// hooks functiones especiales de react 



export function Habitaciones(){
    //usando el USESTATE (Function especial para crear variable global dentro del componente)

    const [estadoDeCarga,setEstadoDeCarga]=useState(true)//con el set guardo cosas 
    const[habitaciones,setHabitaciones]=useState(null)


    //usando el USEEFECT
    //CUANDO CARGO Y PINTO Y CUANDO NO, PARA ESO SE UTILIZA EL USEEFECT (Funcion que controla el render de un componente)
    useEffect(function(){
        ServicioHabitacion()
        .then (function(respuesta){
            setHabitaciones(respuesta)
            setEstadoDeCarga(false)
        })
    },[])

//Evaluando la carga para renderizar respuesta
   if(estadoDeCarga){
    return(
        <>
           <h1>Estoy cargando</h1>
            <Footer></Footer>
        </>
     
    )


   }else{

        return(
            <>
            <div className="container-fluid fondo ">
                <div className="row row-cols-1 row-cols-md-2 p-5 g-2 ">
                {
                    habitaciones.datos.map(function(habitacion){
                        return(
                        
                                    <div className="col ">
                                        <h4 className="text-secondary "> {habitacion.nombre}</h4>

                                        <div className="card h-75 w-75 ">
                                        
                                            <img src={habitacion.imagenes[0]} className="img-fluid w-100  card-img-top h-100  " />
                                                <div class="card-body">
                                                    <p class="card-text">{habitacion.descripcion}</p>
                                                </div>
                                        </div>
                                    
                                    </div>
                                
                                
                            
                            
                        )
                    })
                }
                </div>
            </div>

            <Footer className=" fixed-bottom"></Footer>
            </>
        )

   }
}
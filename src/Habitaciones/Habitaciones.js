import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion.js"

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
        <h1>Estoy cargando</h1>
    )


   }else{

        return(
            <div>
                {
                    habitaciones.datos.map(function(habitacion){
                        return(
                            <div>
                                <h1>{habitacion.nombre}</h1>
                                <img src={habitacion.imagenes[0]}></img>
                            </div>
                        )
                    })
                }
            </div>
        )

   }
}
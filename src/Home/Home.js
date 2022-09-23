
import'./Home.css'
import { FormularioReserva } from '../FormularioReserva/FormularioReserva.js'
import { Actividades } from '../Actividades/Actividades.js'
import {Footer} from '../Footer/Footer.js'
import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion.js"
import  {useEffect,useState} from 'react'// hooks functiones especiales de react 
import Swal from 'sweetalert2'





export function Home(){
    const [estadoDeCarga,setEstadoDeCarga]=useState(true)//con el set guardo cosas 
    const[habitaciones,setHabitaciones]=useState(null) //variable global para almacenar consulta de habitaciones
    const[habitacion,setidHabitacion]=useState("")

    useEffect(function(){
        ServicioHabitacion()
        .then (function(respuesta){
            setHabitaciones(respuesta)
            setEstadoDeCarga(false)
            console.log(respuesta)
        })
    },[])

    if(estadoDeCarga){
        return(
            <>
               <h1>Estoy cargando</h1>
                
            </>
         
        )
    
    
    }else{

        return(


            <>
            <div className='banner'>
               <FormularioReserva habitacionSeleccionada={habitacion}/>
            </div>
            
            <div>
                <Actividades></Actividades>
            </div>
            
            
            <div className="mt-5">

                        <div className='container-fluid my-5'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h1>Habitaciones: </h1>
                                </div>
                            </div>
                            <div className='row row-cols-1 row-cols-md-3 g-2'>
                            {

                                habitaciones.datos.map(function(habitacion){
                                    return(
                                        <>
                                            
                                                <div className="col">

                                                    <div className='card h-100'>
                                                        <img src={habitacion.imagenes[0]} alt="img" height="250px" className=''/>
                                                        <h3 className='text-center'>{habitacion.nombre}</h3>
                                                        <p className='mx-2'>{habitacion.descripcion}</p>
                                                        <h2 className='text-start'>${habitacion.valorNoche}</h2>
                                                        <div className='mx-2 d-inline'>
                                                            <i className="bi bi-person-fill"></i>
                                                            <i className="bi bi-person-fill"></i>
                                                            <i className="bi bi-person-fill"></i>
                                                        </div>
                                                        <button onClick={()=>{
                                                            setidHabitacion(habitacion._id)
                                                            Swal.fire({
                                                                position: 'center',
                                                                icon: 'success',
                                                                title: 'habitacion seleccionada',
                                                                showConfirmButton: false,
                                                                timer: 2500
                                                              })
                                                        }}className='btn btn-outline-success '>Reservar</button>
                                                    </div>

                                                </div>
                                             
                                            
                                        </>
                                       
                                            
                                    )
                                })

                            }

                            </div>
                        

                        </div>
                        
                </div>
                <div>
                <Footer></Footer>
            </div>
            </>
            
        )

    }

    

}
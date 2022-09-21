import { useState } from "react"
import{ServicioReserva} from "../services/ServicioReserva/ServicioReserva.js"


export function FormularioReserva(){

    const[entrada,setEntrada]=useState("")
    const[salida,setSalida]=useState("")
    const[ninos,setNinos]=useState("")
    const[adultos,setAdultos]=useState("")

    function EnvioFormulario(evento){
        evento.preventDefault()
        let data= {
            "idHabitacion":"6321ef745a1931ff38e7c2c3",
            "fechaEntrada":entrada,
            "fechaSalida":salida,
            "numeroNinos":ninos,
            "numeroAdultos":adultos
        }
    }

    return(

        <>

            <form className="" onSubmit={EnvioFormulario}>
                <div className="row">
                    <div className="col-12 col-md-8 text-white">
                        <h4>reserva con nosotros</h4>
                        <h5>Los precios mas economicos del marcado</h5>
                        <h5>Reserva ya</h5>
                        <hr></hr>
                    </div>
                </div>

                <div className="row text-white fw-bold d-flex">
                    <div className="col-12 col-md-4">
                        <label className="form-label"> Fecha de ingreso</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-calendar-date"></i></span>
                            <input
                             type="date" 
                             class="form-control shadow" 
                             //detectar cuando el usuario guarda el valor de la caja, y me permite capturar informacion
                             onChange={(evento)=>{
                                setEntrada(evento.target.value)
                             }}
                             value={entrada}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <label className="form-label"> Fecha de salida</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-calendar-date"></i></span>
                            <input 
                            type="date" 
                            class="form-control shadow" 
                            onChange={(evento)=>{
                                setSalida(evento.target.value)
                             }}
                             value={salida}
                             />
                        </div>
                    </div>
                </div>

                <div className="row">
                
                    <div className="col-12 col-md-4 text-white">
                            <label className="form-label"> Numero de niños</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="bi bi-person"></i></span>
                                <select
                                 class="form-select" 

                                 onChange={(evento)=>{
                                    setNinos(evento.target.value)
                                 }}
                                 value={ninos}
                                 defaultValue="0"
                                >
                                        <option selected>Seleccione cantidad</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 text-white">
                            <label className="form-label"> Numero de adultos</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="bi bi-person"></i></span>
                                <select 
                                class="form-select" 
                                    onChange={(evento)=>{
                                        setAdultos(evento.target.value)
                                    }}
                                    value={adultos}
                                    defaultValue="1"
                                    >
                                
                                        <option selected>Seleccione cantidad</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                </select>
                            </div>
                            
                        </div>

                        <button type="buton" class="btn btn-outline-success w-50 ms-5 form"><i class="bi bi-airplane-fill"> Reserva</i></button> 
                       
                </div>
            </form>
            
        </>
    )

}
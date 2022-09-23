export async function ServicioReserva(datos){

    console.log("Estamos en el servicio")
    console.log(datos)
    
    const URI = "https://servercomfama.herokuapp.com/viajescomfama/reserva"
    
    const PETICION={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        //stringify se utiliza para convertir el formato a json
        body:JSON.stringify(datos)
    }

    let respuesta= await fetch(URI,PETICION)
    respuesta= await respuesta.json()

    return respuesta
}
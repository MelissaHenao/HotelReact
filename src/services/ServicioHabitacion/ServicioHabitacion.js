export  async function ServicioHabitacion(){

    // 1.URI DEL SERVICIO

    const URI = "https://servercomfama.herokuapp.com/viajescomfama/habitaciones"

    //2.CONFIGURACION DE LA PETICION

    const PETICION ={
        method: "GET"
        //No lleva body por que es un get (buscar)
    }

    //3. CONSUME

    let respuesta = await fetch(URI,PETICION)
    let datos = await respuesta.json()

    return datos
}
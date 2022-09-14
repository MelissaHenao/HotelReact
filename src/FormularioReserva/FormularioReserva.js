export function FormularioReserva(){

    return(

        <>

            <form className="">
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
                            <input type="date" class="form-control shadow"  />
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <label className="form-label"> Fecha de salida</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-calendar-date"></i></span>
                            <input type="date" class="form-control shadow"  />
                        </div>
                    </div>
                </div>

                <div className="row">
                
                    <div className="col-12 col-md-4 text-white">
                            <label className="form-label"> Numero de niños</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><i class="bi bi-person"></i></span>
                                <select class="form-select" aria-label="Default select example">
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
                                <select class="form-select" aria-label="Default select example">
                                        <option selected>Seleccione cantidad</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                </select>
                            </div>
                            
                        </div>

                        <button type="button" class="btn btn-outline-success w-50 ms-5 form"><i class="bi bi-airplane-fill"> Reserva</i></button> 
                       
                </div>
            </form>
            
        </>
    )

}
const event = () => {
  const view = `
  <section class = "event">
    <h1 class="container__form--title">Crea tu evento</h1>
    <form class="event_form form" id="" action = "" method = "">    
      <div class="">
        <label for = "Hora" class="">Hora</label>    
        <input class="" type = "time" id = "Hora"  name  = "hora" autocomplete = "off" >
      </div>      
      <div class="">
        <label for = "fname" class="">Fecha</label>
        <input class="" type = "date" id = "Fecha" name = "Fecha" required autocomplete = "off" >
      </div>
      <div>
        <label class="" for = "fname">Deporte</label>
        <select class="" type = "text" id = "Deporte" name = "Deporte" required autocomplete = "off" >
          <option class="" value="Futbol">Futbol</option>
        </select>
      </div>      
      <div class="">
        <input class="" type = "text" id = "place" name = "lugar" placeholder = "Lugar" required autocomplete = "off" maxlength="50" >
      </div>
      <div class="">
        <input class="" type = "text" id = "description" name = "descripcion" placeholder = "Descripcion" required autocomplete = "off" maxlength="100" >
      </div>      
      <div class="">
        <a class="button" type = "submit" id = "publicar">Publicar</a>
      </div>
    </form>  
  </section>
  `;
  const container = document.createElement('div');
  container.innerHTML = view;
  return container;
};

export default event;

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
        <textarea name="place" id="" cols="40" rows="3" placeholder="Lugar"></textarea>        
      </div>
      <div class="">
        <textarea name="description" id="" cols="40" rows="8" placeholder="Descripcion"></textarea>        
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

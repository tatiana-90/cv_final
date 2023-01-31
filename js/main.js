/*Si clicamos en el botón del sol, borrarémos la clase css dark-mode del div 
con id page y se aplicará el estilo active al sol*/
document.getElementById('id-sun').onclick = function(){
    document.getElementById('page').classList.remove('dark-mode')
    document.getElementById('fondo').classList.remove('dark-mode')
    document.getElementById('datos').classList.remove('dark-mode')
    document.getElementById('section1').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
  }
  /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del div 
  con id page y se aplicará el estilo active a la luna*/
  document.getElementById('id-moon').onclick = function(){
    document.getElementById('page').classList.add('dark-mode')
    document.getElementById('fondo').classList.add('dark-mode')
    document.getElementById('datos').classList.add('dark-mode')
    document.getElementById('section1').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
  }
  const formulario = document.querySelector('#formulario');



  /*Funcion para extraer todos los datos del formulario y convertirlos en formato JSON */
  
  const procesaTodo = (event) => {
   /*Para una accion predeterminada del evento*/
   event.preventDefault();
   /*constructor que crea un objeto de tipo FormData */
  const datos = new FormData(event.target);
  
   /* El método Object.fromEntries() transforma una lista de pares con [clave-valor] en un objeto.*/
  const datosCompletos = Object.fromEntries(datos.entries());
  console.log(JSON.stringify(datosCompletos));
  
  }
  
  
  
  /*Funcion Para Extraer un solo dato del formulario */
  
  const procesaDatos = (event) => {
      /*Para una accion predeterminada del evento*/
      event.preventDefault();
  
      /*constructor que crea un objeto de tipo FormData */
      const datos = new FormData(event.target);
  
      /*El metodo get retorna el valor associado con la clave del objeto FormData */
      const correo = datos.get('email');   
      console.log({correo});
  
  }
  
  formulario.addEventListener('submit', procesaTodo);

  var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

  
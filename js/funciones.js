//Funcion habilita el evento de drag an Drop y llama a las funciones de intercambio de fichas y comer fichas
function dragDrop(){
  $(".damaRoja").draggable({
    revert: true,
    containment: ".tablero",
    start: function( event, ui ) {
      dragDrop();
    }
  });
  $(".damaAzul").draggable({
    revert: true,
    containment: ".tablero",
    start: function( event, ui ) {
      dragDrop();
    }
  });
  $(".fichaRoja").draggable({
    revert: true,
    containment: ".tablero",
    start: function( event, ui ) {
      dragDrop();
    }
  });
  $(".fichaAzul").draggable({
    revert: true,
    containment: ".tablero",
    start: function( event, ui ) {
      dragDrop();
    }
  });
  $(".noFicha").droppable({
    drop: function(event, ui){
      var draggableId = ui.draggable.attr("id");
      var droppableId = $(this).attr("id");
      var draggableClass = ui.draggable.attr("class");
      var droppableClass = $(this).attr("class");
      if(movimientoValido(draggableClass,droppableClass,draggableId,droppableId)){
        mueveFicha(draggableId,droppableId,draggableClass,droppableClass);
      }
      coronaFicha(droppableId);
      finDeJuego();
    }
  });
}
//cambia fichas
function mueveFicha(draggableId,droppableId,draggableClass,droppableClass){

  $("#"+droppableId).droppable("destroy");
  $("#"+draggableId).draggable("destroy");
  $("#"+droppableId).removeClass( droppableClass, 300, "easeInOutQuad");
  $("#"+draggableId).removeClass( draggableClass, 300, "easeInOutQuad");
  if(draggableClass.includes("fichaRoja")){
    $("#"+droppableId).addClass( "fichaRoja", 300, "easeInOutQuad");
    $("#"+draggableId).addClass( "noFicha", 300, "easeInOutQuad");
  }
  if(draggableClass.includes("fichaAzul")){
    $("#"+droppableId).addClass( "fichaAzul", 300, "easeInOutQuad");
    $("#"+draggableId).addClass( "noFicha", 300, "easeInOutQuad");
  }
  if(draggableClass.includes("damaAzul")){
    $("#"+droppableId).addClass( "damaAzul", 300, "easeInOutQuad");
    $("#"+draggableId).addClass( "noFicha", 300, "easeInOutQuad");
  }
  if(draggableClass.includes("damaRoja")){
    $("#"+droppableId).addClass( "damaRoja", 300, "easeInOutQuad");
    $("#"+draggableId).addClass( "noFicha", 300, "easeInOutQuad");
  }
}
//verifica si el movimiento es valido
function movimientoValido(draggableClass,droppableClass,draggableId,droppableId){
  if(droppableClass.includes("noFicha")){
      var fichaSostenida = parseInt(draggableId);
      var posicionSoltar = parseInt(droppableId);

      if(draggableClass.includes("fichaRoja")){
        //moviemiento normal
        if(((posicionSoltar+7)==fichaSostenida)||((posicionSoltar+9)==fichaSostenida)){
          return true;
        }
        //moviemiento captura
        if((posicionSoltar+14)==fichaSostenida){
          if(($("#"+(fichaSostenida-7)).attr("class")).includes("fichaAzul")){
            comeFicha((fichaSostenida-7),"fichaAzul")
            return true;
          }
          if(($("#"+(fichaSostenida-7)).attr("class")).includes("damaAzul")){
            comeFicha((fichaSostenida-7),"damaAzul")
            return true;
          }
        }
        //moviemiento captura
        if((posicionSoltar+18)==fichaSostenida){

          if(($("#"+(fichaSostenida-9)).attr("class")).includes("fichaAzul")){
            comeFicha((fichaSostenida-9),"fichaAzul")
            return true;
          }
          if(($("#"+(fichaSostenida-9)).attr("class")).includes("damaAzul")){
            comeFicha((fichaSostenida-9),"damaAzul")
            return true;
          }
        }
      }

      if(draggableClass.includes("fichaAzul")){
        //moviemiento normal
        if(((posicionSoltar-7)==fichaSostenida)||((posicionSoltar-9)==fichaSostenida)){
          return true;
        }
        //moviemiento captura
        if((posicionSoltar-14)==fichaSostenida){
          if(($("#"+(fichaSostenida+7)).attr("class")).includes("fichaRoja")){
            comeFicha((fichaSostenida+7),"fichaRoja")
            return true;
          }
          if(($("#"+(fichaSostenida+7)).attr("class")).includes("damaRoja")){
            comeFicha((fichaSostenida+7),"damaRoja")
            return true;
          }
        }
        //moviemiento captura
        if((posicionSoltar-18)==fichaSostenida){
          if(($("#"+(fichaSostenida+9)).attr("class")).includes("fichaRoja")){
            comeFicha((fichaSostenida+9),"fichaRoja")
            return true;
          }
          if(($("#"+(fichaSostenida+9)).attr("class")).includes("damaRoja")){
            comeFicha((fichaSostenida+9),"damaRoja")
            return true;
          }
        }
      }
      if(draggableClass.includes("damaRoja")){
        //moviemiento normal
        if(((posicionSoltar+7)==fichaSostenida)||((posicionSoltar-7)==fichaSostenida)||((posicionSoltar+9)==fichaSostenida)||((posicionSoltar-9)==fichaSostenida)){
          return true;
        }
        //moviemiento captura
        if((posicionSoltar-14)==fichaSostenida){
          if(($("#"+(fichaSostenida+7)).attr("class")).includes("fichaAzul")){
            comeFicha((fichaSostenida+7),"fichaAzul")
            return true;
          }
          if(($("#"+(fichaSostenida+7)).attr("class")).includes("damaAzul")){
            comeFicha((fichaSostenida+7),"damaAzul")
            return true;
          }
        }
        //moviemiento captura
        if((posicionSoltar-18)==fichaSostenida){
          if(($("#"+(fichaSostenida+9)).attr("class")).includes("fichaAzul")){
            comeFicha((fichaSostenida+9),"fichaAzul")
            return true;
          }
          if(($("#"+(fichaSostenida+9)).attr("class")).includes("damaAzul")){
            comeFicha((fichaSostenida+9),"damaAzul")
            return true;
          }
        }
        //moviemiento captura
        if((posicionSoltar+14)==fichaSostenida){
          if(($("#"+(fichaSostenida-7)).attr("class")).includes("fichaAzul")){
            comeFicha((fichaSostenida-7),"fichaAzul")
            return true;
          }
          if(($("#"+(fichaSostenida-7)).attr("class")).includes("damaAzul")){
            comeFicha((fichaSostenida-7),"damaAzul")
            return true;
          }
        }
        //moviemiento captura
        if((posicionSoltar+18)==fichaSostenida){
          if(($("#"+(fichaSostenida-9)).attr("class")).includes("fichaAzul")){
            comeFicha((fichaSostenida-9),"fichaAzul")
            return true;
          }
          if(($("#"+(fichaSostenida-9)).attr("class")).includes("damaAzul")){
            comeFicha((fichaSostenida-9),"damaAzul")
            return true;
          }
        }
      }
      if(draggableClass.includes("damaAzul")){
        //moviemiento normal
        if(((posicionSoltar+7)==fichaSostenida)||((posicionSoltar-7)==fichaSostenida)||((posicionSoltar+9)==fichaSostenida)||((posicionSoltar-9)==fichaSostenida)){
          return true;
        }
        //moviemiento captura
        if((posicionSoltar-14)==fichaSostenida){
          if(($("#"+(fichaSostenida+7)).attr("class")).includes("fichaRoja")){
            comeFicha((fichaSostenida+7),"fichaRoja")
            return true;
          }
          if(($("#"+(fichaSostenida+7)).attr("class")).includes("damaRoja")){
            comeFicha((fichaSostenida+7),"damaRoja")
            return true;
          }
        }
        //moviemiento captura
        if((posicionSoltar-18)==fichaSostenida){
          if(($("#"+(fichaSostenida+9)).attr("class")).includes("fichaRoja")){
            comeFicha((fichaSostenida+9),"fichaRoja")
            return true;
          }
          if(($("#"+(fichaSostenida+9)).attr("class")).includes("damaRoja")){
            comeFicha((fichaSostenida+9),"damaRoja")
            return true;
          }
        }
        //moviemiento captura
        if((posicionSoltar+14)==fichaSostenida){
          if(($("#"+(fichaSostenida-7)).attr("class")).includes("fichaRoja")){
            comeFicha((fichaSostenida-7),"fichaRoja")
            return true;
          }
          if(($("#"+(fichaSostenida-7)).attr("class")).includes("damaRoja")){
            comeFicha((fichaSostenida-7),"damaRoja")
            return true;
          }
        }
        //moviemiento captura
        if((posicionSoltar+18)==fichaSostenida){
          if(($("#"+(fichaSostenida-9)).attr("class")).includes("fichaRoja")){
            comeFicha((fichaSostenida-9),"fichaRoja")
            return true;
          }
          if(($("#"+(fichaSostenida-9)).attr("class")).includes("damaRoja")){
            comeFicha((fichaSostenida-9),"damaRoja")
            return true;
          }
        }
      }
  }else{
    return false;
  }
}
//funcion conquisa ficha
function comeFicha(Id,Clase){
  $("#"+Id).draggable("destroy");
  $("#"+Id).removeClass( Clase, 300, "easeInOutQuad");
  $("#"+Id).addClass( "noFicha", 300, "easeInOutQuad");
}
//funcion que corona
function coronaFicha(Id){
  if(Id>0 && Id <9){
    $("#"+Id).removeClass("fichaRoja", 300, "easeInOutQuad");
    $("#"+Id).addClass( "damaRoja", 300, "easeInOutQuad");
    //$("#"+Id).draggable("destroy");
  }
  if(Id>65 && Id <72){
    $("#"+Id).removeClass( "fichaAzul", 300, "easeInOutQuad");
    $("#"+Id).addClass( "damaAzul", 300, "easeInOutQuad");
    //$("#"+Id).draggable("destroy");
  }
}
//funcion que da control sobre las fichas a un jugador a la vez
function deshabilita(draggableClass){
  if(draggableClass.includes("fichaRoja")){
    $(".fichaRoja").draggable('disable');
    $(".fichaAzul").draggable('enable');
  }
  if(draggableClass.includes("fichaAzul")){
    $(".fichaRoja").draggable('enable');
    $(".fichaAzul").draggable('disable');
  }
};
//chequea fin de juego
function finDeJuego(){
  var flagAzul =false;
  var flagRoja =false;
  for (var i=1; i<73; i++){
    if(!$("#"+i).hasClass("fichaRoja")){      
      flagRoja=true;
    }else {
      flagRoja=false;
      break;
    }
  }
  for (var i=1; i<73; i++){
      if(!$("#"+i).hasClass("fichaAzul")){
        flagAzul=true;
      }else {
        flagAzul=false;
        break;
      }
    }
    if(flagAzul){
      alert("GANADOR FICHAS ROJAS")
    }
    if(flagRoja){
      alert("GANADOR FICHAS AZUL")
    }
  }

//funcion que incializa el proces
$( document ).ready(function() {
  console.log( "document loaded" );
  dragDrop();
});

//Funcion habilita el evento de drag an Drop y llama a las funciones de intercambio de fichas y comer fichas
function dragDrop(){
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
      if(verificaMovimiento(draggableId,droppableId,draggableClass)){
           $("#"+droppableId).switchClass( droppableClass, draggableClass, 300, "easeInOutQuad");
           $("#"+draggableId).switchClass( draggableClass, droppableClass, 300, "easeInOutQuad");
           deshabilita(draggableClass);
         }
       }
     });
}
//funcion que verifica que los movimientos sean correctos
function verificaMovimiento(draggableId,droppableId,draggableClass){
  var sujetado = parseInt(draggableId);
  var suelto = parseInt(droppableId);
  if(draggableClass.includes("fichaRoja")){
    if(suelto==(sujetado-9)){
      if($("#"+(sujetado-9)).attr("class").includes("noFicha")){
        return true;
      }
    }
    if(suelto==(sujetado-7)){
      if($("#"+(sujetado-7)).attr("class").includes("noFicha")){
        return true;
      }
    }
    if(suelto==(sujetado-18)){
      if($("#"+(sujetado-9)).attr("class").includes("fichaAzul")){
        var id = $("#"+(sujetado-9)).attr("id");
        var clase = $("#"+(sujetado-9)).attr("class");
        comeFicha(id,clase);
        return true;
      }
    }
    if(suelto==(sujetado-14)){
      if($("#"+(sujetado-7)).attr("class").includes("fichaAzul")){
        var id = $("#"+(sujetado-7)).attr("id");
        var clase = $("#"+(sujetado-7)).attr("class")
        comeFicha(id,clase);
        return true;
      }
    }
  }
  if(draggableClass.includes("fichaAzul")){
    if(suelto==(sujetado+9)){
      if($("#"+(sujetado+9)).attr("class").includes("noFicha")){
        return true;
      }
    }
    if(suelto==(sujetado+7)){
      if($("#"+(sujetado+7)).attr("class").includes("noFicha")){
        return true;
      }
    }
    if(suelto==(sujetado+18)){
      if($("#"+(sujetado+9)).attr("class").includes("fichaRoja")){
        var id = $("#"+(sujetado+9)).attr("id");
        var clase = $("#"+(sujetado+9)).attr("class");
        comeFicha(id,clase);
        return true;
      }
    }
    if(suelto==(sujetado+14)){
      if($("#"+(sujetado+7)).attr("class").includes("fichaRoja")){
        var id = $("#"+(sujetado+7)).attr("id");
        var clase = $("#"+(sujetado+7)).attr("class");
        comeFicha(id,clase);
        return true;
      }
    }
  }
  return false;
}
//Funcion que come fichas al saltar sobre ellas
function comeFicha(id,clase){
  $("#"+id).switchClass( clase,"noFicha", 200, "easeInOutQuad");
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
//funcion que incializa el proces
$( document ).ready(function() {
  console.log( "document loaded" );
  dragDrop();
});

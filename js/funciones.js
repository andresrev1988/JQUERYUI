function dragDrop(){
  $(".fichaRoja").draggable({
    revert: true,
    containment: ".tablero",
    drag: function(event, ui){}
  });
  $(".fichaAzul").draggable({
    revert: true,
    containment: ".tablero",
    drag: function(event, ui){}
  });
  $(".noFicha").droppable({
       drop: function(event, ui){
         var draggableId = ui.draggable.attr("id");
         var droppableId = $(this).attr("id");
         var draggableClass = ui.draggable.attr("class");
         var droppableClass = $(this).attr("class");
         $("#"+droppableId).switchClass( droppableClass, draggableClass, 1000, "easeInOutQuad");
         $("#"+draggableId).switchClass( draggableClass, droppableClass, 1000, "easeInOutQuad");
         dragDrop();
       }
     });
}

$( document ).ready(function() {
  console.log( "document loaded" );
  dragDrop();
});

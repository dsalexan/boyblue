$("#clientes .arrow").click(function(){
    if($(this).data("status")==0) return;

    acc = $(this).data("acc");
    size = $("#clientes").data("slide-size");
    curr = $("#clientes").data("slide");

    $("#clientes").data("slide", curr+acc);

    $("#client-prev").data("status", 1);
    $("#client-prev").removeClass("arrow-inactive");

    $("#client-next").data("status", 1);
    $("#client-next").removeClass("arrow-inactive");

    if(curr+acc==0 || curr+acc==size-1){
         if(curr+acc==0){
            $("#client-prev").data("status", 0);
            $("#client-prev").addClass("arrow-inactive");
         }
         
         if(curr+acc==size-1){
            $("#client-next").data("status", 0);
            $("#client-next").addClass("arrow-inactive");
         }
    }

    $("#clientes .boxes").addClass("box-inactive");
    $("#clientes .boxes[data-index=" + (curr+acc) + "]").removeClass("box-inactive");

});

function reDraw(){
    $('body').addClass('dummyclass').delay(0).removeClass('dummy‌​class');
}

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

$("#projetos .arrow").click(function(){
    if($(this).data("status")==0) return;

    acc = $(this).data("acc");
    size = $("#projetos").data("slide-size");
    curr = parseInt($("#projetos").attr("data-slide"));
    
    $("#projetos").attr("data-slide", curr+acc);

    $("#box-prev").data("status", 1);
    $("#box-prev").removeClass("inactive");

    $("#box-next").data("status", 1);
    $("#box-next").removeClass("inactive");

    if(curr+acc==3 || curr+acc==size-1){
         if(curr+acc==3){
            $("#box-next").data("status", 0);
            $("#box-next").addClass("inactive");
         }
         
         if(curr+acc==size-1){
            $("#box-prev").data("status", 0);
            $("#box-prev").addClass("inactive");
         }
    }

    $("#projetos .box").attr("class", "box inactive"); // limpa todas as classes e deixa só box
    $("#projetos .box").each(function(){
        if($(this).data('index') <= curr+acc && $(this).data('index') >= curr+acc-3){
            $(this).removeClass("inactive");

            if($(this).data('index') == curr+acc){
                $(this).addClass("left-0");
            }else if($(this).data('index') == curr+acc-1){
                $(this).addClass("left-25");
            }else if($(this).data('index') == curr+acc-2){
                $(this).addClass("left-50");
            }else if($(this).data('index') == curr+acc-3){
                $(this).addClass("left-75");
            }
        }
    });
    
    reDraw();
});
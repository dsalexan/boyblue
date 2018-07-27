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

$("#projetos .arrow").not(".inactive").click(function(){
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

$("#competencias .next").click(function(){
    curr = parseInt($("#competencias").attr("data-slide"));
    size = $("#competencias").data("size");

    if(curr + 1 > size){
        curr = 1;
    }else{
        curr += 1;
    }

    $("#competencias").attr("data-slide", curr);
    $("#competencias .comp-box").addClass("inactive");
    $("#competencias .comp-box[data-slide=" + curr + "]").removeClass("inactive");
    // alert('yey, curr=' + curr);
});

$("#eventos .event-box").hover(function(){
    $("#eventos .event-box").not(this).addClass("smaller-box");
}, function(){
    $("#eventos .event-box").removeClass("smaller-box");
});

$("#competencias .play-button").click(function(){
    // DISCLAIMER
    // USAR ANIMATE NESSE CASO É ZOADO
    // DEVIA SER TRANSITION, MAS TO NO EMBALO DE JQUERY
    // MAS SERIO, DEPOIS MUDO PRA TRANSITION // Nov 21th 01:48
    $("#competencias .boxes").animate({left: "-50%"}, "slow");
    $("#competencias .section-title").animate({fontSize: "20px"}, "slow");
    $("#competencias .section-title p").animate({marginBottom: "0.3em"}, "slow");
    $("#competencias .divider").animate({
        borderTopWidth: "4em",
        borderBottomWidth: "1.5em",
        marginRight: "1em"
    }, "slow");
    $("#competencias .holder-title").animate({
        height: "25vh",
        width: "25vh"
    }, "slow");
    $("#competencias .borda").animate({
        borderTopWidth: "6em",
        borderBottomWidth: "6em"
    }, "slow", function(){
        $("#competencias .arrow-back").removeClass("disabled");
    });

    $(this).hide();
});

$("#competencias .arrow-back").click(function(){
    $("#competencias .boxes").animate({left: "0"}, "slow");
    $("#competencias .section-title").animate({fontSize: "70px"}, "slow");
    $("#competencias .section-title p").animate({marginBottom: "1rem"}, "slow");
    $("#competencias .dividers").animate({
        borderTopWidth: "6em",
        borderBottomWidth: "3.5em",
        marginRight: "2em"
    }, "slow");
    $("#competencias .holder-title").animate({
        height: "100%",
        width: "22.5%"
    }, "slow");
    $("#competencias .borda").animate({
        borderTopWidth: "0",
        borderBottomWidth: "0"
    }, "slow", function(){
        $("#competencias .play-button").show();
    });

    $(this).addClass("disabled");
});

$('form[name=contact-form]').submit(function(event){
    $.ajax({
        url : 'send-mail.php',
        type : 'POST',
        data : $(this).serialize(),
        success : function(data){
            $('#contato #submit-contact').popup('show');
            setTimeout(function(){
                $('#contato #submit-contact').popup('hide');
            }, 2000);
        }
    });
    
    event.preventDefault();
});

$('#contato #submit-contact')
  .popup({
    position : 'bottom center',
    inverted: true,
    inline: true,
    popup : $('.custom.popup'),
    on: 'manual'
  })
;
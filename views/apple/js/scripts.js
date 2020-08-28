$(function(){

    $('#autocomplete').autocomplete({
        source: path + 'search/',
        minLength: 1,
        select: function ( event, ui){
            window.location = path + 'search/?search=' + encodeURIComponent(ui.item.value);
        }
    });


    $('.catalog').dcAccordion();

    $('#forgot-link').click(function(){
        $('#auth').fadeOut(300, function(){
            $('#forgot').fadeIn();
        });
        return false;
    });

    $('#auth-link').click(function(){
        $('#forgot').fadeOut(300, function(){
            $('#auth').fadeIn();
        });
        return false;
    });

});
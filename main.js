$(document).ready(function() {

    redrawNav();

    /* Scroll event handler */
    $(window).bind('scroll',function(){
        redrawNav();
        scrollLayers();
    });

    /* Next/prev and nav btn click handlers */
    $('.general-info').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 1000, function() {
            scrollLayers();
        });
        return false;
    });
    $('.frontend-school').click(function(){
        $('html, body').animate({
            scrollTop:$('#frontend-school').offset().top
        }, 1000, function() {
            scrollLayers();
        });
        return false;
    });
    $('.experience').click(function(){
        $('html, body').animate({
            scrollTop:$('#experience').offset().top
        }, 1000, function() {
            scrollLayers();
        });
        return false;
    });

    /* Scroll the background layers */
    function scrollLayers(){
        var scrolled = $(window).scrollTop();
        $('.drawn-bg1').css('top',(0-(scrolled*.25))+'px');
        $('.drawn-bg2').css('top',(0-(scrolled*.65))+'px');
    }

    /* Set navigation dots to an active state as the user scrolls */
    function redrawNav(){
        var article1Top =  0;
        // The top of each article is offset by half the distance to the previous article.
        var article2Top =  $('#frontend-school').offset().top / 2;
        var article3Top =  ($(document).height() - $('#experience').offset().top) / 2;
        $('nav.nav li').removeClass('active');
        if($(document).scrollTop() >= article1Top && $(document).scrollTop() < article2Top){
            $('li.general-info').addClass('active');
        } else if ($(document).scrollTop() >= article2Top && $(document).scrollTop() < article3Top){
            $('li.frontend-school').addClass('active');
        } else if ($(document).scrollTop() >= article3Top){
            $('li.experience').addClass('active');
        }
    
    }

})

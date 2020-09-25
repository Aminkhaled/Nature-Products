$( document ).ready(function() {
    $('.carousel-item').ripples({
        imageUrl:'../img/item-1',
        perturbance: 0.9,
        interactive:true,
        resolution:500,
        onclick:true
    });


    setTimeout(function (){
        $('.loader').remove();
    },5000)


});
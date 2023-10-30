

/* BURGER */

$(document).ready(function(){
	$('.header__burger').click(function(event){
        $('.header__burger,.navigation').toggleClass('active')
        $('body').toggleClass('lock');
 
    });
});

$(document).ready(function() {
    $('.navigation-item').click(function(event) {
        $('.header__burger,.navigation').removeClass('active');
        $('body').removeClass('lock')
    });
});


/* FORM */

const form = document.getElementById('form');

function retrieveFormValue(event){
    event.preventDefault();
    
    const Username = form.querySelector('[name="Username"]'), 
    Usertel = form.querySelector('[name="Usertel"]');

    const values = {
        Username: Username.value,
        Usertel: Usertel.value
    };

    console.log ('Получение данных',values);
}



/*SLIDER*/

new Swiper('.image-slider'), {
    
    navigation: {
    nextEl:'swiper-button-next',
    prevEl:'swiper-button-prev'
    },

    slidesPerView: 4,
    
}


/*SMOOTH SCROLL*/

$('a[href^="#"]').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
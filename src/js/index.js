/* BURGER */

$(document).ready(function(){
	$('.header__burger').click(function(event){
        $('.header__burger,.navigation').toggleClass('active')
        $('body').toggleClass('lock');

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


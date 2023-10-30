import { Fancybox } from "@fancyapps/ui";

import "slick-carousel/slick/slick";

import ApiService from "./services/api-sevice";
/* BURGER */

const { document } = require("postcss");

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.navigation").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  $(".navigation-item").click(function (event) {
    $(".header__burger,.navigation").removeClass("active");
    $("body").removeClass("lock");
  });
});

/* MAIN FORM SIGN UP */

$(document).ready(function () {
  $(".header-content button").click(function (event) {
    $(".popup__sign-up").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  $(".popup__close").click(function (event) {
    $(".popup__sign-up").removeClass("active");
    $("body").removeClass("lock");
  });
});

const formSignUp = document.querySelector(".popup__form");
const nameInput = formSignUp.querySelector(".name");
const phoneInput = formSignUp.querySelector(".phone");

formSignUp.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = nameInput.value;
  const phone = phoneInput.value;

  if (!phone.checkValidity()) {
    nameInput.style.border = "1px solid red";
  }

  if (!name || !phone) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  const loader = document.createElement("div");
  loader.classList.add("loader");
  formSignUp.appendChild(loader);

  // Simulating form submission delay (replace with actual form submission logic)
  setTimeout(() => {
    loader.remove();
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.textContent =
      "Ваша заявка отправлена! В ближайшее время с вами свяжется менеджер.";
    formSignUp.appendChild(successMessage);

    setTimeout(() => {
      successMessage.remove();
      $(".popup__sign-up").removeClass("active");
      $("body").removeClass("lock");
      formSignUp.reset();
    }, 3000);
  }, 2000);
});

/* MASK-PHONE*/

const element = document.getElementById("phone_popup");
const maskOptions = {
  mask: "+7(000)000-00-00",
  lazy: false,
};
const mask = IMask(element, maskOptions);

/* TABS*/

$(document).ready(function () {
  $(".navigation__name").click(function (event) {
    event.preventDefault();

    $(".navigation__name").removeClass("active");
    $(".prices__costs").removeClass("active");

    $(this).addClass("active");
    $($(this).attr("href")).addClass("active");
  });
});

/* FORM ПЕРВЫЙ ВАРИАНТ

$(document).ready(function () {
  const form = document.getElementById("form");

  function retrieveFormValue(event) {
    event.preventDefault();

    const Username = form.querySelector('[name="Username"]'),
      Usertel = form.querySelector('[name="Usertel"]');

    const values = {
      Username: Username.value,
      Usertel: Usertel.value,
    };

    console.log("Получение данных", values);
  }
});  */

// ВТОРОЙ ВАРИАНТ

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("form").elements["Username"].value;
  let telephone = document.getElementById("form").elements["Usertel"].value;

  console.log("Username: " + username);
  console.log("Telephone: " + telephone);

  document.getElementById("form").reset();
});

/* ТРЕТИЙ ВАРИАНТ 

$(document).ready(function () {
  document.querySelector("form").addEventListener("submit"),
    (e) => {
      e.preventDefault();
    };

  const data = {
    name: document.querySelector(".username").value,
    telephone: document.querySelector(".telephone").value,
  };
  console.log(data);
});
*/

//  ApiService.getServices().then(InitializeServiceList);

/*SLIDER */

function init() {
  $(".slider").slick({
    slidesToShow: 3,
    prevArrow: ".slider-prev",
    nextArrow: ".slider-next",
    infinite: false,
  });
}
$(document).ready(init);

/*SMOOTH SCROLL*/
$(document).ready(function () {
  $('a[href^="#"]').on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(href).offset().top,
    });
    return false;
  });
});

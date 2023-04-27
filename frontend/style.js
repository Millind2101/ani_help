let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})

const loginForm = document.getElementById("contact")

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e);

    const data = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        subject : document.getElementById("subject").value,
        message : "test"
    }

    try {
        const response = await fetch('http://localhost:5050/api/contact', {
            method: 'post',
            body: data
          });

          console.log(response);
    } catch (error) {
        
    }  
    console.log(data);
    // handle submit
  });
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');

//open nav menu
menuBtn.addEventListener('click',() => {
    menu.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})






//close nav menu
const closeNav =() => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click',closeNav);


//close nav menu when menu items are clicked

if (window.innerWidth < 1024) {
  document.querySelectorAll(".nav__menu li a").forEach((navItem) => {
    navItem.addEventListener("click", closeNav);
  });
}


//change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});





//FETCHING DATA ON POST

let form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let dataCollected = new FormData(form);
  sendData(dataCollected);
}
);

function sendData(dataCollected) {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
      name: dataCollected.get('Name'),
      email: dataCollected.get('Email'),
      message: dataCollected.get('Message')
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => {
    if (response.ok) {
    } else {
      throw new Error('Error sending contact form data');
    }
  })
  .catch(error => {
  });
}


//fetching data on GET


function get_random_dog_image(){

  url = "https://dog.ceo/api/breeds/image/random";

  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    display_image(data.message);
  })
  .catch(function(error){
    console.log("Error: " + error);
  });


}

function display_image(image_url){
  document.getElementById("image").src = image_url;
}































  
  
  
  


    

    
    
 





































    
    
    
    
    //
    
    
    



























  
  
  
  


    

    
    
 





















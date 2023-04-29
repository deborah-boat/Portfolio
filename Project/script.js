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

if(window.innerWidth < 1024){
    document.querySelectorAll(".nav__menu li a").forEach(navItem =>{
        navItem.addEventListener('click',closeNav)
    })
}

//change navbar styles on scroll

window.addEventListener('scroll',() =>{
   document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0) 
})


//POST

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));







//GET


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
    
    
    



























  
  
  
  


    

    
    
 





















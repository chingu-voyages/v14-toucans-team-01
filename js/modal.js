const aboutus = document.getElementById('aboutus');
const modal = document.getElementById('modal');
let context = "<div id=\"mask\" class=\"hidden\"></div><button id=\"modalOpen\" class=\"button\" onclick = \"modalClick();\">Click Me</button><div id=\"easyModal\" class=\"modal hidden\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h2>Awesome! 💁</h2> <span class=\"modalClose\" onclick =\"modalClose();\">&times;</span> </div> <div class=\"modal-body\"> <h1>Tada! 🎉</h1> <p>You see this modal because you nailed it!</p> <p>Mission accomplished! You're ready to dive in to more fun in Unit 2!</p> </div> <div class=\"modal-footer\"> <h3>Stay tuned 🎧</h3> </div> </div> </div>";

modal.addEventListener('click', function() {
  
  modal.textContent = context;

}); 



// const modal = document.getElementById('easyModal');
// const mask = document.getElementById('mask'); 
// const btn = document.getElementById('modalOpen'); 
// const btnclose = document.getElementsByClassName('modalClose')[0];

// function modalClick() {
//   btn.style.visibility = "hidden"; 
//   mask.classList.remove('hidden'); 
//   modal.classList.remove('hidden'); 
//   btnclose.classList.add('closeBtn'); 
// }; 
  
// function modalClose() { 
//   btn.style.visibility = "visible"; 
//   mask.classList.add('hidden'); 
//   modal.classList.add('hidden'); 
//   btnclose.classList.remove('closeBtn'); 
// }; 

// modal.addEventListener('click', function() { 
//   btn.style.visibility = "visible";
//   mask.classList.add('hidden');
//   modal.classList.add('hidden'); 
// }, false);
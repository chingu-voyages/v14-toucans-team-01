import key from "./define.js";

fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=5&tags=vegetarian%2Cdessert", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"x-rapidapi-key": key
	}
})
.then((response) => {
  if(response.ok) { 
    return response.text(); 
  } else {
    throw new Error();
  }
})
.then((text) => {
  let recipe_list = JSON.parse(text);
  console.log(recipe_list.recipes);
  const element = document.getElementById("list");
  

  for(let i=0; i<5; i++){
    let cardname = document.getElementsByClassName("card-name")[i];

    let ele = document.getElementsByClassName("menu-img-container")[i];
    const liLast = document.createElement('p');
    console.log(recipe_list.recipes[i].image);
    let src = recipe_list.recipes[i].image;
    liLast.innerHTML = `<img id=\"${recipe_list.recipes[i].id}\" class=\"card-img\" src=\"${src}\" alt=\"menu picture\" onClick=\"reciperesult(${recipe_list.recipes[i].id})\"></img>`;
    ele.appendChild(liLast);
    let recipename = recipe_list.recipes[i].title;
    cardname.textContent = recipename; 
  }
  }
)
.catch((error) => console.log(error));


document.getElementsByClassName("search-submit")[0].addEventListener('click', function() {
  sessionStorage.ingredients = document.getElementById("search-input").value;
  location.href = "./_searchresult.html"

});

document.getElementsByTagName('form')[0].addEventListener('submit', function(evt) {
  sessionStorage.ingredients = document.getElementById("search-input").value;
  location.href = "./_searchresult.html";
  evt.preventDefault();
});
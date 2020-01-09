import key from "./define.js";
let ele = sessionStorage.ingredients;
let elements = ele.split(" ");

let name = "";
console.log(elements.length);
if(elements.length >= 2) {
  for(let i=0; i<elements.length-1; i++) {
    name += elements[i] + "%252C";
  }
} else {
  name = ele;
}
console.log(name);

// https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=
// https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=1000&ranking=1&ignorePantry=false&ingredients=" + name

let URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=1000&ranking=1&ignorePantry=false&ingredients=" + name;


// https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%252Cflour%252Csugar

fetch(URL, {
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
  document.getElementById("ingredients").innerHTML = `${recipe_list.length} recipe results found for \"${ele}\"`;

  const element = document.getElementById("list");
  console.log(recipe_list);
  console.log(recipe_list.length);
  for(let x=0; x<recipe_list.length; x++) {
    const liLast = document.createElement('li');
    let src = recipe_list[x].image;
    console.log(src);
    let recipe_title = recipe_list[x].title;
    let id_name = recipe_list[x].id;
    liLast.innerHTML = `<div id="${id_name}" onClick="recipeshow(this)" class="recipe-box"><img src="${src}" class="recipe-pic"><div class="recipe_title">${recipe_title}</div></div>`;
    element.appendChild(liLast);

    //save recipe id in sessionStorage named its div id
    
  }
})
.catch((error) => console.log(error));

function recipeshow(ele) {
  console.log(ele.id);
  sessionStorage.id = ele.id;
  location.href="./_recipedetail.html";
}
// fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=936707", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "d66508729fmshb62d7475c06e5f5p19fd55jsndb6ff2ea2b05"
// 	}
// })
// .then((response) => {
//   if(response.ok) { 
//     return response.text(); 
//   } else {
//     throw new Error();
//   }
// })
// .then((text) => {
//   let recipe_list = JSON.parse(text);
//   for(let i=0; i<recipe_list.length; i++) {
//     console.log(recipe_list.length);
//     console.log(recipe_list[i]);
//   }
//   let src = recipe_list[2].image;
//   document.getElementById('modal').innerHTML = `<img src=\"${src}\">`;
//   // console.log(text);
// })
// .catch((error) => console.log(error));
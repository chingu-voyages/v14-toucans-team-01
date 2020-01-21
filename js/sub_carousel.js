import key from "./define.js";

fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=3&tags=vegetarian%2Cdessert", {
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
  localStorage.setItem("url1", recipe_list.recipes[0].image);
  localStorage.setItem("url2", recipe_list.recipes[1].image);
  localStorage.setItem("url3", recipe_list.recipes[2].image);
  console.log(localStorage.getItem("url3"));
  }
)
.catch((error) => console.log(error));


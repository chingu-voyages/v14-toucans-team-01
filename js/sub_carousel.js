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
  sessionStorage.url1= recipe_list.recipes[0].image;
  sessionStorage.url2= recipe_list.recipes[1].image;
  sessionStorage.url3=recipe_list.recipes[2].image;
  sessionStorage.status = 1;
  }
)
.catch((error) => console.log(error));


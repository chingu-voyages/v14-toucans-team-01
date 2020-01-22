// https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%252Cflour%252Csugar

//↑

function func1() {
  // var input_message = document.getElementById("input_message").value;
  // console.log(input_message);
  sessionStorage.ingredients = document.getElementById("input_message").value;
  console.log(localStorage.ingredients);
  location.href="./_searchresult.html";
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
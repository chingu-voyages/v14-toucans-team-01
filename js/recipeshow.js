let vegetarianCheck = "";
let veganCheck = "";
let glutenFree = "";
let recipe_id = sessionStorage.id;
console.log(recipe_id);
  let URL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=${recipe_id}`;

  fetch(URL, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "d66508729fmshb62d7475c06e5f5p19fd55jsndb6ff2ea2b05"
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
  console.log(recipe_list);
  document.getElementById("recipe-name").innerHTML = `<h1>${recipe_list[0].title}</h1>`;
  console.log(recipe_list[0].image);
  document.getElementById("recipe-image").innerHTML = `<img src="${recipe_list[0].image}" id="recipe-imagepic">`;
  
  if (recipe_list[0].preparationMinutes == undefined || recipe_list[0].preparationMinutes == null) {
    document.getElementById("preparedMinutes").innerHTML = `<h3 id="prep">Prep: <div id="prepMin">N/A</div> MIN </h3>`;
  } else {
    document.getElementById("preparedMinutes").innerHTML = `<h3 id="prep">Prep: <div id="prepMin">${recipe_list[0].preparationMinutes}</div> MIN </h3>`;
  }

  if (recipe_list[0].cookingMinutes == undefined || recipe_list[0].cookingMinutes == null) {
    document.getElementById("cookingMinutes").innerHTML = `<h3 id="total">Total: <div id="totalMin">N/A</div> Min</h3>`;

  } else {
    document.getElementById("cookingMinutes").innerHTML = `<h3 id="total">Total: <div id="totalMin">${recipe_list[0].cookingMinutes}</div> Min</h3>`;
  }

  
  
  
  
  //ingredients 
  const ingre = document.getElementById("recipe-ingredients");
  if (recipe_list[0].extendedIngredients.length > 0) {
    for(let n=0; n<recipe_list[0].extendedIngredients.length; n++) {
      let ingredients = recipe_list[0].extendedIngredients[n].original;
      const li = document.createElement('li');
      console.log(ingredients);
      li.innerHTML = ingredients;
      ingre.appendChild(li);
    }
  }

  //instructions
  const element = document.getElementById("recipe-inst");
  if (recipe_list[0].analyzedInstructions.length >= 1) {
    for(let i=0; i<recipe_list[0].analyzedInstructions[0].steps.length; i++) {
      const liLast = document.createElement('li');
      let ele_name = recipe_list[0].analyzedInstructions[0].steps[i].step;
      // console.log(ele_name);
      liLast.innerHTML = ele_name;
      element.appendChild(liLast);
    }
  } else {
    element.innerHTML = "<h3 class=\"na\">N/A</h3>";
  }
})
.catch((error) => console.log(error));




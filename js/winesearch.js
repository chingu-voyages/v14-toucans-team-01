import key from "./define.js";
let ele = sessionStorage.wineMenu;
// document.getElementById("ingredients").innerHTML = ele;
let name = ele;

document.getElementsByName("searchedResult")[0].innerHTML = `For ${ele}, Best Wine Selections: `;

let URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/" +
"food/wine/pairing?maxPrice=50&food=" + ele;


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
  let pairedWinesList = JSON.parse(text);
  console.log(text);
  console.log(pairedWinesList.pairedWines.length);
  
  const element = document.getElementById("list");
  console.log(element);
  for(let i=0; i<pairedWinesList.pairedWines.length; i++){
    const liLast = document.createElement('li');
    let wine_list = pairedWinesList.pairedWines[i];
    let count = `<div class="bestCount">${i+1}. </div><div class="bestWines">${wine_list}</div>`;
    liLast.innerHTML = count;
    element.appendChild(liLast);
  }
  document.getElementsByName("paringText")[0].innerHTML = pairedWinesList.pairingText;
  
  document.getElementById("machedWineName").innerHTML = pairedWinesList.productMatches[0].title;
  document.getElementById("matchedWineImage").innerHTML = `<img src=\"${pairedWinesList.productMatches[0].imageUrl}\" id=\"machedWineImageURL\">`;
  document.getElementsByName("winePrice")[0].innerHTML = pairedWinesList.productMatches[0].price;
  }
)
.catch((error) => console.log(error));
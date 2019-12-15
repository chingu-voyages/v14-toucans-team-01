// define constants for API url and API authentication key
const BASE_API_URL = 'https://api.spoonacular.com/';
const API_KEY = '046d215a9f344c39ad5e3bf194063388';

async function recipeSearch(requestURL, searchType, requestParams) {

    // create URL object and add the search type to the base URL
    switch (searchType) {
        case 'recipe_name':
            query_url = new URL(requestURL + "recipes/search");
            console.log("recipe search");
            break;
        case 'ingredient_search':
            query_url = new URL(requestURL + "recipes/findByIngredients");
            console.log("ingredient search");
            break;
    }

    console.log(query_url);

    // loop through search parameters and append to URL
    for (let key in requestParams) {
        query_url.searchParams.append(key, requestParams[key]);
    }

    console.log(query_url);

    
    // because fetch returns a promise, we add a keyword to wait until the promise is returned
    let response = await fetch(query_url);
    let result = await response.json(); //convert response into JSON

    return result; // return the result
};
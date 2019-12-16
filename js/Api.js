// define constants for API url and API authentication key
const API_KEY = '046d215a9f344c39ad5e3bf194063388';

async function recipeSearchByName(recipeSearchParams) {

    apiQueryURL = new URL('https://api.spoonacular.com/recipes/search'); // create URL object with recipe search API url
    apiQueryURL.searchParams.append('limitLicense', 'true');    // limit results to those with atrribution
    apiQueryURL.searchParams.append('number', '20');    // limit results to 20 recipes 
    apiQueryURL.searchParams.append('instructionsRequired', 'true');    // limit results to recipes with instructions

    // loop through search parameters and append to URL
    for (let key in recipeSearchParams) {
        apiQueryURL.searchParams.append(key, recipeSearchParams[key]);
    }

    // because fetch returns a promise, we add a keyword to wait until the promise is returned
    let apiResponse = await fetch(apiQueryURL);
    let apiResult = await apiResponse.json(); //convert response into JSON

    return apiResult; // return the result
};
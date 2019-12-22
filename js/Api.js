// define constants for API url and API authentication key
const API_KEY = '046d215a9f344c39ad5e3bf194063388';


async function recipeSearchByName(queryParams) {

    let apiQueryURL = new URL('https://api.spoonacular.com/recipes/search'); // create URL object with recipe search API url
    apiQueryURL.searchParams.append('apiKey', API_KEY); //add API key for auth
    apiQueryURL.searchParams.append('limitLicense', 'true'); // limit results to those with atrribution
    apiQueryURL.searchParams.append('number', '20'); // limit results to 20 recipes 
    apiQueryURL.searchParams.append('instructionsRequired', 'true'); // limit results to recipes with instructions
    apiQueryURL.searchParams.append('query', queryParams.query); // append recipe name search query

    // because fetch returns a promise, we add a keyword to wait until the promise is returned
    let apiResponse = await fetch(apiQueryURL);
    let apiResult = await apiResponse.json(); //convert response into JSON

    return apiResult; // return the result
};

async function getRecipeInformation(queryParams) {
    let apiQueryURL = new URL('https://api.spoonacular.com/recipes/informationBulk'); // URL for recipe information bulk search
    apiQueryURL.searchParams.append('apiKey', API_KEY); //add API key for auth
    apiQueryURL.searchParams.append('limitLicense', 'true'); // limit results to those with atrribution
    apiQueryURL.searchParams.append('ids', queryParams); // append CSV list of recipes 

    console.log(apiQueryURL);
        // because fetch returns a promise, we add a keyword to wait until the promise is returned
        let apiResponse = await fetch(apiQueryURL);
        let apiResult = await apiResponse.json(); //convert response into JSON
        return apiResult; // return the result
}
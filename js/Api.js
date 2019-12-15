// define constants for API url and API authentication key
const BASE_API_URL = 'https://api.spoonacular.com/';
const API_KEY = '046d215a9f344c39ad5e3bf194063388';

async function requestAPI(requestURL, searchType, requestParams, requestMethod = 'GET') {

    // create URL object and add the search type to the base URL
    let query_url = new URL(requestURL + searchType);

    // loop through search parameters and append to URL
    for (let key in requestParams) {
        query_url.searchParams.append(key, requestParams[key]);
    }

    //options to be passed to the fetch request
    const options = {
        requestMethod
    };

    // because fetch returns a promise, we add a keyword to wait until the promise is returned
    let response = await fetch(query_url);
    let result = await response.json(); //convert response into JSON

    return result; // return the result
};
const createSearchForm = () =>{
    const searchContainer = new HtmlElements("div", {"class": "search-container"}, header).newElement();
    const form = new HtmlElements("form", {"action" : "#", "method" : "get"}, searchContainer).newElement();;
    const label = new HtmlElements("label", {"for": "search-input"},form).newElement();
    const inputSearch = new HtmlElements("input",
        {
            "type": "search",
            "id" : "search-input",
            "class" : "search-input",
            "placeholder": "Search..."
        }, form).newElement();
    const btn = new HtmlElements("button",
        {
            "type": "submit",
            "class": "search-submit"
        }, form).newElement();

    const logoSearch = new HtmlElements("i",{"class": "fas fa-search"}, btn).newElement();
};


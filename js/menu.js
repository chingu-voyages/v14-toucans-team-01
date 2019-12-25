
const navbar = document.querySelector(".desktop-menu");
const header = document.querySelector(".header");
const linkName = [
    {
        nameTag: "About Us",
        link:"./_aboutus.html"
    },
    {
        nameTag: "Appetizers",
        link: "./_appetizer.html"
    },
    {
        nameTag: "Entrees",
        link : "./_entrees.html"
    },
    {
        nameTag: "Main courses",
        link: "./_mainCourse.html"
    },
    {
        nameTag: "Desserts",
        link: "./_dessert.html"
    },
    {
        nameTag:"Wines",
        link: "./wine.html"
    }];

const createMenu = (list) =>{
    const logoSiteLink = new HtmlElements("a", {"href" : "index.html"}, navbar).newElement();
    const logoSite = new HtmlElements("h4",{"class": "logo"}, logoSiteLink).newElement();
    const logoImg = new HtmlElements("img", {
        "src": "./images/logo.png",
        "class": "logo-image-lg"
    }, logoSite).newElement();
    for(let i = 0; i<list.length; i++){
        const links = new HtmlElements("li", {"class" : "links"}, navbar)
            .newElement();
        const linksTag = new HtmlElements("a", {
            "href": list[i].link
        }, links, list[i].nameTag).newElement();
    }
};

const createTitle = () =>{
    const titleDiv = new HtmlElements("div", {"class": "title"}, header).newElement();
    const titleLink = new HtmlElements("a", {"href": "index.html"}, titleDiv)
        .newElement();
    const headerSize = new HtmlElements("h1", {"class" : ""}, titleLink, "Toucan's Recipes")
        .newElement();
    createCarousel(titleDiv);
};



const createSearchForm = () =>{
    const searchContainer = new HtmlElements("div", {"class": "search-container"}, header). newElement();
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





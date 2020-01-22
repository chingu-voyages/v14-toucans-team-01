
const navbar = document.querySelector(".desktop-menu");
const header = document.querySelector(".header");
const carouselContainer= document.querySelector("#carousel");
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
        link: "./_wine.html"
    }];

const createMenu = (list) =>{
    const logoDiv = new HtmlElements("div", {"class": "logoDiv"}, navbar).newElement();
    const logoSiteLink = new HtmlElements("a", {"href" : "index.html"}, logoDiv).newElement();
    const logoSite = new HtmlElements("h4",{"class": "logo"}, logoSiteLink).newElement();
    const logoImg = new HtmlElements("img", {
        "src": "./images/logo.png",
        "class": "logo-image-lg"
    }, logoSite).newElement();
    const linksDiv = new HtmlElements("div", {"class": "linksDiv"}, navbar).newElement();
    for(let i = 0; i<list.length; i++){
        const links = new HtmlElements("li", {"class" : "links"},linksDiv)
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







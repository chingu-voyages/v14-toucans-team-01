
const navbar = document.querySelector(".desktop-menu");
const linkName = [
    {
        nameTag: "About Us",
        link:"./_contact.html"
    },
    {
        nameTag: "Appetizers",
        link: "./appetizer.html"
    },
    {
        nameTag: "Entrees",
        link : "./_entree.html"
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
    for(let i = 0; i<list.length; i++){
        const links = new HtmlElements("li", {"class" : "links"}, navbar)
            .newElement();
        const linksTag = new HtmlElements("a", {
            "href": list[i].link
        }, links, list[i].nameTag).newElement();
    }
};

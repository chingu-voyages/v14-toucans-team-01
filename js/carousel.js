const createCarousel = (container) =>{
    const carouselSection = new HtmlElements("section", {"id": "slideshow"}, container).newElement();
    const carouselDiv = new HtmlElements("div", {"class": "slick"}, carouselSection).newElement()   
    const img1= new HtmlElements("div", {"class": ""}, carouselDiv).newElement();
    const picture1 = new HtmlElements("img", {"src": "./images/Appetizer.jpg"}, img1).newElement();
    const img2= new HtmlElements("div", {"class": ""}, carouselDiv).newElement();
    const picture2 = new HtmlElements("img", {"src": "./images/Entree.jpg"}, img2).newElement();
    const img3= new HtmlElements("div", {"class": ""}, carouselDiv).newElement();
    const picture3= new HtmlElements("img", {"src": "./images/Dessert.jpg"}, img3).newElement();
    carousel();
};

const carousel = () =>{
    $(document).ready(() =>{
        $("#slideshow .slick").slick();
    });
};
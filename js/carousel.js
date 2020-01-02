
const createCarousel = (container) =>{
    const carouselSection = new HtmlElements("div", {"class": "container grid lg mt-2 mb-2", "id": "carousel"}, container).newElement();
    const carouselDiv = new HtmlElements("div", {"class": "splide", "id": "splide"}, carouselSection).newElement()
    const track = new HtmlElements("div", {"class": "splide__track"}, carouselDiv).newElement();
    const ulElement = new HtmlElements("ul", {"class": "splide__list"}, track).newElement();
    const liOneEl = new HtmlElements("li", {"class": "splide__slide", "width": "100%"}, ulElement).newElement();
    const liTwoEl = new HtmlElements("li", {"class": "splide__slide", "width": "100%"}, ulElement).newElement();
    const liThreeEl = new HtmlElements("li", {"class": "splide__slide", "width": "100%"}, ulElement).newElement();
    const picture1 = new HtmlElements("img", {"src": "./images/Appetizer.jpg", "width": "100%", "height": "100%"}, liOneEl).newElement();
    const picture2 = new HtmlElements("img", {"src": "./images/Entree.jpg", "width": "100%", "height": "100%"}, liTwoEl).newElement();
    const picture3= new HtmlElements("img", {"src": "./images/Dessert.jpg", "width": "100%", "height": "100%"},liThreeEl).newElement();
    carousel();
};

const carousel = () =>{
    new Splide("#splide", {
        type: "loop",
        perPage: 1,
        autoPlay: true,
        lazyLoad: 'nearby'
    }).mount();
}



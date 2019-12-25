const createCarousel = (container) =>{
    const carouselDiv = new HtmlElements("div", {"class": "carousel"}, container).newElement();
    const innerCarousel = new HtmlElements("div", {"class": "innerCarousel"}, carouselDiv).newElement();
    const img1 = new HtmlElements("img",
        {
            "class": "active",
            "src": "./images/Appetizer.jpg",
            "width": "100%"
        }, innerCarousel).newElement();
    const img2 = new HtmlElements("img",
        {
            "src": "./images/Entree.jpg",
            "width": "100%"
        }, innerCarousel).newElement();
    const img3 = new HtmlElements("img",
        {
            "src": "./images/Steak.jpg",
            "width": "100%"
        }, innerCarousel).newElement();
    const arrowRight = new HtmlElements("button", {"class" : "next"}, carouselDiv).newElement();
    const arrowLeft = new HtmlElements("button", {"class" : "prev"}, carouselDiv).newElement();
    const imgArrowRight = new HtmlElements("i", {"class" : "fas fa-arrow-right"}, arrowRight).newElement();
    const imgArrowLeft = new HtmlElements("i", {"class" : "fas fa-arrow-left"}, arrowLeft).newElement();
    carousel();
};

const carousel = () =>{
    $(document).ready(function(){
        $(".next").on('click', function(){
            let currentImg = $(".active");
            let nextImg = currentImg.next();
            if(nextImg.length){
                currentImg.removeClass('active').css('z-index', -10);
                nextImg.addClass("active").css('z-index', 10);
            }
        });
        $(".prev").on("click", function () {
            let currentImg = $(".active");
            let nextImg = currentImg.next();
            if(nextImg.length){
                currentImg.removeClass('active').css('z-index', -10);
                nextImg.addClass("active").css('z-index', 10);
            }
        });
    });
};
const carousel = (container) =>{
  const carouselContainer = new HtmlElements("div", {"id": "carousel-container"}, container).newElement();
  const carouselFigure = new HtmlElements("figure", {"class": "figure"}, carouselContainer).newElement();
  const image1 = new HtmlElements("img", {"src": "./images/Appetizer.jpg", "alt": "appetizer", "class": "initial"}, carouselFigure).newElement();
  const image2 = new HtmlElements("img", {"src": "./images/Entree.jpg", "alt": "entree"}, carouselFigure).newElement();
  const image3 = new HtmlElements("img", {"src": "./images/Dessert.jpg", "alt": "Dessert"}, carouselFigure).newElement();
};
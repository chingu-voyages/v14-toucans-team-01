class HtmlElements{
    constructor(element, props, container, text="") {
        this.element = element;
        this.props = props;
        this.container = container;
        this.text = text;
    }

    createElements(){
        const el = document.createElement(this.element);
        for(let val in this.props){
            el.setAttribute(val, this.props[val])
        }
        el.textContent = this.text;
        this.container.appendChild(el);
        return el;
    }

    newElement(){
        return this.createElements();
    }

    linksSource
}
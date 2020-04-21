class TitleBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h1 class="content">Fresh Meal</h1>`;
    }
}

customElements.define("title-bar", TitleBar);
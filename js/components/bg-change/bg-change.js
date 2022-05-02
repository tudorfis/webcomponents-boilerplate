import WebComponent from "../../modules/webcomponent.js"

export default class extends WebComponent {
    constructor() {
        super({ templateLocation: '/js/components/bg-change/bg-change.html' })
    }
    afterRender() {
        const wrapper = this.querySelector( '.bg-change' )

        wrapper.innerHTML = ['a','b','c','d','e','f','g','h','i','j'].map( char => `
            <button>${ char }</button>
        `).join('') + wrapper.innerHTML
    }
}

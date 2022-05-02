
export default class WebComponent extends HTMLElement {
    constructor({ templateLocation }) {
        super()
        this.import( templateLocation )
    }
    async import( templateLocation ) {
        const template = document.createElement( 'template' )
        template.innerHTML = await (await fetch( templateLocation )).text() 

        this.appendChild( template.content.cloneNode( true ) )
        this.afterRender()
    }
}
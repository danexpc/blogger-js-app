import { Component } from '../core/component'

export class NavigationComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$element.addEventListener('click', tabClickHandler.bind(this))
    }
}

function tabClickHandler(event) {
    event.preventDefault()
    if (event.target.classList.contains('tab')){
        Array.from(this.$element.querySelectorAll('.tab')).forEach(tab => {
            tab.classList.remove('active')
        })
        event.target.classList.add('active')
    }
}
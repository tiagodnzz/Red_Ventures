import React, { Component } from 'react'
import './card.css'
export default class card extends Component {

    trocaClasse(e, antiga, nova) {
        e.classList.remove(antiga);
        e.classList.add(nova);
    }
    
    mudaCor(obj){
        var card = document.getElementById(obj)
        card.addEventListener("click", () => {
            if (this.verificaUrl('question1')) {
                this.setLocalStorage('high', obj)
                document.getElementById(obj).classList.toggle("card__salmon_ativo");
            }
            if(this.verificaUrl('question2')){
                this.setLocalStorage('water', obj)
                document.getElementById(obj).classList.toggle("card__green_ativo");
            }
            if(this.verificaUrl('question3')){
                this.setLocalStorage('pets', obj)
                document.getElementById(obj).classList.toggle("card__salmon_ativo");
            }
        })
    }

    setLocalStorage = (a, b) =>  {
        localStorage.setItem(a, b)
    }

    verificaUrl(url){
        return ((window.location.href).indexOf(url) > -1)
    }
    render() {
        return (

            <div className={`card mb-4 ${this.props.class}`} id={this.props.id} onClick={() => this.mudaCor(this.props.id)}>
                <div className={`card-body card__body  ${this.props.image}`}>
                    <h4 className="card__title">{this.props.title}</h4>
                </div>
            </div>

        )
    }
}
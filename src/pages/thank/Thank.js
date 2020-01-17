import React, { Component } from 'react'
import Aside from '../../components/aside/aside'
import Logo from '../../assets/img/logo/logo-greenthumb.svg'
import illustration from '../../assets/img/illustrations/envelop.png'
import './Thank.css'
import { getPlant } from '../../service/get'
import request from '../../service/request'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            Plant: [],
            name: '',
            price: null,
            img: '',
            sun: '',
            water: '',
            toxicity: '',
        };
    }

    componentDidMount = async () => {
        const get = await getPlant()
        this.setState({ Plant: get.data })
        document.body.style.background = "#fff"
    }


    render() {
        return (
            <section className="all row">
                <Aside />
                <img className="logo_responsive logo" src={Logo} alt="Logo da empresa" />
                <main className="container mt-5">
                    <section className="row d-flex justify-content-between ml-3">
                    <div className="d-flex flex-column align-items-center col-md-4">
                            <div className="container d-flex flex-column align-items-center col-md-10 ">
                                <div className="col-md-10 d-flex flex-column">


                                    <div className="row d-flex flex-column">
                                        <h1 className="name_plant"><span>{this.state.Plant.name}</span></h1>
                                    </div>

                                    <div className="row d-flex flex-column">
                                        <p className="preco">${this.state.Plant.price}</p>
                                    </div>
                                    <div className="row d-flex flex-column my-4">
                                        <img src={this.state.Plant.url} alt="imagem de planta" />
                                    </div>
                                    <div className="icone row d-flex">
                                        {/* <img src={require("../../assets/icons/grey/{this.state.Plant.sun}.svg")} alt="icones" /> */}
                                        <p> Sun: {this.state.Plant.sun}</p>
                                    </div>
                                    <div className="icone row d-flex">
                                        {/* <img src={require("../../assets/icons/grey/{this.state.Plant.water}.svg")} alt="icones" /> */}
                                        <p> Water: {this.state.Plant.water}</p>
                                    </div>
                                    <div className="icone row d-flex ">
                                        {/* <img src={require("../../assets/icons/grey/{this.state.Plant.toxicity}.svg")} alt="icones" /> */}
                                        <p>{this.state.Plant.toxicity ? "Beware! Toxic for pets" : "Non-toxic for pets"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-1"></div>

                        <div className="d-flex flex-column align-items-center col-md-5">
                            <div className="card_form d-flex flex-column align-items-center col-md-10 ">
                                <h2 className="name_plant mt-5"><span>Thank you!</span></h2>

                                <div className="thank col-md-10 d-flex flex-column align-items-center mt-3 mb-5">
                                    <p>You will hear from us soon. Please check your e-mail!</p>
                                    <img className="img-fluid rounded mx-auto d-block" src={illustration} alt="Imagem de um sol usando oculos escuro" />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </section>
        )
    }
}

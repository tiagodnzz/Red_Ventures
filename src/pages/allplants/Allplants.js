import React, { Component } from 'react'
import illustration from '../../assets/img/illustrations/pick.png'
import ButtonGreenDark from '../../components/buttonGreenDark/buttonGreenDark'
import Aside from '../../components/aside/aside'
import Logo from '../../assets/img/logo/logo-greenthumb.svg'
import './Allplants.css'
import { getPlants } from '../../service/get'
import {Link} from 'react-router-dom'

export default class Allplants extends Component {

    constructor() {
        super();
        this.state = { Plants: [] };
    }

    componentDidMount = async () => {
        const get = await getPlants()
        this.setState({ Plants: get.data })
    }

    set(){
        setTimeout(() => {
        }, 3000);
    }
    render() {
        return (
            <section className="row">
                <Aside />
                <img className="logo_responsive logo" src={Logo} alt="Logo da empresa" />
                <main className="container col-md-8">
                    <div className="col-md-12 d-flex flex-column">
                        <img className="img-fluid mt-5 mb-4 rounded mx-auto d-block" src={illustration} alt="Imagem de uma mão segurando um galho com folhas" />
                        <h1 className="allplants mb-5"><span>Our picks for you</span></h1>
                        <div className="deck_card row d-flex justify-content-around flex-wrap mt-4 mb-3">{/* Card deck */}
                            {
                                this.state.Plants.map((res) => {
                                    return (

                                        <div className="card_plant flex-column align-items-center d-flex my-2">{/* Card plant */}

                                            <img className="img_card_plant card-img-top" src={res.url} alt="imagem"/>

                                            <div class="card-body">

                                                <div className="row">
                                                    <h4 class="title_plant card-title">{res.name}</h4>
                                                </div>

                                                <div className="row">
                                                    <p className="price">${res.price}</p>
                                                    <div className="icons">
                                                        {/* <img className="icon" src={require("../../assets/icons/grey/{res.sun}.svg")} />
                                                        <img className="icon" src={require("../../assets/icons/grey/{res.water}.svg")} />
                                                        <img className="icon" src={require("../../assets/icons/grey/{res.toxicity}.svg")} /> */}
                                                    </div>
                                                </div>

                                                <Link to="/Plant" onClick={() => this.set()}><ButtonGreenDark name="buy now" id={res.id} /></Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </main>
                <div className="col-md-12"></div>
            </section>

        )
    }
}


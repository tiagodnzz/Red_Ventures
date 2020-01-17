import React, { Component } from 'react'
import illustration from '../../assets/img/illustrations/dog.png'
import ButtonGreenLightRight from '../../components/buttonGreenLight/buttonGreenLightRight'
import ButtonGreenLightLeft from '../../components/buttonGreenLight/buttonGreenLightLeft'
import Aside from '../../components/aside/aside'
import Logo from '../../assets/img/logo/logo-greenthumb.svg'
import Card from '../../components/card/card'
import './Question3.css'
import {Link} from 'react-router-dom'
export default class Question3 extends Component {
    set(){
        setTimeout(() => {}, 2000);
    }
    render() {
        return (
            <section className="row">
                <Aside />
                <main className="container col-md-8">
                    <img className="logo_responsive logo" src={Logo} alt="Logo da empresa"/>
                    <div className="col-md-9 mx-auto">
                        <img className="img-fluid mt-5 mb-4 rounded mx-auto d-block" src={illustration} alt="Imagem de um sol usando oculos escuro" />
                        <div className="col-md-12 mx-auto">
                            <h1 className="text-center mb-3 text__queston1">Do you have pets? Do they <span>chew</span> plants? </h1>
                            <p className="text-center">We are asking because some plants can be <span>toxic</span> for your buddy. </p>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <Card
                                    class="card__pet"
                                    title="Yes"
                                    image="card__pet1"
                                    id="false"
                                    description="Not so soon, baboon!"
                                />
                            </div>
                            <div className="col-md-4">
                                <Card
                                    class="card__pet"
                                    title="No/They don't care"
                                    image="card__pet2"
                                    id="true"
                                    description="Not so soon, baboon!"
                                />
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="button_div3">
                            <Link to="/question2"><ButtonGreenLightLeft name="Previous"/></Link>
                            <Link to="/allplants" onClick={() => this.setState()}><ButtonGreenLightRight name="Finish"/></Link>
                        </div>
                    </div>
                </main>
                <section className="col-md-12"></section>
            </section>

        )
    }
}

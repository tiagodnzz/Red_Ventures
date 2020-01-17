import React, { Component } from 'react'
import illustration from '../../assets/img/illustrations/wateringcan.png'
import ButtonGreenLightRight from '../../components/buttonGreenLight/buttonGreenLightRight'
import ButtonGreenLightLeft from '../../components/buttonGreenLight/buttonGreenLightLeft'
import Aside from '../../components/aside/aside'
import Logo from '../../assets/img/logo/logo-greenthumb.svg'
import Card from '../../components/card/card'
import './Question2.css'
import {Link} from 'react-router-dom'
export default class Question2 extends Component {
    render() {
        return (
            <section className="row">
                <Aside />
                <main className="container col-md-8">
                    <img className="logo_responsive logo" src={Logo} alt="Logo da empresa"/>
                    <div className="col-md-9 mx-auto">
                        <img className="img-fluid mt-5 mb-4 rounded mx-auto d-block" src={illustration} alt="Imagem de um sol usando oculos escuro" />
                        <div className="col-md-9 mx-auto">
                            <h1 className="text-center mb-5 text__queston1">How often do you want to <span>water</span> your plant?</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Card
                                    class="card__green"
                                    title="Rarely"
                                    image="card__green1"
                                    id="rarely"
                                    description="Rarely"
                                />
                            </div>
                            <div className="col-md-4">
                                <Card
                                    class="card__green"
                                    title="Regularly"
                                    image="card__green2"
                                    id="regularly"
                                    description="Regularly"
                                />
                            </div>
                            <div className="col-md-4">
                                <Card
                                    class="card__green"
                                    title="Daily"
                                    image="card__green3"
                                    id="daily"
                                    description="Daily"
                                />
                            </div>
                        </div>
                        <div className="button_div">
                            <Link to="/question1"><ButtonGreenLightLeft name="Previous"/></Link>
                            <Link to="/question3"><ButtonGreenLightRight name="Next"/></Link>
                        </div>
                    </div>
                </main>
                <section className="col-md-12"></section>
            </section>

        )
    }
}

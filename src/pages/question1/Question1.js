import React, { Component } from 'react'
import illustration from '../../assets/img/illustrations/sun.png'
import ButtonGreenLightRight from '../../components/buttonGreenLight/buttonGreenLightRight'
import ButtonGreenLightLeft from '../../components/buttonGreenLight/buttonGreenLightLeft'
import Aside from '../../components/aside/aside'
import Logo from '../../assets/img/logo/logo-greenthumb.svg'
import Card from '../../components/card/card'
import './Question1.css'
import {Link} from 'react-router-dom'

export default class Question1 extends Component {
    render() {
        return (
            <section className="row">
                <Aside />
                <main className="container col-md-8">
                <img className="logo_responsive logo" src={Logo} alt="Logo da empresa"/>
                    <div className="col-md-9 mx-auto">
                        <img className="img-fluid mt-5 mb-4 rounded mx-auto d-block" src={illustration} alt="Imagem de um sol usando oculos escuro" />
                        
                        <div className="col-md-9 mx-auto">
                            <h1 className="text-center mb-5 text__queston1">First, set the amount of <span>sunlight</span> your plant will get.</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Card
                                    class="card__salmon"
                                    title="High sunlight"
                                    image="card__salmon1"
                                    id="high"
                                    description="High sunlight"
                                />
                            </div>
                            <div className="col-md-4">
                                <Card
                                    class="card__salmon"
                                    title="Low sunlight"
                                    image="card__salmon2"
                                    id="low"
                                    description="Low sunlight"
                                />
                            </div>
                            <div className="col-md-4">
                                <Card
                                    class="card__salmon"
                                    title="No sunlight"
                                    image="card__salmon3"
                                    id="no"
                                    description="No sunlight"
                                />
                            </div>
                        </div>
                        <div className="button_div">
                            <Link to="/"><ButtonGreenLightLeft  name="Home"/></Link>
                            <Link to="/question2"><ButtonGreenLightRight  name="Next"/></Link>
                        </div>
                    </div>
                </main>
                <section className="col-md-12"></section>
            </section>

        )
    }
}

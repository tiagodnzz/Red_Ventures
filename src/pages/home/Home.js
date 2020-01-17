import React, { Component } from 'react'
import Logo from '../../assets/img/logo/logo-greenthumb.svg'
import illustration from '../../assets/img/illustrations/illustration-home.png'
import illustrationMobile from '../../assets/img/illustrations/illustration-home-mobile.png'
import './Home.css'
import ButtonGreenDarkRight from '../../components/buttonGreenDark/buttonGreenDarkRight'
import {Link} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <main className="container">
                <section className="row">
                    <div className="col-md-4">
                        <img className="img-fluid mt-5 logo" src={Logo} alt="Logo da empresa" />
                        <h1 className="my-5 main__text">Find your next green friend</h1>
                        <div className="mt-3 buttonGreenDark">
                            <Link to="/question1"><ButtonGreenDarkRight name="start quizz" /></Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <img className="img-fluid mt-1 banner__descktop" src={illustration} alt="Banner com alguns vazos" />
                        <img className="img-fluid mt-1 banner__mobile" src={illustrationMobile} alt="Banner com alguns vazos" />

                    </div>
                </section>
            </main>
        )
    }
}

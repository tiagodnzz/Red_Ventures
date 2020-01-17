import React, { Component } from 'react'
import Aside from '../../components/aside/aside'
import Logo from '../../assets/img/logo/logo-greenthumb.svg'
import './Plant.css'
import { getPlant } from '../../service/get'
import request from '../../service/request'

export default class Plant extends Component {
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
            email: '',
            nameError: '',
            emailError: '',
            postPlant: {
                name: "",
                email: "",
            },
        };
    }

    register = async e => {
        e.preventDefault();
        const { name, email } = this.state;

        await request.post('/',{ name, email, id: localStorage.getItem('idPlant')})
        this.props.history.push('/Thank');
        setTimeout(() => {
            localStorage.clear()
            this.props.history.push('/');
        }, 3000);
    };

    componentDidMount = async () => {
        const get = await getPlant()
        this.setState({ Plant: get.data })
        document.body.style.background = "#fff"
    }

    handleNameChange = event => {
        this.setState({ name: event.target.value }, () => {
            this.validateName();
        });
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value }, () => {
            this.validateEmail();
            
        });
    };

    validateName = () => {
        const { name } = this.state;
        this.setState({
            nameError:
                name.length > 3 ? null : 'Please provide a valid Name.'
        });
    }

    validateEmail = () => {
        const { email } = this.state;
        this.setState({
            emailError:
                email.length > 3 ? null : 'Please provide a valid e-mail.'
        });
    }

    render() {
        return (
            <section className="all row">
                <Aside />
                <img className="logo_responsive logo" src={Logo} alt="Logo da empresa" />
                <main className="container mt-5">
                    <section className="row my-3 d-flex justify-content-between ml-3" >
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
                                <div className="div_form col-md-10 d-flex flex-column ">

                                    <div className="div_form row d-flex flex-column">
                                        <h2 className="name_plant mt-5"><span>Nice pick! </span></h2>
                                        <p>Tell us your name and e-mail and we will get in touch regarding your order ;)</p>
                                    </div>

                                    <form onSubmit={this.register}>

                                        <div className="div_form row d-flex flex-column my-4">
                                            <label for="name"><span>Name</span></label>

                                            <input
                                                name='name'
                                                className={`input_form ${this.state.nameError ? 'is-invalid' : ''}`}
                                                id='name'
                                                placeholder='Crazy Plant Person'
                                                value={this.state.name}
                                                onChange={this.handleNameChange}
                                                onBlur={this.validateName}
                                            />
                                            <div className='invalid-feedback'>{this.state.nameError}</div>

                                            {/* <input required id="name" type="name" className="input_form" placeholder="Crazy Plant Person" onChange={e => this.setState({ name: e.target.value })} /> */}
                                        </div>
                                        <div className="div_formas row d-flex flex-column my-4">
                                            <label for="email"><span>E-mail</span></label>

                                            <input
                                                type="email"
                                                name='email'
                                                className={`input_form ${this.state.emailError ? 'is-invalid' : ''}`}
                                                id='email'
                                                placeholder='plantperson@email.com'
                                                value={this.state.email}
                                                onChange={this.handleEmailChange}
                                                onBlur={this.validateEmail}
                                            />
                                            <div className='invalid-feedback'>{this.state.emailError}</div>

                                            {/* <input type="email" className="input_form" placeholder="plantperson@email.com" id="email" onChange={e => this.setState({ email: e.target.value })} /> */}
                                        </div>
                                    
                                        <div className="div_form row d-flex align-items-end flex-column mb-5">
                                            <button className="button_submit">Send</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </section>

        )
    }
}

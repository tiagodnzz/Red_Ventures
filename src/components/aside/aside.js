import React, { Component } from 'react'
import Logo from '../../assets/img/logo/logo-greenthumb.svg'
import './aside.css'

export default class aside extends Component {
    render() {
        return (
            <aside className="col-md-2 fixed">
                <div className="img_aside mb-5">
                    <img className="logo_aside" src={Logo} alt="Logo da empresa" />
                </div>
                <div className="line_aside mt-5">
                    <hr></hr>
                </div>
            </aside>
        )
    }
}

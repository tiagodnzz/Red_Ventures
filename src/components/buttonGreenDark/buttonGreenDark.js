import React, { Component } from 'react'
import './buttonGreenDarkbg.css'

export default class buttonGreenDark extends Component {
    pegaId(obj) {
        localStorage.setItem('idPlant', obj)
    }
    render() {
        return (
            <button type="button" onClick={() => this.pegaId(this.props.id)} className="ButtonGreenDarkbg">{this.props.name}</button>
        )
    }
}

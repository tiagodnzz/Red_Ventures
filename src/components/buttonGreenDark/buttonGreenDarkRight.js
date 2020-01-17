import React, { Component } from 'react'
import './buttonGreenDark.css'

export default class buttonGreenDarkLeft extends Component {
    render() {
        return (
            <button type="button" className="ButtonGreenDark"><i class="fas fa-arrow-right"></i>   {this.props.name}</button>
        )
    }
}

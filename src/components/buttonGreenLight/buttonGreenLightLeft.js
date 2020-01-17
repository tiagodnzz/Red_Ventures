import React, { Component } from 'react'
import './buttonGreenLight.css'
export default class buttonGreenLightLeft extends Component {
    render() {
        return (
            <button type="button" className="buttonGreenLight"><i class="fas fa-arrow-left"></i>   {this.props.name}</button>
        )
    }
}

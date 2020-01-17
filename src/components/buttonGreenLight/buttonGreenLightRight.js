import React, { Component } from 'react'
import './buttonGreenLightRight.css'
export default class buttonGreenLightRight extends Component {
    render() {
        return (
            <button type="button" className="buttonGreenLightR"><i class="fas fa-arrow-right"></i>   {this.props.name}</button>
        )
    }
}

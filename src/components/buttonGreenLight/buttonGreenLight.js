import React, { Component } from 'react'
import './buttonGreenLight.css'
export default class buttonGreenLight extends Component {
    render() {
        return (
            <button type="button" className="buttonGreenLight"><i class="fas fa-arrow-right"></i>   {this.props.name}</button>
        )
    }
}

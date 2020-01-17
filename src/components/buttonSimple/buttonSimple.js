import React, { Component } from 'react'
import './buttonSimple.css'
export default class buttonSimple extends Component {
    render() {
        return (
            <button type="button" className="buttonSimple">{this.props.name}</button>
        )
    }
}

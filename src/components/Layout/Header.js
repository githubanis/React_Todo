import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {

    headerStyles = () => { return { background: '#333', color: '#fff', textAlign: 'center', padding: '10px' } }
    linkStyles = () => { return { color: '#fff' } }

    render() {
        return (
            <header style={this.headerStyles()}>
                <h1>Todo Header</h1>
                <Link style={this.linkStyles()} to="/">Home</Link> | <Link style={this.linkStyles()} to="/about">About</Link>
            </header>
        )
    }
}

export default Header
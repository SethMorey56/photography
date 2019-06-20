import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="ui secondary pointing menu">
                    <div className="right menu">
                        <Link to="/" className="ui item">Home</Link>
                        <Link to="About" className="ui item">About</Link>
                        <Link to="Gallery" className="ui item">Gallery</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;
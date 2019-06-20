import React from 'react';
import NavBar from '../NavBar';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <div className="homepage-first-div">
                    <div id="navbar-container">
                    <NavBar/>
                    </div>
                    <div className="ui center aligned icon header">
                        <h1 id="heading">PHOTOGRAPHY</h1>
                    </div>
                </div>
                
                <div className="homepage-second-div">
                    <div className="ui container">
                    <div className="ui basic center segment" id="homepage-center">
                        <h2>Need Some Photos Taken?</h2>
                        <p>This is text</p>
                        <p>Congratulations!! As a wedding photographer I have been entrusted with literally hundreds of wedding days since 2006. I’ve learned some things. And I like to share! Sign up with your email address to receive occasional, non-spammy wedding planning tips, discounts, and freebies.</p>
                    </div>

                        <div class="ui form">
                        <div class="fields">
                            <div class="five wide field">
                                <label>First Name</label>
                                <input type="text" placeholder="First Name"/>
                            </div>
                            <div class="five wide field">
                                <label>Last Name</label>
                                <input type="text"/>
                            </div>
                            <div class="five wide field">
                                <label>Email</label>
                                <input type="text"/>
                            </div>
                                <div class="one wide field" id="homepage-button">
                                <button class="ui secondary button">Submit</button>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;
import React from 'react';
import NavBar from '../NavBar';

class About extends React.Component {
    render () {
        return (
            <div className="about">

                <div className="ui equal width center aligned grid" id="grid">
                    <div className="column" id="grid-left">
                        <div class="ui basic center segment">
                            <h2>Get to Know Me</h2>
                        </div>
                    </div>
                    <div className="column" id="grid-right">
                        <NavBar/>
                        <div class="ui basic center segment">
                            <p className="about-right-content">This is content that should be centered. This is will go a long ways to finding the correct style. This should run onto the next line.</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;
import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";


class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="data:image/png;base64,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"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>

                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
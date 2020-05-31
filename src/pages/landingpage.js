import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import userIcons from '../images/user_icon.jpg';


class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={userIcons}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Front-end Developer</h1>

                            <hr/>

                            <p>HTML | CSS(SASS) | JavaScript/Jquery | React | PHP | MySQL | GIT | Photoshop</p>

                            <div className="social-links">

                                <a href="https://github.com/vspv" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square list_item_a" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>

                                <a href="https://t.me/vsvpvl" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-telegram list_item_a" rel="noopener noreferrer" aria-hidden="true"/>
                                </a>

                                <a href="https://www.linkedin.com/in/vsevolod-pavlenko-68b4a2175/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square list_item_a" rel="noopener noreferrer" aria-hidden="true"/>
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
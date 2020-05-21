import React, {Component} from 'react';
import {Cell, Grid, List, ListItem, ListItemContent} from "react-mdl";
import userIcons from './images/user_icon.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Vsevolod Pavlenko</h2>
                        <img
                            src={userIcons}
                            alt="avatar"
                            style={{height: '330px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em', marginTop: '15px'}}>I’m looking for an opportunity to join the team of JavaScript/React developers that are the same mad of creating the best user experience as me. I want to grow and evolve in this direction to become an experienced and mature Front-end developer.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <a className="list_item_a" href="tel:+380997876739" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-phone-square" aria-hidden="true"/>
                                            +38 (099) 787-67-39
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <a className="list_item_a" href="https://t.me/vsvpvl" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-telegram" aria-hidden="true"/>
                                            @vsvpvl
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <a className="list_item_a" href="mailto:seva--seva@ukr.net" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-envelope" aria-hidden="true"/>
                                            seva--seva@ukr.net
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <a className="list_item_a" href="https://join.skype.com/invite/ncKStgeixxdg" rel="noopener noreferrer" target="_blank">
                                            <i className="fa fa-skype" aria-hidden="true"/>
                                            Vsevolod Pavlenko
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
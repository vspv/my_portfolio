import React, {Component} from 'react';
import {List, ListItem} from "react-mdl";

class About extends Component{
    render() {
        return (
            <div>
                <div>
                    <h1 style={{marginLeft: 10}}>Personal skills</h1>
                    <List style={{listStyleType: "upper-roman"}}>
                        <ListItem>Skills: HTML5, CSS3, JavaScript, React, PHP;</ListItem>
                        <ListItem>Tools: GitHub, WebStorm, Adobe Photoshop, BEM, Bootstrap 4, Sass, Gulp, WebPack, NPM, jQuery, mySQL;</ListItem>
                        <ListItem>CMS: WordPress, Modx;</ListItem>
                        <ListItem>In progress: Node.js, UX / UI;</ListItem>
                        <ListItem>Soft skills: good communication, teamwork, willingness to learn, perseverance, attentiveness to details</ListItem>
                        <ListItem>HTML5 (2 years experience)<p> Above average, currently using.</p></ListItem>
                        <ListItem>CSS3 (2 years experience)<p> Above average, currently using.</p></ListItem>
                        <ListItem>JavaScript (1,5 year experience)<p> Above average, currently using.</p></ListItem>
                        <ListItem> React (0,5 year experience)<p> Medium, currently using.</p></ListItem>
                    </List>


                </div>
            </div>
        )
    }
}

export default About;
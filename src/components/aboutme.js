import React, {Component} from 'react';
import {List, ListItem, ListItemContent} from "react-mdl";

class About extends Component{
    render() {
        return (
            <div>
                <div>
                    <h1 style={{marginLeft: 10}}>Personal skills</h1>
                    <List style={{listStyleType: "upper-roman"}}>
                        <ListItem>Front-End: HTML, CSS (SASS/SCSS), Bootstrap, JavaScript, jQuery</ListItem>
                        <ListItem>Back-End: PHP (frameworks Laravel 5, Yii2 ), Mysql</ListItem>
                        <ListItem>CMS: WordPress, MODX.</ListItem>
                        <ListItem>GIT, GITHUB</ListItem>
                        <ListItem>Adobe Photoshop</ListItem>
                    </List>

                </div>
            </div>
        )
    }
}

export default About;
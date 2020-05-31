import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell style={{margin: "auto", textAlign: "center"}} col={4}>
                    <p>{this.props.startYear}-{this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                    <ul>
                        <li>{this.props.jobDescriptionAbout1}</li>
                        <li>{this.props.jobDescriptionAbout2}</li>
                        <li>{this.props.jobDescriptionAbout3}</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;
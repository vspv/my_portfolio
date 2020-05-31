import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";

class Education extends Component {
    render() {
        return (
            <Grid>
                <Cell col={2} style={{margin: "auto",textAlign: "center"}}>
                    <p>{this.props.startYear}-{this.props.endYear}</p>
                </Cell>
                <Cell col={5} style={{margin: "auto", textAlign:"center"}}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescriptionDiplom}</p>
                    <p>{this.props.schoolDescription}</p>
                </Cell>
                <Cell col={5} style={{margin: "auto"}}>
                    <img
                        src={this.props.universityDiplom}
                        alt="avatar"
                        style={{height: 'auto', width: '100%'}}
                    />
                </Cell>
            </Grid>
        )
    }
}

export default Education;
import React, {Component} from 'react';
import {Cell, Grid} from "react-mdl";
import Education from './education';
import Experience from './experiance';
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://junglejobs.ru/assets/img/male-avatar.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />

                            <h2 style={{paddingTop: '2em'}}>Vsevolod Pavlenko</h2>
                            <h4 style={{color: 'grey'}}>Front-end developer</h4>
                            <hr className='hr_line' />
                            <h5>Address</h5>
                            <p>Kiev, Kaxi Bendukidze 2</p>
                            <h5>Phone</h5>
                            <p>+38 (099) 787-67-39</p>
                            <h5>Email</h5>
                            <p>seva--seva@ukr.net</p>
                            <h5>Web</h5>
                            <p>my web.com</p>
                            <hr className='hr_line' />
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2015}
                            endYear={2018}
                            schoolName="State University of Telecommunications"
                            schoolDescriptionDiplom="(Bachelor's diploma)"
                            schoolDescription="Department of Computer Engineering trains computer engineers to design, build and configure computer systems"
                        />


                        <Education
                            startYear={2018}
                            endYear={2020}
                            schoolName="State University of Telecommunications"
                            schoolDescriptionDiplom="(Master's degree)"
                            schoolDescription="Department of Computer Engineering trains computer engineers to design, build and configure computer systems"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Expirience</h2>

                        <Experience
                            startYear={2018}
                            endYear={2020}
                            jobName="HoldGroup24 - holding company"
                            jobDescription="Development of web sites, landing pages, online stores"
                            jobDescriptionAbout1="Stretch the finished layout for different CMS;"
                            jobDescriptionAbout3="Maintenance and support of existing projects;"
                            jobDescriptionAbout2="Development of custom solutions;"
                        />

                        <Experience
                            startYear={2019}
                            endYear={2019}
                            jobName="Freelance (Rabinovich TV)"
                            jobDescription="Development, refinement and support of the news portal"
                            jobDescriptionAbout1="Creation of new functionality and integration with the administration panel;"
                            jobDescriptionAbout2="Stretch the finished layout on php framework Laravel;"
                            jobDescriptionAbout3="Redesign, website performance acceleration, add plugins;"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill="HTML/CSS"
                            progress={75}
                        />

                        <Skills
                            skill="javascript"
                            progress={40}
                        />

                        <Skills
                            skill="React"
                            progress={33}
                        />

                        <Skills
                            skill="React"
                            progress={25}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
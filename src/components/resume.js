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
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%', margin: 'auto'}}/>
                            <p>njfsdnfjd kdfsn jf njsdkf njksdf njdsfn jskdnfjsdkfn jsdfn jdskfn jkdsnf jsdn fjkdsnf
                                jsdn ffnds jkf nsdjk fndsjk fnjsdknf jkdsnf jksd</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%', margin: 'auto'}}/>
                            <h5>Address</h5>
                            <p>soloma</p>
                            <h5>Phone</h5>
                            <p>+380997876739</p>
                            <h5>Email</h5>
                            <p>seva--seva@ukr.net</p>
                            <h5>Web</h5>
                            <p>my web.com</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%', margin: 'auto'}}/>
                        </div>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2012}
                            endYear={2016}
                            schoolName="My University"
                            schoolDescription="dsjkfldsf dfkls jsdfk dskl jfdks jfsd ksdfj klfsd "
                        />


                        <Education
                            startYear={2007}
                            endYear={2009}
                            schoolName="My 2nd University"
                            schoolDescription="dsjkfldsf dfkls jsdfk dskl jfdks jfsd ksdfj klfsd "
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Expirience</h2>

                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="sad asd sda asd asd sad sa dsad asd asd sad asd asd as "
                        />

                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="Second Job"
                            jobDescription="sad asd sda asd asd sad sa dsad asd asd sad asd asd as "
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={100}
                        />

                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />

                        <Skills
                            skill="NodeJS"
                            progress={50}
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
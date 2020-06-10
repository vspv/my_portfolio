import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div className="about_background">
                <div>
                    <div className="about_leftside">
                        <h1 style={{marginLeft: 10, marginBottom: '-15px'}}>Personal skills</h1>
                        <ul>
                            <li className="dots">Skills: HTML5, CSS3, JavaScript, React, PHP;</li>
                            <li className="dots">Tools: SASS, GitHub, Adobe Photoshop, BEM, Bootstrap,
                                WebPack, NPM, jQuery, mySQL;
                            </li>
                            <li className="dots">CMS: WordPress, ModX;</li>
                            <li className="dots">In progress: Node.js, UX / UI;</li>
                        </ul>
                    </div>

                    <hr className='hr_line'/>

                    <div className="about_rightside">
                        <h1 style={{marginLeft: 10, marginBottom: '-15px'}}>Personal experience</h1>
                        <ul>
                            <li className="dots">HTML5 (2 years experience) - Above average, currently using.</li>
                            <li className="dots">CSS3 (2 years experience) - Above average, currently using.</li>
                            <li className="dots">JavaScript (1,5 year experience) - Below average, currently using.</li>
                            <li className="dots">PHP, MySQL (1 years experience) - Below average.</li>
                            <li className="dots"> React (0,5 year experience) - Below average, currently using.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
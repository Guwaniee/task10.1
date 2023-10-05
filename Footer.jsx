import React from "react";
import { Icon } from 'semantic-ui-react'

function Footer(){
    return(
        <div className="footer">
            <div className="footer1">
                <h4>For Dev</h4>
                <br/>
                <a>How it works</a>
                <a>How to create a profile</a>
                <a>Find jobs</a>
            </div>
            <div className="footer1">
                <h4>For Clients</h4>
                <br/>
                <a href="">How it works</a>
                <a href="">How to post a job</a>
                <a href="">Find dev</a>
            </div>
            <div className="footer1">
                <h4>Stay connected</h4>
                <br/>
                <div className="icons">
                <Icon className="icon" link name='facebook' />
                <Icon className="icon" link name='twitter square' />
                <Icon className="icon" link name='instagram' />
                </div>
            </div>
            <div className="footer2">
                <h4>DEVLink</h4>
                <br/>
                <div className="footer3">
                <a>Privacy Policy</a>
                </div>
                <div className="footer3">
                <a>Terms</a>
                </div>
                <div className="footer3">
                <a>Code of Conduct</a>
                </div>
            </div>
        </div>
        
    )
}

export default Footer
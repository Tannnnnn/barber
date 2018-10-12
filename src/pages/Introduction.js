import React, { Component } from 'react'
import Img_Intro from '../img/bg_2.jpg'

export class Introduction extends Component {
    render() {
        return (
        <div id="Home">
            <div className="image is-2by1">
                <img src={Img_Intro} />
                <div className="centered" >
                    <p class="script">
                        <span>SecondLight</span>
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default Introduction

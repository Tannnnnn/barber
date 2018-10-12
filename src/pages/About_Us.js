import React, { Component } from 'react'
import Img_Intro from '../img/bg_1.jpg'
import Img_Logo from '../img/logo_sl.jpg'

export class About_Us extends Component {
  render() {
    return (
        <div id="About Us">
            <div className="image is-2by1">
                <img src={Img_Intro} />
                <div className="centered-column" >
                    <div className="columns">
                        <div className="column">
                            <div class="box">
                                <article class="media">
                                    <div class="media-left">
                                        <div class="image is-128x128">
                                            <img className="is-rounded" src={Img_Logo} alt="Image" />
                                        </div>
                                    </div>
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <strong>Second Light</strong>
                                                <br />
                                                ร้านตัดผมสไตล์วินเทจโดยช่างฝีมทอดี ร้านตัดผมสไตล์วินเทจโดยช่างฝีมทอดี ร้านตัดผมสไตล์วินเทจโดยช่างฝีมทอดี ร้านตัดผมสไตล์วินเทจโดยช่างฝีมทอดี
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default About_Us

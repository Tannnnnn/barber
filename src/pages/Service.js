import React, { Component } from 'react'
import Img_Intro from '../img/pg_bg_2.jpg'
import Img_Logo from '../img/logo_sl.jpg'

export class Service extends Component {
  render() {
    return (
        <div id="Services">
            <div className="image is-2by1">
                <img src={Img_Intro} />
                <div className="centered-column-service" >
                    <div className="columns">
                        <div className="column">
                            <div class="box box-tran">
                                <article class="media">
                                    <div class="media-content">
                                        <div class="content">
                                            <center>
                                                <div class="image is-64x64">
                                                    <img className="is-rounded" src={Img_Logo} alt="Image" />
                                                </div>
                                            </center>
                                            <p>
                                                <center><strong>Price List</strong></center>
                                                <div class="table table-tran">
                                                    <tbody>
                                                        <tr>
                                                            <th>Haircut</th>
                                                            <td>
                                                                400฿ 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Haircut and Shave</th>
                                                            <td>
                                                                450฿ 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Student Cut and Skinhead</th>
                                                            <td>
                                                                200฿ 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Shave razor & trim</th>
                                                            <td>
                                                                150฿ 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Hairwash and set</th>
                                                            <td>
                                                                150 - 200฿ 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Hair Spa</th>
                                                            <td>
                                                                250฿ 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Signature Full Service</th>
                                                            <td>
                                                                700฿ 
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </div>
                                                <center>
                                                    <strong className="protfolio-text">Open Everyday @ 10:00 am. - 10:00 pm.</strong><br />
                                                    <strong>Thank You</strong><br /><small>ขอบคุณ</small>
                                                </center>
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

export default Service

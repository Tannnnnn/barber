import React, { Component } from 'react'
import Img_Protfolio_1 from "../img/pf_1.jpg";
import Img_Protfolio_2 from "../img/pf_2.jpg";
import Img_Protfolio_3 from "../img/pf_3.jpg";
import Img_Protfolio_4 from "../img/pf_4.jpg";
import Img_Protfolio_5 from "../img/pf_5.jpg";
import Img_Protfolio_6 from "../img/pf_6.jpg";
import Img_Protfolio_7 from "../img/pf_7.jpg";
import Coverflow from 'react-coverflow';

export class Portfolio extends Component {
  render() {
    return (
        <div id="Portfolio">
            <Coverflow 
                width="1000" height="660"
                displayQuantityOfSide={2}
                enableScroll={true}
                clickable={true}
                enableHeading={false}
                infiniteScroll
            >
                <img src={Img_Protfolio_1}  />
                <img src={Img_Protfolio_2}  />
                <img src={Img_Protfolio_3}  />
                <img src={Img_Protfolio_4}  />
                <img src={Img_Protfolio_5}  />
                <img src={Img_Protfolio_6}  />
                <img src={Img_Protfolio_7}  />
            </Coverflow>
        </div>
    )
  }
}

export default Portfolio

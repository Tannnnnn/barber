import React, { Component } from 'react'
import Introduction from './Introduction.js'
import About_Us from './About_Us.js'
import Portfolio from './Portfolio.js'
import Service from './Service.js'
import Contact from './Contact.js'
import '../styles/barber.css'

export class Home extends Component {
  render() {
    const handleClickScroll = (Scroll) => {
      const element = document.getElementById(`${Scroll}`);
          element.scrollIntoView({behavior: 'smooth'});
    }
    return (
      <div >
        <div id="header" className="navbar is-fixed-top transparent_class">
          <ul id="menu">
              <li><a onClick={()=>handleClickScroll("Home")} ><span>Home</span></a></li>
              <li><a onClick={()=>handleClickScroll("About Us")}><span>About Us</span></a></li>
              <li><a onClick={()=>handleClickScroll("Portfolio")}><span>Portfolio</span></a></li>
              <li><a onClick={()=>handleClickScroll("Services")}><span>Services</span></a></li>
              <li><a onClick={()=>handleClickScroll("Contact")}><span>Contact</span></a></li>
          </ul>
        </div>
        <Introduction />
        <About_Us />
        <Portfolio />
        <Service />
        <Contact />
        <div>
          <footer class="footer">
              <div class="content has-text-centered">
                  <p>
                      <strong>Second Light Thailand Barber</strong><br />
                      <small>©2018 Tan'n Kitpakorn</small>
                  </p>
              </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Home
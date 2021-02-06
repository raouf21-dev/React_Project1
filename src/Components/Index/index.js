import React, { Component } from 'react'
import Home from "./../Home";
import Portfolio from "./../Portfolio";
import About from "./../About";
import SocialMedia from "./../SocialMedia";
import Work from "./../Work";
import Footer from "./../Footer";
class Index extends Component {
  render() {
    return (
      <div>
        <Home/>
        <Work/>
        <Portfolio/>
        <About/>
        <SocialMedia/>
        <Footer/>
      </div>
    )
  }
}

export default Index;
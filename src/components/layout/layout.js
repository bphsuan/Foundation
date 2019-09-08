import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ToTop from '../ToTop/ToTop';
import './Layout.scss'
export default ({ children }) => (
  <div>
    <Header />
    <div className="content">
      {children}
    </div>
    <Footer />
    <ToTop scrollStepInPx="50" delayInMs="16.66" />
  </div>
)
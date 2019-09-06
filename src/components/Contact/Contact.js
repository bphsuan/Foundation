import React from 'react'
import './contact.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"

import contactPic from '../../images/contactus.png'
class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-bar">
          <div className="contact-box ">
            <div className="contact-msg rightBar">
              <FontAwesomeIcon
                className="contact-icon"
                icon={faPhone}
              />
              <p>0934032602</p>
            </div>
          </div>
          <div className="contact-box ">
            <div className="contact-msg rightBar">
              <FontAwesomeIcon
                className="contact-icon"
                icon={faEnvelope}
              />
              <p>amychen861110@gmail.com</p>
            </div>
          </div>
          <div className="contact-box ">
            <div className="contact-msg">
              <FontAwesomeIcon
                className="contact-icon"
                icon={faMapMarkedAlt}
              />
              <p>台中市北區三民路三段129號 </p>
            </div>
          </div>

        </div>
        <div className="contact-body">
          <div className="contact-bodyPic">
            <img src={contactPic} width="90%" />
          </div>
          <div className="contact-bodyBox">
            <div className="input-style">
              <p className="letter">姓名</p>
              <input type="text" className="input" />
            </div>
            <div className="input-style">
              <p className="letter">email</p>
              <input type="text" className="input" />
            </div>
            <div className="input-style">
              <p className="letter">描述</p>
              <textarea className="input textarea" />
            </div>
            <div className="summit-btn">
              <a>送出</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
import React from 'react';
import './Footer.scss';
import Logo from '../../images/background/foundationLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
function Footer(props) {
  return (
    <div className="Footer">
      <img src={Logo} />
      <p className="copyright">
        紅粉知己 Find Your Foundation
      <br className="addCol" />
        版權所有
      <FontAwesomeIcon
          icon={faCopyright}
        />
        2019
        </p>
    </div>
  )
}
export default Footer;
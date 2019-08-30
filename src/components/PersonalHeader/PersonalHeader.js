import React from 'react'
import { Link } from 'gatsby'
import './PersonalHeader.scss'
import test from '../../images/background/foundationBG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
class PersonalHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="personal-header">
                <div className="personal-head">
                    <img src={test} />
                    <Link id="changeImg">更換頭貼</Link>
                </div>
                <div className="personal-menu">
                    <p className="name">Jing-Yi</p>
                    <Link><span>編輯個人資訊 </span><FontAwesomeIcon className="icon" icon={faEdit} /></Link>
                    <Link><span>檢測歷史紀錄 </span><FontAwesomeIcon className="icon" icon={faCamera} /></Link>
                    <Link><span>購買歷史紀錄 </span><FontAwesomeIcon className="icon" icon={faShoppingBag} /></Link>
                    <Link><span>查看我的最愛 </span><FontAwesomeIcon className="icon" icon={faHeart} /></Link>
                </div>
            </div>
        )
    }
}

export default PersonalHeader
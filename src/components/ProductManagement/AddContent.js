import React from "react"
import './ProductManagement.scss'

class AddContent extends React.Component {
    render() {
        return (
            <div className="addProduct">
                <h2>新增產品</h2>
                <div className="addContent">
                    <div className="input">
                        <span>品牌</span><input type="text" />
                    </div>
                    <div className="input">
                        <span>品名</span><input type="text" />
                    </div>
                    <div className="input">
                        <span>色票</span><input type="text" />
                    </div>
                    <div className="input">
                        <span>描述</span><textarea />
                    </div>
                    <div className="summit-btn">
                        <a>新增</a>
                    </div>                    
                </div>
            </div>
        )
    }
} export default AddContent;
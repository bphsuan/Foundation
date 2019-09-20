import React from "react"
class EditContent extends React.Component {
    render() {
        return (
            <div>
                <div className="input">
                    <p>品牌</p><input type="text" />
                </div>
                <div className="input">
                    <p>品名</p><input type="text" />
                </div>
                <div className="input">
                    <p>描述</p><textarea />
                </div>
            </div>
        )
    }
} export default EditContent;
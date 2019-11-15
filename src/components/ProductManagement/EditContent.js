import React from "react"
class EditContent extends React.Component {
  render() {
    return (
      <div>
        <div className="input">
          <span>品牌</span><input type="text" />
        </div>
        <div className="input">
          <span>品名</span><input type="text" />
        </div>
        <div className="input">
          <span>上傳照片</span><input type="file" />
        </div>
        <div className="input">
          <span>描述</span><textarea />
        </div>
      </div>
    )
  }
} export default EditContent;
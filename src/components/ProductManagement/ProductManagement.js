import React from "react"
import './ProductManagement.scss'
import DialogBox from './DialogBox';

class ProductManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button: '',
            open: false            
        }
    }
    setEdditButton=()=> {    
        this.setState({
            button:'edit',            
            open: true
        })        
    }
    setDeleteButton=()=> {    
        this.setState({
            button:'delete',            
            open: true
        })        
    }
    handleClose=()=> {
        this.setState({           
            open: false
        })
    }
    render() {        
        return (
            <div className="product-management">
                <table className="product-data">
                    <tr>
                        <th>序號</th>
                        <th>品牌</th>
                        <th>品名</th>
                        <th>色票</th>
                        <th className="t-width">描述</th>
                        <th>最近一次修改時間</th>
                        <th>修改</th>
                        <th>刪除</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Maybelline</td>
                        <td>夢幻奇蹟無瑕粉底液</td>
                        <td>BO0 白皙色</td>
                        <td>保濕粉底液具卓越遮瑕力，能完美修飾毛孔、細紋、斑點、膚色不均等各式肌膚瑕疵，打造如絲緞般的輕柔無瑕感，夢幻上質美肌，即刻實現！</td>
                        <td>2019/10/10</td>
                        <td><a className="p-button" onClick={this.setEdditButton} >修改</a></td>
                        <td><a className="p-button" onClick={this.setDeleteButton}>刪除</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Maybelline</td>
                        <td>夢幻奇蹟無瑕粉底液</td>
                        <td>BO0 白皙色</td>
                        <td>保濕粉底液具卓越遮瑕力，能完美修飾毛孔、細紋、斑點、膚色不均等各式肌膚瑕疵，打造如絲緞般的輕柔無瑕感，夢幻上質美肌，即刻實現！</td>
                        <td>2019/10/10</td>
                        <td><a className="p-button" onClick={this.setEdditButton}>修改</a></td>
                        <td><a className="p-button" onClick={this.setDeleteButton}>刪除</a></td>
                        <DialogBox open={this.state.open} onClose={this.handleClose} button={this.state.button}></DialogBox>
                    </tr>
                </table>

            </div>
        )
    }
}

export default ProductManagement;
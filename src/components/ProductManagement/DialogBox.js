import React from "react"
import './ProductManagement.scss'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditContent from './EditContent';

class DialogBox extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClose = () => {
        //取得父元件的function
        this.props.onClose();
    }

    render() {
        const button = {
            margin: "0",
            padding: "0",
            fontFamily: "sans-serif, 'Microsoft JhengHei', '微軟正黑體'",
            width: "100px",
            height: "40px",
            margin: "20px auto",
            backgroundColor: "#343434",
            color: "#fff",
            fontSize: "18px",
            display: "block",
            textAlign: "center",
            lineHeight: "40px",
            transition: "all 0.5s",
            letterSpacing: "3px",
            borderRadius: "0"
        }
        const title = {
            margin: "0 auto",
        }
        let dialogContent;
        this.props.button === 'edit' ? dialogContent = <EditContent /> : dialogContent = undefined;

        return (
            <Dialog open={this.props.open} onClose={this.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description"  >
                <DialogTitle style={title}>{this.props.button === 'edit' ? "修改商品" : "確認刪除？"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className="DialogContent">
                            {dialogContent}
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button style={button} onClick={this.handleClose} color="primary"> 取消 </Button>
                    <Button style={button} onClick={this.handleClose} color="primary"> {this.props.button === 'edit' ? "儲存" : "刪除"} </Button>
                </DialogActions>
            </Dialog >
        )
    }
} export default DialogBox;
import React from "react";
import './ProgressBar.scss';

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
			<div className="progress">
				<div className={this.props.progressActive === "checkout" ? "step active" : "step"}>1</div>
				<div className={this.props.progressActive === "delivery" ? "step active" : "step"}>2</div>
				<div className={this.props.progressActive === "order" ? "step active" : "step"}>3</div>
			</div>
		)
	}
}
export default Cart


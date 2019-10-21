import React from "react";
import Layout from '../components/Layout/Layout';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import Title from '../components/Title/Title';
import CheckoutWay from '../components/CheckoutWay/CheckoutWay';
import StepPrevious from '../components/StepPrevious/StepPrevious';
import StepNext from '../components/StepNext/StepNext';
import { Link } from 'gatsby';

class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: "checkout",
			name: "付款方式",
		}
	}
	render() {
		return (
			<Layout>
				<ProgressBar
					progressActive={this.state.progress}
				/>
				<Title name={this.state.name} />
				<CheckoutWay />
			</Layout>
		)
	}
}
export default Checkout


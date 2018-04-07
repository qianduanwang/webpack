import React, {
	Component,
} from 'react';
import {mapState} from 'vuex'
import $ from "jquery"
export default class App extends Component {
	render() {
		console.log(mapState)
		console.log($)
		return (
			<h1>Hello World</h1>
		);
	}
}
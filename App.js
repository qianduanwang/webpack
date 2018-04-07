import React, {
	Component,
} from 'react';
import {mapState} from 'vuex'
export default class App extends Component {
	render() {
		console.log(mapState)
		return (
			<h1>Hello World</h1>
		);
	}
}
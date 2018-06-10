import React, {
	Component,
} from 'react';
import {mapState} from 'vuex'
import $ from "jquery"
import * as compiledMain from './packages/build/main'
// export default class App extends Component {
// 	render() {
// 		console.log(mapState)
// 		console.log($)
// 		return (
// 			<h1>Hello World</h1>
// 		);
// 	}
// 
export const getName = () => {
	console.log(compiledMain.getName(), 'xxxxx' )
	return 'tom and jack'
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Index from './Components/layout/Index';
import { Provider } from './context';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<>
						<Navbar />
						<div className='container'>
							<Switch>
								<Route exact path='/' component={Index} />
							</Switch>
						</div>
					</>
				</Router>
			</Provider>
		);
	}
}
export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/layout/Navbar';
import Index from './Components/layout/Index';
import { Provider } from './context';
import Lyrics from './Components/tracks/Lyrics';

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
								<Route exact path='/lyrics/track/:id' component={Lyrics} />
							</Switch>
						</div>
					</>
				</Router>
			</Provider>
		);
	}
}
export default App;

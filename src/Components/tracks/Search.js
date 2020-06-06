import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			trackTitle: '',
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (dispatch, e) => {
		e.preventDefault();
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
			)
			.then((res) => {
				dispatch({
					type: 'SEARCH_TRACKS',
					payload: res.data.message.body.track_list,
				});

				this.setState({
					trackTitle: '',
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className='card mb-3'>
							<div className='card-body mb-4 p-4'>
								<h3 className='display-4 text-center'>
									<i className='fas fa-music'></i> Search For A Song
								</h3>
								<p className='lead text-center'>Get the lyrics for any song</p>
								<form onSubmit={this.handleSubmit.bind(this, dispatch)}>
									<div className='form-group'>
										<input
											type='text'
											className='form-control input-lg'
											placeholder='Song Title...'
											name='trackTitle'
											value={this.state.trackTitle}
											onChange={this.handleChange}
										/>
									</div>
									<button className='btn btn-primary btn-lg btn-block search-btn'>
										Get Track Lyrics
									</button>
								</form>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Search;

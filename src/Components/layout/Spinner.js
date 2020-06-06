import React from 'react';
import load1 from '../../Components/load1.gif';

export default () => {
	return (
		<div>
			<img
				src={load1}
				alt='Loading...'
				style={{ width: '400px', margin: '40px auto', display: 'block' }}
			/>
		</div>
	);
};

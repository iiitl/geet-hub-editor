import React from 'react';

const ToggleButton = ({onChange}) => {
	return (
		<>
			<label className='switch'>
				<input type='checkbox' id='togBtn' onChange={(e) => onChange(e.target.checked)} defaultChecked={true} />
				<div className='toggle round'>
					<span className='on'>Dual</span>
					<span className='off'>Mono</span>
				</div>
			</label>
		</>
	);
};

export default ToggleButton;

import React, { Component } from 'react';

export default function Search({ placeHolder, handleChange }) {
	return (
		<div className='h-80  text-left pt-4 pl-8' style={{ backgroundColor: '#0e1a2b' }}>
			<p className='text-2xl '>Fliter Results</p>
			<div className='w-full'>
				<label className='text-md'>Name (contains)</label>
				<input
					style={{ backgroundColor: '#182c47' }}
					className='py-2 px-3 border-none rounded mt-4 outline-none '
					type='search'
					placeholder={placeHolder}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}

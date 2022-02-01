import React from 'react';
import '../../App.css';

export default function Card(props) {
	let text = props.list.summary;

	function truncateString(str, num) {
		if (str.length <= num) {
			return str;
		}
		return str.slice(0, num) + '...';
	}

	return (
		<div className='card-panel-bg w-full h-52 flex items-center ml-4'>
			<div className=' mt-4 px-3 w-3/12 lg:mt-0 bg-pic-img h-full  transition duration-500 ease-in-out hover:bg-red-300 transform hover:scale-110 hover:-translate-y-1 '></div>
			<div className='w-9/12 h-full px-8'>
				<h2 class='font-bold mt-4 '>{props.list.name}</h2>
				<p className='text-gray-600 '>{'Release Date:' + ' ' + props.list.first_release_date}</p>
				<p className='text-gray-600 '>{truncateString(props.list.summary, 100)}</p>
			</div>
		</div>
	);
}

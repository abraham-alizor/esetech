import React from 'react';
import Card from './Card';
export default function CardList(props) {
	return (
		<>
			<div className='flex flex-col  gap-8'>
				{props.games.map((list) => {
					return <Card key={list.id} list={list} />;
				})}
			</div>
		</>
	);
}

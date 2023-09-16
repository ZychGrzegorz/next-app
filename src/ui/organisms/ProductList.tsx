import React from 'react'
import { ProductListItem } from '../molecules/ProductListItem';

const productsData = [
	{
		src: '/1.jpg',
		key: 1,
		description: 'woda',
		alt: 'Image 1'
	},
	{
		src: '/2.jpg',
		key: 2,
		description: 'góry',
		alt: 'Image 2'
	},
	{
		src: '/3.jpg',
		key: 3,
		description: 'kamienie',
		alt: 'Image 3'
	},
	{
		src: '/4.jpg',
		key: 4,
		description: 'droga',
		alt: 'Image 4'
	}
];


//create function for selecting the shortest string from  array of strings and return it's length

export const ProductList = () => {
	return (
		<ul
			className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list">
			{productsData && productsData.map((item) => {
				return (<ProductListItem {...item} key={item.key} />)
			})}
		</ul>
	)
}






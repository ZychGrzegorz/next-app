import React from 'react'
import { ProductCoverImage } from '../atoms/ProductCoverImage'
import { ProductListItemDescription } from '../atoms/ProductListItemDescription'


type ProductListItem = {
	src: string
	key: number
	description: string
	alt: string
}

export const ProductListItem = ({
	src,
	alt,
	description
}: ProductListItem) => {
	return (
		<li >
			<article className="rounded-lg bg-gray-100 p-6">
				<ProductCoverImage src={src} alt={alt} />
				<ProductListItemDescription description={description} />
			</article>
		</li>
	)
}





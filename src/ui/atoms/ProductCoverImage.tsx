import Image from 'next/image'
import React from 'react'

export const ProductCoverImage = ({ src, alt }: { src: string, alt: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md bg-slate-50 hover:bg-slate-100">
			<Image width={320} height={320} src={src} alt={alt} className='h-full w-full object-cover object-center p-4 transition-transform hover:scale-105' />
		</div>
	)
}


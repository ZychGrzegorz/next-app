import { ProductList } from "@/ui/organisms/ProductList"

export const Products = () => {
	return (
		<main className="flex min-h-screen items-center justify-between">
			<section className="container mx-auto">
				<ProductList />
			</section>
		</main>
	)
}

export default Products

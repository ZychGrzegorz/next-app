import { ProductList } from "@/ui/organisms/ProductList";

export default function Home() {
	return (

		<main className="flex min-h-screen items-center justify-between">
			<section className="container mx-auto">
				<ProductList />
			</section>
		</main>
	);
}

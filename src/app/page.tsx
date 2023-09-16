import Link from "next/link";

export default function Home() {
	return (

		<main className="flex min-h-screen items-center justify-between">
			<section className="container mx-auto">

				<Link href="/products" >Products</Link>
			</section>
		</main>
	);
}

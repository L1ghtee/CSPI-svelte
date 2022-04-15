<script context ="module">
	export async function load({fetch}) {
		const res = await fetch ('/db.json')
		if (res.ok) {
			const data = await res.json()
			return {
				props: { data }
			}
		}
	}

</script>

<script>
    export let data;
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import ContactUs from '$lib/contact-us.svelte';
   
</script>




<title>ЦСПІ Новини</title>
<!--layout-->

<Header />


<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<h2
			class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4"
			style="margin-bottom: 40px;"
		>
			Останні новини парафії
		</h2>
		<div class="flex flex-wrap -m-4">
			<div class="flex flex-wrap -m-4">
				{#each data as {tittle, text, image}	}
					
				
				<div class="p-4 md:w-1/3">
					<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
						<img
							class="lg:h-48 md:h-36 w-full object-cover object-center"
							src={image}
							alt={tittle}
						/>
						<div class="p-6">
							
							<h1 class="title-font text-lg font-medium text-gray-900 mb-3">{tittle}</h1>
							<p class="leading-relaxed mb-3">
								{text}
							</p>
							
						</div>
					</div>
				</div>
				{/each}
				
				
		
			</div>
		</div>
	</div>
</section>
<ContactUs />
<Footer />

<style></style>

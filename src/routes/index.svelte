
<script>
	
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import ContactUs from '$lib/contact-us.svelte';
	
</script>
<!-- Layout-->
<title>ЦСПІ</title>
<Header />
<section class="text-gray-600 body-font">
	<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
				Вас вітає
				<br class="hidden lg:inline-block" />Церква Святого Пророка Іллі
			</h1>
			<p class="mb-8 leading-relaxed">
				Храм Божий – це частинка Неба на землі. Сюди кожен віруючий несе свої радощі, і біди. Кожен приходить своїм шляхом до невичерпного джерела – Божого дому.
			</p>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<img
				class="object-cover object-center rounded"
				alt="hero"
				src="static\gallary\177708413_2832929140296218_4864226292637600170_n.jpg"
			/>
		</div>
	</div>
</section>


<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto flex flex-wrap">
		<div class="flex w-full mb-20 flex-wrap">
			<h2 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
				Світлини останніх подій
			</h2>
			
		</div>
		<div class="flex flex-wrap md:-m-2 -m-1">
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="\gallary\271659979_1571690886525232_8505754771633328267_n.jpg"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="\gallary\271730403_1571691926525128_245266886979995460_n.jpg"
					/>
				</div>
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="\static\gallary\271735236_1571692006525120_257708555148105430_n.jpg"
					/>
				</div>
			</div>
			<div class="flex flex-wrap w-1/2">
				<div class="md:p-2 p-1 w-full">
					<img
						alt="gallery"
						class="w-full h-full object-cover object-center block"
						src="static\gallary\271740198_1571692086525112_4288848076394402595_n.jpg"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="static\gallary\271744814_1571691943191793_575774453679298971_n.jpg"
					/>
				</div>
				<div class="md:p-2 p-1 w-1/2">
					<img
						alt="gallery"
						class="w-full object-cover h-full object-center block"
						src="static\gallary\271759745_1571690786525242_8025382621356896437_n.jpg"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<ContactUs></ContactUs>

<Footer />

<style>
</style>

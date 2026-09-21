<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import beans from '$lib/assets/CoffeeBeansAnastasiiaChepinska.webp';
	import maker from '$lib/assets/CoffeeMakerNathanDumlao.webp';
	import cup from '$lib/assets/CupOfCoffeePablaoMerchanMontes.webp';
	import hazelnut from '$lib/assets/HazelnutCoffeeHanvinCheong.webp';
	import mocha from '$lib/assets/MochaCoffeeNathanDumlao.webp';
	import vanilla from '$lib/assets/VanillaCoffeeNathanDumlao.webp';
	import main from '$lib/assets/Hero.webp';
	import logo from '$lib/assets/AlcandersAlcove.webp';

	const mainSite = 'https://www.google.com';
</script>

<div class="relative">
	<img src={main} alt="Inside our café" class="block aspect-5/4 w-full object-cover" />

	<div class="overlay-hero-shade absolute inset-0"></div>
	<div class="overlay-hero-fade absolute inset-x-0 bottom-0 h-[30%]"></div>

	<img src={logo} alt="logo left" class="absolute top-[5%] left-[5%] w-[10%]" />

	<div class="absolute top-[25%] left-1/2 -translate-x-1/2 w-[80%] text-center">
		<h1 class="text-hero">Crafting the Perfect Cup, One Roast at a Time.</h1>

		<p class="text-subhero mt-6">
			Experience premium, sustainably sourced specialty coffee in the heart of Manila. Open daily from 6 AM to 10 PM.
		</p>

		<div class="mt-30 flex justify-center gap-4 sm:mt-10 sm:gap-8">
			<a href="#trending" class="button-caramel">Our Menu</a>
			<a href="#about" class="button-outline-caramel">About Us</a>
		</div>
	</div>
</div>

<section id="about" class="mt-24">
	<h2 class="text-section text-center">About Us</h2>

	<p class="text-muted mx-auto mt-8 w-[70%] text-center text-lg leading-relaxed">
		We're a small Manila roastery focused with one question: what makes the perfect cup? Every bean comes from local
		farms we support and love, roasted in small batches and brewed like it's the only one that matters. No shortcuts and
		No corners cut, just coffee done right, for people like you who love it just as much as we do.
	</p>

	<div class="mt-16 flex flex-col gap-24 px-[14%]">
		<div class="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
			<img class="image-step sm:w-[10%]" src={beans} alt="Coffee beans being harvested" />
			<div class="sm:w-[55%]">
				<h3 class="text-2xl font-bold text-(--cream)">Journey of the Coffee Beans</h3>
				<p class="text-muted mt-3">
					Gathered by hand from local farmers we know by name with every bean picked at with the best ripeness.
				</p>
			</div>
		</div>

		<div class="flex flex-col items-center gap-8 sm:flex-row-reverse sm:gap-12">
			<img class="image-step sm:w-[10%]" src={maker} alt="Coffee being brewed by our maker" />
			<div class="sm:w-[55%]">
				<h3 class="text-2xl font-bold text-(--cream)">Brewing the Coffee</h3>
				<p class="text-muted mt-3">
					Roasted and brewed in small batches right here in Manila, tuned until each cup is exactly right.
				</p>
			</div>
		</div>

		<div class="flex flex-col items-center gap-8 sm:flex-row sm:gap-12">
			<img class="image-step sm:w-[10%]" src={cup} alt="The finished cup of coffee" />
			<div class="sm:w-[55%]">
				<h3 class="text-2xl font-bold text-(--cream)">Finally, our perfection in your hands</h3>
				<p class="text-muted mt-3">
					Poured into your cup with freshness. Perfection isn't an accident, it's the standard.
				</p>
			</div>
		</div>
	</div>
</section>

<div id="trending" class="mt-24 mb-24">
	<h2 class="text-section text-center">Trending Now</h2>

	<div class="mt-8 flex flex-wrap justify-center gap-8">
		<Card
			class="w-[80%] sm:w-[23%]"
			src={vanilla}
			alt="Vanilla coffee"
			name="Vanilla Coffee"
			price="₱99"
			description="Real vanilla bean over a smooth, slow-pulled shot."
			href={`${mainSite}/vanilla-coffee`}
		/>
		<Card
			class="w-[80%] sm:w-[23%]"
			src={hazelnut}
			alt="Hazelnut coffee"
			name="Hazelnut Coffee"
			price="₱109"
			description="Toasted hazelnut, steamed milk, a whisper of cocoa."
			href={`${mainSite}/hazelnut-coffee`}
		/>
		<Card
			class="w-[80%] sm:w-[23%]"
			src={mocha}
			alt="Mocha coffee"
			name="Mocha Coffee"
			price="₱119"
			description="Espresso and dark chocolate, swirled into something dangerous."
			href={`${mainSite}/mocha-coffee`}
		/>
	</div>
</div>

<footer class="flex flex-col items-center gap-6 pb-12">
	<div class="flex flex-wrap justify-center gap-x-10 gap-y-3 px-6">
		<a class="link-footer" href={`${mainSite}/help-center`}>Help Center</a>
		<a class="link-footer" href={`${mainSite}/contact-us`}>Contact Us</a>
		<a class="link-footer" href={`${mainSite}/careers`}>Careers</a>
		<a class="link-footer" href={`${mainSite}/locations`}>Visit Us</a>
		<a class="link-footer" href={`${mainSite}/privacy-policy`}>Privacy Policy</a>
		<a class="link-footer" href={`${mainSite}/terms-of-service`}>Terms of Service</a>
	</div>
	<p class="text-sm text-(--cream)/50">© 2026 Alcander's Alcove • MIT License</p>
</footer>

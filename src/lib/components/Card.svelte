<script>
	let { src, alt = '', name, description, price, href, class: klass = '' } = $props();
</script>

<a class="card-espresso {klass}" {href} target="_blank" rel="noreferrer">
	<div class="relative">
		<img {src} {alt} />
		<div class="overlay-card-fade absolute inset-x-0 bottom-0 h-1/3"></div>
	</div>

	<div class="flex flex-col gap-2 p-4">
		<div class="flex items-baseline gap-2">
			<h3 class="text-xl font-bold">{name}</h3>
			<span class="text-sm text-(--cream)/75">{price}</span>
		</div>
		<p class="text-sm text-(--cream)/75">{description}</p>
	</div>
</a>

<script lang="ts">
	let {
		ability = 'Some Ability',
		description = 'Description unspecified',
		icon = 'bi-question-circle',
		preview = false
	} = $props();
</script>

<div class="carousel-item" class:active={preview}>
	<div class="text-center w-100 h-100 my-5 pb-5">
		<div class="fs-1"><i class="bi {icon}"></i></div>
		<div class="fs-2 text-center">{ability}</div>
	</div>
	<div class="carousel-caption">
		{@html description}
	</div>
</div>

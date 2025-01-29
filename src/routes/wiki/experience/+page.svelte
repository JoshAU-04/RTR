<script lang="ts">
	import { Ability } from '$lib/components'
</script>



<div class="mt-3 container rounded-2 h-100 px-4">

	<div class="fs-2 mb-3 mt-5 d-block fw-light text-body-primary">Levelling up</div>
	<!-- <div class="fs-5 fw-light mb-3 text-body-secondary"> <b>How to increase your skill XP</b> </div> -->

	<div class="fs-5">
		At the beginning of the game, all your stats - <i>sometimes referred to as <a href="/">skills</a></i> - are set to zero <a href="/wiki/experience">XP Points</a> by default. You can acquire XP a variety of ways. Some of the most effective ways to increase your XP are:
		<div class="my-2"></div>
		<ul>
			<li>Killing enemies</li>
			<li>Unlocking crates</li>
			<li>Discovering hidden rooms</li>
			<li>Daily reward</li>
		<ul>
	</div>

	<div id="skillCarousel" class="carousel carousel-dark slide rounded-3" data-bs-ride="carousel">
		<div class="carousel-inner">
			<Ability
				ability={"Durability"}
				icon={'bi-feather'}
				description={'Weapons generally degrade slowly and standard weapons are easy to keep above a 75% durability condition. <b>Rarer</b> weapons are harder to keep working but this can be mitigated through selective play.'}
				preview={true}
			/>

			<Ability
				ability={"Power"}
				icon={'bi-lightning-charge'}
				description={'The <b>Power Level</b> of an item is used to calculate your overall power (the average of all your equipped gear), which can affect how much <b>damage</b> you give and take.'}
			/>

			<Ability
				ability={"Specialty"}
				icon={'bi-fire'}
				description={'Your <b>Specialty</b> allows you to do <b>extra damage</b> to entities. Your specialtiy depends on the <b>class</b> that you select at the beginning of the game.'}
			/>
		</div>
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#skillCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#skillCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#skillCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
		</div>
	</div>

</div>

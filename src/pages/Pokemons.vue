<script setup lang='ts'>
import { ref } from '@vue/reactivity';
import { getRandomPokemon } from '../tools/getRandomPokemon';
import { Pokemon } from '../types/Pokemon';
import PokemonCard from '../components/PokemonCard.vue';

const pokemons = ref<Array<Pokemon>>([])

const loadPokemons = async () => {
	pokemons.value = await Promise.all([
		getRandomPokemon(),
		getRandomPokemon(),
		getRandomPokemon(),
	])
}

loadPokemons()
</script>

<template>
	<div class="pokemons">
		<header>Ajoutez un de ces pokemons à votre collection:</header>

		<main>
			<PokemonCard
				v-for="pokemon in pokemons"
				:pokemon="pokemon"
				:key="pokemon.id"
				can-pick-pokemon
				@pick-pokemon="loadPokemons"
			/>
		</main>

		<footer>
			<button @click="loadPokemons">Passer</button>
		</footer>
	</div>
</template>

<style scoped>
.pokemons {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
}
main {
	display: flex;
	gap: 15px;
}
</style>
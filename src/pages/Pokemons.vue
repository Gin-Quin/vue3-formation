<script setup lang='ts'>
import { ref } from '@vue/reactivity';
import { getRandomPokemon } from '../tools/getRandomPokemon';
import { Pokemon } from '../types/Pokemon';
import PokemonCard from '../components/PokemonCard.vue';
import { user } from '../stores/user';

const pokemons = ref<Array<Pokemon>>([])

const loadPokemons = async () => {
	pokemons.value = await Promise.all([
		getRandomPokemon(),
		getRandomPokemon(),
		getRandomPokemon(),
	])
}

const pickPokemon = (pokemon: Pokemon) => {
	user.value?.pokemons.push(pokemon)
	loadPokemons()
}

loadPokemons()
</script>

<template>
	<div v-if="!user">Vous devez être connecté pour choisir des pokemons.</div>
	<div v-else class="pokemons">
		<header>Ajoutez un de ces pokemons à votre collection:</header>

		<main>
			<PokemonCard
				v-for="pokemon in pokemons"
				:pokemon="pokemon"
				:key="pokemon.id"
				can-pick-pokemon
				@pick-pokemon="pickPokemon"
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
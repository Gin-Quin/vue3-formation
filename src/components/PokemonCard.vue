<script setup lang="ts">
import { user } from '../stores/user';
import { Pokemon } from '../types/Pokemon';

const props = defineProps<{
	pokemon: Pokemon
	canPickPokemon?: boolean
}>()

const pickPokemon = () => {
	user.value?.pokemons.push(props.pokemon);
}
</script>

<template>
	<div class="pokemon">
		<img :src="props.pokemon.sprites.front_default" />
		<div class="name">{{ props.pokemon.name }}</div>
		<div class="weight">Poids: {{ props.pokemon.weight }} kg</div>
		<div class="height">Taille : {{ props.pokemon.height }} cm</div>

		<button v-if="props.canPickPokemon" @click="pickPokemon()">Ajouter à ma liste</button>
	</div>
</template>

<style scoped>
img {
	margin: 0;
}

.pokemon {
	width: 200px;
	border-radius: 9px;
	box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
	padding: 9px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
}

.name {
	font-weight: bold;
}
</style>
<script setup lang='ts'>
import PokemonCard from '../components/PokemonCard.vue';
import { user } from '../stores/user';
</script>

<template>
	<div v-if="!user">Vous devez être connecté pour voir vos pokemons.</div>
	<div v-else class="my-pokemons">
		<PokemonCard v-for="pokemon in user.pokemons" :pokemon="pokemon" :key="pokemon.id" />
	</div>
</template>


<style scoped>
.my-pokemons {
	display: flex;
	flex-direction: row;
	gap: 12px;
	flex-wrap: wrap;
}
</style>
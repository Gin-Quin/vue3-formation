<script setup lang="ts">
import { ref } from '@vue/reactivity';
import PokemonCard from '../components/PokemonCard.vue';
import { getRandomPokemon } from '../tools/getRandomPokemon';
import { Pokemon } from '../types/Pokemon';

const pokemon = ref<Pokemon | null>(null)

loadPokemon()

async function loadPokemon() {
	pokemon.value = await getRandomPokemon()
}
</script>

<template>
	<PokemonCard v-if="pokemon" :pokemon="pokemon" :can-pick-pokemon="true" />
</template>

<script setup lang='ts'>
import { user } from '../stores/user';
</script>

<template>
	<div v-if="user">
		<p>Salut {{ user.name }} :)</p>
	</div>
	<div v-else>
		<p>Salut !</p>
		<p>Connecte-toi pour choisir tes pokemons :)</p>
	</div>
</template>

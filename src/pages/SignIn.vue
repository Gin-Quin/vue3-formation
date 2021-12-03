<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { user } from '../stores/user';
import { validateCgu, validateUserName } from '../tools/validateSignInForm';

const name = ref('')
const acceptCgu = ref(false)

const nameError = ref<string | undefined>(undefined)
const cguError = ref<string | undefined>(undefined)

// on form submit, we check there are no errors
const onSubmit = (event: Event) => {
	event.preventDefault()
	console.log("Submitting", name.value, acceptCgu.value)

	nameError.value = validateUserName(name.value)
	cguError.value = validateCgu(acceptCgu.value)

	// if there is no error, we sign in the user
	if (!nameError.value && !cguError.value) {
		signIn()
	}
}

// we sign an user
const signIn = () => {
	user.value = {
		name: name.value,
		pokemons: []
	}
}
</script>

<template>
	<div v-if="user">Vous êtes connecté en tant que {{ user.name }}.</div>
	<form v-else @submit="onSubmit">
		<div>
			Ton pseudo :
			<input name="name" type="text" placeholder="Mon pseudo" v-model="name" />
		</div>
		<div class="error">{{ nameError }}</div>

		<div>
			<input type="checkbox" v-model="acceptCgu" />
			J'accepte les
			<u>conditions générales d'utilisation</u>
		</div>
		<div class="error">{{ cguError }}</div>

		<button type="submit">Me connecter</button>
	</form>
</template>

<style scoped>
form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
}
.error {
	color: red;
	font-size: 12px;
}
</style>
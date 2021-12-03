<script setup lang="ts">
import "sakura.css"
import { ref } from '@vue/reactivity';
import Tabs from './components/Tabs.vue';
import Home from './pages/Home.vue';
import SignIn from './pages/SignIn.vue';
import Pokemons from './pages/Pokemons.vue';
import Tests from './pages/Tests.vue';
import MyPokemons from './pages/MyPokemons.vue';

const tabs = ["Accueil", "Mes pokemons", "Pokemons", "Se connecter", "Tests"]
const activeTab = ref("Home")
</script>

<template>
  <Tabs :tabs="tabs" v-model:active-tab="activeTab">
    <Home v-if="activeTab == 'Accueil'" />
    <MyPokemons v-else-if="activeTab == 'Mes pokemons'" />
    <Pokemons v-else-if="activeTab == 'Pokemons'" />
    <SignIn v-else-if="activeTab == 'Se connecter'" />
    <Tests v-else-if="activeTab == 'Tests'" />
  </Tabs>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

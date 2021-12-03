<script setup lang="ts">
const props = defineProps<{
	tabs: Array<string>
	activeTab: string
}>()

const emit = defineEmits<{
	(event: 'update:activeTab', value: string): void
}>()
</script>

<template>
	<header class="tabs">
		<div
			class="tab"
			:class="{ active: activeTab == tab }"
			v-for="tab in props.tabs"
			:key="tab"
			@click="emit('update:activeTab', tab)"
		>{{ tab }}</div>
	</header>

	<slot></slot>
</template>

<style scoped>
.tabs {
	display: flex;
	margin-bottom: 20px;
}
.tab {
	padding: 18px 22px;
	border-bottom: 2px solid;
	cursor: pointer;
}
.tab.active {
	color: green;
	border-color: green;
}
</style>
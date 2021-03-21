<template>
	<div class="hello">
		<h2>{{ msg }}</h2>

		<div v-if="prevSearches.length === 0">
			No searches yet, <router-link to="/">try one out!</router-link>
		</div>
		<div v-if="prevSearches.length > 0">
			<div id="container" v-for="search in prevSearches" :key="search.id">
				<div id="individualSearch">{{ search }}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "myStore",
	data() {
		return {
			msg: "Previous Searches",
		};
	},
	computed: {
		prevDefinitions() {
			return this.$store.state.prevDefinitions;
		},
		prevSearches() {
			return this.$store.state.prevSearches;
		},
	},
};
</script>

<style scoped>
h2 {
	margin-top: 10px;
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: black;
}
a:hover {
	color: white;
}
#container {
	display: flex;
	margin-left: auto;
	margin-right: auto;
	max-width: 100px;
	justify-content: center;
}
#individualSearch {
	background-color: maroon;
	border-radius: 20px;
	color: white;
	padding: 5px;
	margin: 5px;
}
</style>

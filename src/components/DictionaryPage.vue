<template>
	<div id="cardbackground">
		<b-card-group class="col d-flex justify-content-center" deck>
			<b-card
				id="word"
				footer="Powered by Merriam Webster"
				footer-tag="footer"
				style="max-width: 20rem;"
			>
				<p class="enter">Enter a word below</p>

				<form @submit="searchForWord">
					<input v-model="searchWord" id="word" type="text" />
					<br />
					<b-button id="button" type="submit">submit</b-button>
				</form>

				<b-card-text>
					<h2 id="word" v-if="word">Word: {{ word }}</h2>

					<p v-if="definition"><span>Definition:</span> {{ definition[0] }}</p>
				</b-card-text>
			</b-card>
		</b-card-group>
	</div>
</template>

<script>
export default {
	name: "myStore",
	data() {
		return {
			msg: "Dictionary App",
			searchWord: this.searchWord,
		};
	},
	methods: {
		searchForWord(e) {
			e.preventDefault();
			this.$store.dispatch("getDefinition", this.searchWord);
			this.$store.commit("SET_WORD", this.searchWord);
			this.searchWord = "";
		},
	},
	computed: {
		definition() {
			return this.$store.state.definition;
		},
		word() {
			return this.$store.state.word;
		},
	},
};
</script>

<style>
div#cardbackground {
	background-color: #ddc8c4;
}
div#word.card {
	margin-bottom: 20px;
	margin-top: 30px;
}
div.card {
	margin-top: 20px;
	background-color: #896a67;
	margin-bottom: 20px;
}
#button {
	background-color: #800000;
	margin-top: 10px;
}
#button:hover {
	background-color: #804000;
}
.enter {
	font-style: italic;
}
span {
	font-weight: bold;
}
#word {
	margin-top: 10px;
}
</style>

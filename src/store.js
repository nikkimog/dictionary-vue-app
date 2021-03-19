/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

//to handle state
const state = {
	definition: "",
	prevSearches: [],
	word: "",
};

// to handle state
const getters = {};

//to handle actions
const actions = {
	async getDefinition({ commit }, word) {
		console.log("word in actions", word);

		try {
			const res = await axios.get(
				`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=4b67ba34-831b-42d9-ae60-c9dbd158379b`
			);
			console.log("res.data.[0", res.data[0].shortdef);
			if (res.data[0].shortdef === undefined) {
				commit("SET_DEFINITION", [
					"Sorry, this is not a word in the Merriam Webster dictionary.",
				]);
			} else {
				commit("SET_DEFINITION", res.data[0].shortdef);
			}
			commit("SET_PREV_SEARCHES", word);
		} catch (err) {
			console.log("error fetching from API");
		}
	},
};

//to handle mutations
const mutations = {
	SET_PREV_SEARCHES(state, word) {
		console.log("state", state);
		state.prevSearches = [...state.prevSearches, word];
		console.log("state.prevSearches", state.prevSearches);
	},
	SET_DEFINITION(state, definition) {
		console.log("def in set posts", definition);
		state.definition = definition;
	},
	SET_WORD(state, word) {
		state.word = word;
	},
};

//export store module
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
});

import Vue from "vue";
import Router from "vue-router";
import DictionaryPage from "../components/DictionaryPage";
import PreviousSearches from "../components/PreviousSearches";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "Dictionary Page",
			component: DictionaryPage,
		},
		{
			path: "/previous_searches",
			name: "Previous Searches",
			component: PreviousSearches,
		},
	],
});

<template>
	<div id="app">
		<b-navbar toggleable="sm">
			<b-navbar-brand tag="h1" href="/"
				>QuickLookUp <img alt="Vue logo" src="./assets/book.png"
			/></b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<div>
					<router-link class="link" to="/previous_searches"
						>Previous Searches</router-link
					>
					<router-link class="link" to="/">Look it up!</router-link>
				</div>
			</b-collapse>
		</b-navbar>

		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "App",
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: black;
	background-color: #ddc8c4;
	height: 100vh;
	display: flex;
	flex-direction: column;
}
nav.navbar {
	background-color: #6b4d57;
	display: flex;
	justify-content: space-between;
}
#nav-collapse {
	flex-grow: 0;
}
a {
	color: black;
	margin: 5px;
}
a:visited {
	color: black;
}
a.link:hover {
	color: white;
}
img {
	height: 50px;
	width: auto;
}
</style>

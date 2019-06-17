<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div id='map' style='height:100%;width:100%;position: relative;'></div>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		msg: String
	},
	mounted () {
		mapboxgl.accessToken = 'pk.eyJ1IjoiYWlyZGFyayIsImEiOiJjandzbHl0Zm8wZTM2M3pzN21zeDAyNGNuIn0.Ffa9cIwXqBqZNfsXQcgvGg';
		var map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v9'
		})
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	height: 500px;
	width: 500px;
}
</style>
<style>
.mapboxgl-canvas{
	left: 0!important;
}
</style>
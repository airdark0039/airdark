<template>
	<div class="mapDemo">
		<div id='map' style='height:100%;width:100%;position: relative;'></div>
	</div>
</template>

<script>
export default {
	name: "mapDemo",
	mounted () {
		STYLE.layers.unshift(layerVec);
		STYLE.layers.unshift(layerTer); //地形
		STYLE.layers.unshift(layerImg); //影像
		var map = new mapboxgl.Map({
			container: 'map',
			style: STYLE,
			minZoom: 3,
			maxZoom: 16,
			zoom: 6,
			center: [110.46, 37.92],
		})
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mapDemo{
	height: 500px;
	width: 100%;
}
</style>
<style>
.mapboxgl-canvas{
	left: 0!important;
}
</style>
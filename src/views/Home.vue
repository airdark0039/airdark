<template>
	<div class="home">
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<mapDemo></mapDemo>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import mapDemo from '@/components/mapDemo.vue'

export default {
	name: 'home',
	components: {
		mapDemo
	}
}
</script>

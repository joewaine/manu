<script>
import HeaderModule from './components/HeaderModule'
import UniversalFooter from './components/UniversalFooter'


import Home from './views/Home'
import Page1 from './views/Page1'


export default {
				name: 'app',
				components: {
								HeaderModule,
								UniversalFooter,
								Home,
								Page1
				}
}

</script>
<style lang="scss">
@import "./styles/main";

</style>
<template>
				<div id="app">
		<HeaderModule />
<router-view class="view"></router-view>


									

				</div>
</template>
<style lang="scss">
#app {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
}

</style>

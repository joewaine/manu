<script>
import HeaderModule from './components/HeaderModule'
import UniversalFooter from './components/UniversalFooter'




import ShareSlider from './components/ShareSlider'
import DownloadSlider from './components/DownloadSlider'
import FeedbackSlider from './components/FeedbackSlider'


import Home from './views/Home'
import Page1 from './views/Page1'


export default {
				name: 'app',
				components: {
								HeaderModule,
								UniversalFooter,
								Home,
								Page1,
								DownloadSlider,
								FeedbackSlider,
								ShareSlider


				}
}

</script>
<style lang="scss">
@import "./styles/main";

</style>
<template>
				<div id="app">
		<HeaderModule />



<DownloadSlider />
<FeedbackSlider />
<ShareSlider />

<router-view class="view"></router-view>


									

				</div>
</template>
<style lang="scss">
#app {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
}

</style>

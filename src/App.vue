<script>
// import HeaderModule from "./components/HeaderModule";
import AccessModule from "./components/AccessModule";
import ShareSlider from "./components/ShareSlider";
import DownloadSlider from "./components/DownloadSlider";
import FeedbackSlider from "./components/FeedbackSlider";

export default {
	name: "app",
	components: {
		// HeaderModule,
		DownloadSlider,
		FeedbackSlider,
		ShareSlider,
		AccessModule
	}
};
</script>
<style lang="scss">
@import "./styles/main";
</style>
<template>
	<div id="app">
		<AccessModule />
		<!-- <HeaderModule /> -->
		<DownloadSlider />
		<ShareSlider />
		<FeedbackSlider />

		<router-view class="view"></router-view>
	</div>
</template>
<style lang="scss">
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>

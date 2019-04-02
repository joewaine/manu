<template>
								<div class="col-lg-12 drop-shadow-box no-pad flexbox-container mb-30 list-row">
												<div  v-bind:class="this._props.backgroundImage">





												</div>
												<div class="pad-40">
																<h4>{{this._props.Subheader1 }}</h4>
																<p v-html="this._props.BodyText1">

																</p>
																<h4>{{this._props.Subheader2 }}</h4>
																<p v-html="this._props.BodyText2">

																</p>
																<h4>{{this._props.Subheader3 }}</h4>
																<p v-html="this._props.BodyText3">

																</p>
												</div>
								</div>
</template>
<script>
export default {
props: ['backgroundImage','Subheader1','BodyText1','Subheader2','BodyText2','Subheader3','BodyText3']

}

</script>

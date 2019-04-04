<template>		
<div>
	<section id="access-module" class="access-module">

		<div class="container">
			<div class="row relative text-center">
				

<div class="turquiose-text pt-100 full-width-100">
																																How five organizations are transforming field service
																															


<div class="modal-wayfinder-box" style="">
	

 

<div class="pent-tag tag-1"><router-link class="pent-tag-modal" href="#/page1" @mouseover="hoverSibling(1)" @mouseleave="unHoverSibling(1)" v-on:click="closeModal();scrollTop();" id="url:page-1-page">Remote monitoring and predictive maintenace</router-link></div>
<div class="pent-tag tag-2"><router-link class="pent-tag-modal" href="#/page2" @mouseover="hoverSibling(2)" @mouseleave="unHoverSibling(2)" v-on:click="closeModal();scrollTop();" id="url:page-2-page">Service alerts</router-link></div>
<div class="pent-tag tag-3"><router-link class="pent-tag-modal" href="#/page3" @mouseover="hoverSibling(3)" @mouseleave="unHoverSibling(3)" v-on:click="closeModal();scrollTop();" id="url:page-3-page">Technician dispatching</router-link></div>
<div class="pent-tag tag-4"><router-link class="pent-tag-modal" href="#/page4" @mouseover="hoverSibling(4)" @mouseleave="unHoverSibling(4)" v-on:click="closeModal();scrollTop();" id="url:page-4-page">Field enablement</router-link></div>
<div class="pent-tag tag-5"><router-link class="pent-tag-modal" href="#/page5" @mouseover="hoverSibling(5)" @mouseleave="unHoverSibling(5)" v-on:click="closeModal();scrollTop();" id="url:page-5-page">Global visibility</router-link></div>



		<WayFinder data-aos="fade-down" data-aos-delay="200" v-bind:pageTitle="0" />

</div>



																															</div>




<div v-on:click="closeModal()" class="close-modal">
	

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 34.58 34.58" style="enable-background:new 0 0 34.58 34.58;" xml:space="preserve">
	<g>
		<g>
	<polygon class="st7 close" points="34.58,1.93 32.65,0 17.29,15.36 1.93,0 0,1.93 15.36,17.29 0,32.65 1.93,34.58 17.29,19.22 
			32.65,34.58 34.58,32.65 19.22,17.29"/>
	</g>
</g>
</svg>


</div>

			</div>
		</div>

</section>
</div>
</template>

<script>


import WayFinder from '../components/Wayfinder'



	export default{

		components: {
			WayFinder
		},
		methods: {
				closeModal(){
					document.getElementById('access-module').style.display = "none";

				},
				scrollTop(){
					window.scrollTo(0, 0);
				},
				hoverSibling(i){
				var links = document.getElementsByClassName('hover-wedges');
				links[i-1].style.fill = "#888888";
console.log('mouse enter')



				var tags = document.getElementsByClassName('pent-tag-modal');
				tags[i-1].style.color = "#4ae7fc";







				},
				unHoverSibling(x){


				var links2 = document.getElementsByClassName('hover-wedges');
				links2[x-1].style.fill = "#0078D4"
console.log('mouse leave')


				var tags2 = document.getElementsByClassName('pent-tag-modal');
				tags2[x-1].style.color = "#fff";




				},
				


		}

	}
</script>
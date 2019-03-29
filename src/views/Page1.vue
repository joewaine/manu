<template>
				<div>
								<section class="section-pad-sm bg-light-grey">
												<div class="container">
	


<SecondHeroModule v-bind:link="'dsa'" v-bind:icon="'1'" v-bind:phase="1" v-bind:header="'Remote monitoring and predictive maintenance'" v-bind:subheader="'View product usage, issues, and repair history from a central portal to diagnose problems and deliver predictive maintenance.'" />



																<div class="row">

<IconRow v-bind:logo="'1'" v-bind:subheader="'Case Study'" v-bind:bodyText="'ThyssenKrupp, the global elevator manufacturing company, wanted to better compete in their industry by boosting their preventive maintenance capabilities to greater heights and offering dramatically increased uptime.'" />



<ListRow v-bind:backgroundImage="'bg-white-paper'"
v-bind:Subheader1="'1'"
v-bind:BodyText1="'<ul><li>sadc</li><li>sadc</li><li>sadc</li><li>sadc</li></ul>'"
v-bind:Subheader2="'2'"
v-bind:BodyText2="'<ul><li>sadc</li><li>sadc</li><li>sadc</li><li>sadc</li></ul>'"
v-bind:Subheader3="'3'"
v-bind:BodyText3="'<ul><li>sadc</li><li>sadc</li><li>sadc</li><li>sadc</li></ul>'"/>



<QuoteRow
v-bind:quoteText="'ThyssenKrupp, the global elevator manufacturing company, wanted to better compete in their industry by boosting their preventive maintenance capabilities.'"
v-bind:quoteAuthor="'Nigella Lawson'"
v-bind:quoteTitle="'CEO and Corporate Director'"
v-bind:quoteOrg="'The Travel Channel'"
v-bind:ctaIcon="'1'"
v-bind:ctaText="'Read the case study'"
v-bind:ctaLink="'ctaLink!'"
 />
																
																				




																</div>
												</div>
								</section>

<FooterModule v-bind:download-ctas="false" v-bind:link="'page2'" v-bind:linkText="'Service alerts'" />
				</div>
</template>
<script>
import UniversalFooter from '../components/UniversalFooter'
import HeaderModule from '../components/HeaderModule'
import FooterModule from '../components/FooterModule'
import WayFinder from '../components/Wayfinder'


import SecondHeroModule from '../components/SecondHeroModule'
import IconRow from '../components/IconRow'
import ListRow from '../components/ListRow'
import QuoteRow from '../components/QuoteRow'

export default {
				data() {

								return {
												pageTitle: 1
								}

				},
				components: {

								UniversalFooter,
								HeaderModule,
								FooterModule,
								WayFinder,
								SecondHeroModule,
								IconRow,
								ListRow,
								QuoteRow

				},
				methods: {
								scrollToZero: function() {
												window.scrollTo(0, 0);
				}

				}
}

</script>

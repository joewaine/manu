<template>
				<div>
								<section class="section-pad-sm bg-light-grey">
												<div class="container">



<SecondHeroModule v-bind:link="'dsa'" v-bind:icon="'4'" v-bind:phase="4" v-bind:header="'Field enablement'" v-bind:subheader="'Empower service technicians with complete customer insight, real-time guidance, and cross-team collaboration.'" />

																<div class="row">
														
																		
<IconRow v-bind:logo="'4'" v-bind:subheader="'Case Study'" v-bind:bodyText="'ThyssenKrupp, the global elevator manufacturing company, wanted to better compete in their industry by boosting their preventive maintenance capabilities to greater heights and offering dramatically increased uptime.'" />
<ListRow v-bind:backgroundImage="'bg-white-paper'" v-bind:Subheader1="'1'" v-bind:BodyText1="'one'" v-bind:Subheader2="'2'" v-bind:BodyText2="'two'" v-bind:Subheader3="'3'" v-bind:BodyText3="'three'"/>
<QuoteRow
v-bind:quoteText="'ThyssenKrupp, the global elevator manufacturing company, wanted to better compete in their industry by boosting their preventive maintenance capabilities.'"
v-bind:quoteAuthor="'Nigella Lawson'"
v-bind:quoteTitle="'CEO and Corporate Director'"
v-bind:quoteOrg="'The Travel Channel'"
v-bind:ctaIcon="'4'"
v-bind:ctaText="'Read the case study'"
v-bind:ctaLink="'ctaLink!'"
 />
																</div>
												</div>
								</section>
<FooterModule  v-bind:link="'page5'" v-bind:linkText="'Global visibility'" />
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

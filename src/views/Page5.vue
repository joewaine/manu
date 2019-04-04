<template>
				<div>
								<section class="section-pad-sm bg-light-grey">
																						<div class="container no-lr-pad-mob">



<SecondHeroModule v-bind:link="'dsa'" v-bind:icon="'5'" v-bind:phase="5" v-bind:header="'Global visibility'" v-bind:subheader="'Equip technicians with sales data so they can take advantage of cross-selling and upselling opportunities, making data-driven recommendations based on their customers usage and demonstrated needs.'" />

																<div class="row">
														
																		
<IconRow v-bind:logo="'5'" v-bind:subheader="'Case Study'" v-bind:bodyText="'Sandvik Coromant, part of the Sandvik Group, is a global engineering organization that produces machining tools and tooling systems for the manufacturing industry. Sandvik Coromant’s employees have years of in-depth knowledge of machining and tooling processes in multiple industries. These proficiencies enable Coromant’s specialists to offer a personalized approach to help their customers. However, these technical experts can’t be everywhere all the time. Therefore, Sandvik Coromant decided to digitize their knowledge to make the information available to all parts of the production loop. Plus, by applying analysis tools, they were able to provide intelligent feedback—both to the relevant machines and their human operators.'" />
																				
<ListRow v-bind:backgroundImage="'bg-gradient'" v-bind:Subheader1="'Process'" v-bind:BodyText1="'The predictive analytics manufacturing solution includes an in-house shop floor control tool that collects machining and tool data. It then sends the data to Microsoft Azure for real-time analysis using machine learning algorithms from Cortana Intelligence. Machining data is also collected from sensorized cutting tools through Azure IoT. With the help of Azure Machine Learning and Streaming Analytics, Sandvik Coromant added embedded intelligence to these tools to capture data that can be used to automatically adjust equipment, notify technicians when maintenance is needed, and alert plant managers of a potential failure.'" v-bind:Subheader2="'Results'" v-bind:BodyText2="'<ul><li><span>Reduced the time needed to make emergency shutdown decisions from two seconds to 100 milliseconds</span></li><li><span>Provided instant feedback to customers to improve efficiencies</span></li><li><span>Delivered cost savings of millions of dollars</span></li></ul>'" v-bind:Subheader3="'Related products:'" v-bind:BodyText3="'<ul><li><span>Microsoft Azure IoT Hub</span></li><li><span>Microsoft Azure IoT solution accelerators</span></li><li><span>Cortana Intelligence Suite</span></li><li><span>Microsoft Dynamics 365 for Field Service</span></li></ul>'"/>

<QuoteRow
v-bind:quoteText="'We are looking to convert the knowledge our people have in their heads into a digital format and apply machine learning tools that can look at the data, optimize it, and adjust configurations to optimize production. It will not replace the operator, but will give the operator another tool to improve production.'"
v-bind:quoteAuthor="'Nevzat Ertan'"
v-bind:quoteTitle="'Chief Enterprise Architect and Senior Manager,'"
v-bind:quoteOrg="'Sandvik Coromant'"
v-bind:ctaIcon="'5'"
v-bind:ctaText="'Read the case study'"
v-bind:ctaLink="'ctaLink!'"
 />
																</div>
												</div>
								</section>
<FooterModule v-bind:download-ctas="true" v-bind:link="'/'" v-bind:linkText="'Return to home'" />
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

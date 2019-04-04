<template>
	<div>
		<section class="section-pad-sm bg-light-grey">
			<div class="container no-lr-pad-mob">
				<SecondHeroModule
					v-bind:link="'dsa'"
					v-bind:icon="'2'"
					v-bind:phase="2"
					v-bind:header="'Service alerts'"
					v-bind:subheader="
						'Get instant notifications and alerts about device health to automate the service request generation process using predefined rules'
					"
				/>

				<div class="row">
					<IconRow
						v-bind:logo="'2'"
						v-bind:subheader="'Case Study'"
						v-bind:bodyText="
							'Ecolab—a leading global provider of water, hygiene, and energy technologies and services—is helping companies worldwide operate more sustainably.'
						"
					/>

					<ListRow
						v-bind:backgroundImage="'bg-water-treatment'"
						v-bind:Subheader1="'Process'"
						v-bind:BodyText1="
							'Inside production facilities, equipment based on Ecolab’s Nalco 3D TRASARTM Technology sends data to a highly secure analytics and storage platform on Microsoft Azure. The technology monitors and controls streams for water-intensive processes, and collects and analyzes water usage data in real time.By connecting to thousands of sensors in facilities worldwide, their platform improves efficiency and reduces water, energy, and operational costs.'
						"
						v-bind:Subheader2="'Results'"
						v-bind:BodyText2="
							'<ul><li><span>Delivered real-time sensing data from over 36,000 water systems.</span></li><li><span>Scaled delivery of water management solutions</span></li><li><span>Established operational benchmarks from millions of data points</span></li></ul>'
						"
						v-bind:Subheader3="'Related products:'"
						v-bind:BodyText3="
							'<ul><li><span>Microsoft Azure IoT Hub</span></li><li><span>Microsoft Azure IoT solution accelerators</span></li><li><span>Microsoft Azure Machine Learning</span></li><li><span>Microsoft Dynamics 365 for Field Service</span></li><li><span>Microsoft Dynamics 365 for Sales</span></li><li><span>Microsoft Power BI</span></li></ul>'
						"
					/>

					<QuoteRow
						v-bind:quoteText="
							'We need to collect and analyze massive amounts of information. Now, we can identify opportunities and gaps, provide the right solutions and, most importantly, manage our customers’ process so that they can get closer to net-zero water usage.'
						"
						v-bind:quoteAuthor="'Christophe Beck'"
						v-bind:quoteTitle="
							'Executive Vice President and President,'
						"
						v-bind:quoteOrg="'Nalco Water, an Ecolab company'"
						v-bind:ctaIcon="'2'"
						v-bind:ctaText="'Read the case study'"
						v-bind:ctaLink="
							'https://customers.microsoft.com/en-us/story/ecolabcustomerstory'
						"
					/>
				</div>
			</div>
		</section>
		<FooterModule
			v-bind:link="'page3'"
			v-bind:linkText="'Technician dispatching'"
		/>
		<!-- <UniversalFooter /> -->
	</div>
</template>
<script>
import UniversalFooter from "../components/UniversalFooter";
import HeaderModule from "../components/HeaderModule";
import FooterModule from "../components/FooterModule";
import WayFinder from "../components/Wayfinder";
import SecondHeroModule from "../components/SecondHeroModule";
import IconRow from "../components/IconRow";
import ListRow from "../components/ListRow";
import QuoteRow from "../components/QuoteRow";

export default {
	data() {
		return {
			pageTitle: 1
		};
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
};
</script>

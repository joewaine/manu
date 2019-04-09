<template>
	<div>
		<section class="section-pad-sm bg-light-grey">
			<div class="container no-lr-pad-mob">
				<SecondHeroModule
					v-bind:link="'dsa'"
					v-bind:icon="'1'"
					v-bind:phase="1"
					v-bind:header="
						'Remote monitoring and predictive maintenance'
					"
					v-bind:subheader="
						'View product usage, issues, and repair history from a central portal to diagnose problems and deliver predictive maintenance.'
					"
				/>
				<div class="row">
					<IconRow
						v-bind:logo="'1'"
						v-bind:subheader="'Customer Success Story'"
						v-bind:bodyText="
							'ThyssenKrupp, the global elevator manufacturing company, wanted to better compete in their industry by boosting their preventive maintenance capabilities to greater heights and offering dramatically increased uptime.'
						"
					/>

					<ListRow
						v-bind:backgroundImage="'bg-holo-vision'"
						v-bind:Subheader1="'Process'"
						v-bind:BodyText1="
							'<ul><li><span>Reduced Costs</span></li><li><span>Increased elevator uptime</span></li><li><span>Developed real-time data visualization and awareness of issues</span></li></ul>'
						"
						v-bind:Subheader2="'Results'"
						v-bind:BodyText2="
							'<ul><li><span>Reduced Costs</span></li><li><span>Increased elevator uptime</span></li><li><span>Developed real-time data visualization and awareness of issues</span></li></ul>'
						"
						v-bind:Subheader3="'Related products:'"
						v-bind:BodyText3="
							'<ul><li><span>Microsoft Azure IoT Suite</span></li><li><span>Microsoft Azure</span></li><li><span>Microsoft Power BI</span></li><li><span>Windows Server</span></li></ul>'
						"
					/>

					<QuoteRow
						v-bind:quoteText="
							'We wanted to go beyond the industry standard of preventative maintenance, to offer predictive and even preemptive maintenance.'
						"
						v-bind:quoteAuthor="'Andreas Schierenbeck'"
						v-bind:quoteTitle="'CEO, ThyssenKrupp Elevator'"
						v-bind:quoteOrg="''"
						v-bind:ctaIcon="'1'"
						v-bind:ctaText="'Read the customer success story'"
						v-bind:ctaLink="
							'https://news.microsoft.com/transform/quicker-fixes-hands-free-when-thyssenkrupp-elevators-service-technicians-use-microsoft-hololens/'
						"
					/>
				</div>
			</div>
		</section>

		<FooterModule
			v-bind:download-ctas="false"
			v-bind:link="'page2'"
			v-bind:linkText="'Service alerts'"
		/>
	</div>
</template>
<script>
import FooterModule from "../components/FooterModule";
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
		FooterModule,
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

<template>
	<div>
		<section class="section-pad-sm bg-light-grey">
			<div class="container no-lr-pad-mob">
				<SecondHeroModule
					v-bind:link="'dsa'"
					v-bind:icon="'3'"
					v-bind:phase="3"
					v-bind:header="'Technician dispatching'"
					v-bind:subheader="
						'Dispatch technicians using optimized routes and skills-based assignments and resources.'
					"
				/>

				<div class="row">
					<IconRow
						v-bind:logo="'3'"
						v-bind:subheader="'Case Study'"
						v-bind:bodyText="
							'Michelin extends their premium customer service model to a seamless, on-site customer experience with Michelin OnSite, where they send technicians into the field to perform installations and repairs for customers.'
						"
					/>

					<ListRow
						v-bind:backgroundImage="'bg-michelin'"
						v-bind:Subheader1="'Process'"
						v-bind:BodyText1="
							'Using a CRM customer records system, Michelin schedules availability for their technicians and customer inventory. A self-service customer portal allows customers to choose their tires and an appointment time online, creating an automated process to go from the customer to the technician. Customer records and product information enables technicians to meet customer needs and solve any problems that arise.'
						"
						v-bind:Subheader2="'Results'"
						v-bind:BodyText2="
							'<ul><li><span>Created a seamless, automated customer experience from purchase to installation</span></li><li><span>Gained greater visibility into inventory and purchase patterns</span></li><li><span>Delivered real-time understanding of product availability</span></li></ul>'
						"
						v-bind:Subheader3="'Related Products:'"
						v-bind:BodyText3="
							'<ul><li><span>Microsoft Dynamics 365 for Field Service</span></li></ul>'
						"
					/>

					<QuoteRow
						v-bind:quoteText="
							'As we continue to grow and build, the Microsoft platform is going to help us manage the routing and schedule and keep us on top of the customer expectations—that’s critical to our business.'
						"
						v-bind:quoteAuthor="'Kevin Doyle'"
						v-bind:quoteTitle="'Initiative Leader, Michelin OnSite'"
						v-bind:quoteOrg="''"
						v-bind:ctaIcon="'3'"
						v-bind:ctaText="'Watch the video'"
						v-bind:ctaLink="
							'https://www.youtube.com/watch?v=_vJS2Knz-cQ'
						"
					/>
				</div>
			</div>
		</section>
		<FooterModule
			v-bind:link="'page4'"
			v-bind:linkText="'Field enablement'"
		/>
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

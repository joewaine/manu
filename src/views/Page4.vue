<template>
	<div>
		<section class="section-pad-sm bg-light-grey">
			<div class="container no-lr-pad-mob">
				<SecondHeroModule
					v-bind:link="'dsa'"
					v-bind:icon="'4'"
					v-bind:phase="4"
					v-bind:header="'Field enablement'"
					v-bind:subheader="
						'Empower service technicians with complete customer insight, real-time guidance, and cross-team collaboration.'
					"
				/>

				<div class="row">
					<IconRow
						v-bind:logo="'4'"
						v-bind:subheader="'Customer Success Story'"
						v-bind:bodyText="
							'Tetra Pak, a packaging company in the food industry, is employing digital tools that enable its cloud-connected machines to predict exactly when equipment needs maintenance. When repairs are needed, Tetra Pak service engineers use Microsoft HoloLens headsets to more quickly diagnose and fix machine issues, even in remote locations.'
						"
					/>

					<ListRow
						v-bind:backgroundImage="'bg-holo'"
						v-bind:Subheader1="'Process'"
						v-bind:BodyText1="
							'To streamline machine diagnostics and repair for customers, Tetra Pak service engineers use HoloLens devices. Service engineers can make a Skype call to a Tetra Pak service center and speak to an expert with deeper knowledge of a specific machine. The expert remotely guides the engineer through a repair, reducing the time needed to fix the problem. This solution also cuts the repair costs by removing the need to dispatch another service engineer to assist.'
						"
						v-bind:Subheader2="'Results'"
						v-bind:BodyText2="
							'<ul><li><span>Analyzed data patterns from more than 5,000 packaging lines to predict maintenance timing</span></li><li><span>Saved customers more than $30,000 by predicting and preventing future breakdowns</span></li><li><span>Cut fix times by enabling remote guidance via MR headsets</span></li></ul>'
						"
						v-bind:Subheader3="'Related products:'"
						v-bind:BodyText3="
							'<ul><li><span>Microsoft Hololens</span></li></ul>'
						"
					/>

					<QuoteRow
						v-bind:quoteText="
							'This is how we take the global expertise that we have available somewhere in Tetra Pak and bring it to the fingertips of the engineer in the countryside in Chile or Pakistan.'
						"
						v-bind:quoteAuthor="'Johan Nilsson'"
						v-bind:quoteTitle="'Vice President, Tetra Pak Services'"
						v-bind:quoteOrg="''"
						v-bind:ctaIcon="'4'"
						v-bind:ctaText="'Read the customer success story'"
						v-bind:ctaLink="
							'https://news.microsoft.com/transform/total-package-tetra-paks-technology-keeps-food-drink-flowing-safely-from-farm-table/'
						"
					/>
				</div>
			</div>
		</section>
		<FooterModule
			v-bind:link="'page5'"
			v-bind:linkText="'Global visibility'"
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

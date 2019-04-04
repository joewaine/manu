<template>
	<div
		data-aos="fade-up"
		class="col-lg-12 drop-shadow-box no-pad flexbox-container mb-30"
	>
		<div class="bg-light-blue text-center">
			<!-- <h3> {{this._props.logo }}</h3> -->

			<div class="icon-box-logo">
				<div v-if="this._props.logo === '1'">
					<PartnerIcon1 />
				</div>
				<div v-else-if="this._props.logo === '2'">
					<PartnerIcon2 />
				</div>
				<div v-else-if="this._props.logo === '3'">
					<PartnerIcon3 />
				</div>
				<div v-else-if="this._props.logo === '4'">
					<div class="smaller-icon-height">
						<PartnerIcon4 />
					</div>
				</div>
				<div v-else>
					<PartnerIcon5 />
				</div>
			</div>
		</div>
		<div class="pad-40">
			<h4>{{ this._props.subheader }}</h4>
			<p v-html="this._props.bodyText"></p>
		</div>
	</div>
</template>
<script>
import PartnerIcon1 from "../components/partnericons/PartnerIcon1";
import PartnerIcon2 from "../components/partnericons/PartnerIcon2";
import PartnerIcon3 from "../components/partnericons/PartnerIcon3";
import PartnerIcon4 from "../components/partnericons/PartnerIcon4";
import PartnerIcon5 from "../components/partnericons/PartnerIcon5";

export default {
	components: {
		PartnerIcon1,
		PartnerIcon2,
		PartnerIcon3,
		PartnerIcon4,
		PartnerIcon5
	},
	props: ["logo", "subheader", "bodyText"]
};
</script>

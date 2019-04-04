<template>
	<div data-aos="fade-up">
		<WayFinder v-bind:pageTitle="this._props.phase" />
		<div class="row full-width-head">
			<div class="col-lg-12 mb-30 no-pad-row">
				<router-link
					to="/"
					class="grey-link-md router-link-active"
					id="url:home"
				>
					<svg
						class="rotate180"
						width="15"
						height="15"
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						x="0px"
						y="0px"
						viewBox="0 0 9.89 16.55"
						xml:space="preserve"
					>
						<g>
							<g>
								<g>
									<g>
										<polygon
											points="1.62,16.55 0,14.94 6.64,8.28 0,1.62 1.62,0 9.89,8.28"
											class="st0-chevron-grey"
										></polygon>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<span class="txt">Home</span></router-link
				>
				<div class="icon-box">
					<div v-if="this._props.icon === '1'">
						<IconPhase1 />
					</div>
					<div v-else-if="this._props.icon === '2'">
						<IconPhase2 />
					</div>
					<div v-else-if="this._props.icon === '3'">
						<IconPhase3 />
					</div>
					<div v-else-if="this._props.icon === '4'">
						<IconPhase4 />
					</div>
					<div v-else>
						<IconPhase5 />
					</div>
				</div>
				<h2>
					{{ this._props.header }}
				</h2>
				<p class="mb-30 half-width-sub-header">
					{{ this._props.subheader }}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import WayFinder from "../components/Wayfinder";

import IconPhase1 from "../components/icons/IconPhase1";
import IconPhase2 from "../components/icons/IconPhase2";
import IconPhase3 from "../components/icons/IconPhase3";
import IconPhase4 from "../components/icons/IconPhase4";
import IconPhase5 from "../components/icons/IconPhase5";

export default {
	props: ["link", "icon", "phase", "header", "subheader"],
	methods: {},
	components: {
		WayFinder,
		IconPhase1,
		IconPhase2,
		IconPhase3,
		IconPhase4,
		IconPhase5
	}
};
</script>

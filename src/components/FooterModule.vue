<template>
	<div>
		<section class="bg-light-blue section-pad-md">
			<div class="container">
				<div v-if="downloadCtas" class="row footer-text-row">
					<h3 class="white-text mb-30">
						Download the free e-book to see how Connected Field
						Service is helping manufacturers transform and build
						their business.
					</h3>
				</div>
				<div v-if="downloadCtas" class="row mb-40 footer-text-row">
					<a
						id="url:visit-microsoft-cfs"
						href="https://www.microsoft.com/en-us/enterprise/manufacturing/connected-field-services?rtc=1&activetab=pillars:primaryr4"
						target="_blank"
						class="btn dark-btn white-txt mr-20"
						>Learn more about Microsoft Connected Field Service</a
					>
					<a
						id="url:external-watch-videos-now"
						href="https://info.microsoft.com/ww-landing-Connected-Field-Service-for-Manufacturing-eBook.html?lcid=en-us"
						target="_blank"
						class="btn"
						>Download the e-book</a
					>
				</div>
				<div class="row relative footer-text-row">
					<div v-if="!downloadCtas" class="white-text next mb-30">
						Next
					</div>
				</div>
				<div class="row relative footer-text-row bottom-nav-link">
					<router-link
						:to="{ path: this._props.link }"
						@click.native="scrollToZero"
						class="underline-link"
						><span class="txt">{{ this._props.linkText }}</span>
						<span class="right-chevron">
							<svg
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
													class="st0-chevron"
												></polygon>
											</g>
										</g>
									</g>
								</g>
							</svg> </span
					></router-link>
					<a
						id="navigation:in-page-scroll-to-top"
						class="moveToTop"
						@click="scrollToTop(600)"
						>return to top
						<svg
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 32 32"
							style="enable-background:new 0 0 32 32;"
							xml:space="preserve"
						>
							<symbol
								id="Arrow-Circle-Up"
								viewBox="-16 -16 32 32"
							>
								<path
									class="st0"
									d="M-15.98,0.75c-0.41-8.83,6.41-16.32,15.24-16.73S15.57-9.57,15.98-0.75S9.57,15.57,0.75,15.98
		C-8.08,16.39-15.57,9.57-15.98,0.75z M8.57,0.99L7.16-0.43L0.7,6.03L0.74-9.85l-2.01,0l0.01,15.9l-6.4-6.4l-1.41,1.41l8.78,8.78
		L8.57,0.99z"
								/>
							</symbol>
							<use
								xlink:href="#Arrow-Circle-Up"
								width="32"
								height="32"
								id="XMLID_1_"
								x="-16"
								y="-16"
								transform="matrix(1 0 0 -1 16.0003 16.0003)"
								style="overflow:visible;"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
<!-- 		<div class="uhf-placeholder">
			<br /><br /><br />
			[placeholder footer]
		</div> -->
	</div>
</template>
<script>
export default {
	props: ["link", "linkText", "download-ctas"],
	methods: {
		scrollToTop(scrollDuration) {
			const scrollHeight = window.scrollY,
				scrollStep = Math.PI / (scrollDuration / 15),
				cosParameter = scrollHeight / 2;
			var scrollCount = 0,
				scrollMargin,
				scrollInterval = setInterval(function() {
					if (window.scrollY != 0) {
						scrollCount = scrollCount + 1;
						scrollMargin =
							cosParameter -
							cosParameter * Math.cos(scrollCount * scrollStep);
						window.scrollTo(0, scrollHeight - scrollMargin);
					} else clearInterval(scrollInterval);
				}, 15);
		},

		scrollToZero: function() {
			window.scrollTo(0, 0);
		}
	}
};
</script>

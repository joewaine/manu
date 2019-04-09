<template>
	<div
		:class="{
			'share-slider': true,
			active: this.active,
			show: this.revealed
		}"
	>
		<section class="share-slider__content">
			<div
				title="Share"
				class="share-slider__content__icon"
				@click="toggleClass"
			>
				<svg id="share"
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>


    <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
            <g id="Nav_Bars" data-name="Nav Bars">
                <path class="cls-1" d="M0,19.18,3.2,9.59,0,0,28.76,9.59ZM4.8,8.68H20.32L2.86,2.86ZM2.86,16.32,20.32,10.5H4.8Z" />
            </g>
        </g>
    </g>

<!-- 					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M16.9939 6.54666L7.45714 12.6952L6.37341 11.0142L15.9101 4.86572L16.9939 6.54666Z"
						fill="#FFFFFF"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7.44031 15.1174L16.977 21.0005L15.927 22.7027L6.39026 16.8196L7.44031 15.1174Z"
						fill="#FFFFFF"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M4.79099 11.2622C3.42572 11.2622 2.35596 12.3398 2.35596 13.624C2.35596 14.9081 3.42572 15.9857 4.79099 15.9857C6.15625 15.9857 7.22601 14.9081 7.22601 13.624C7.22601 12.3398 6.15625 11.2622 4.79099 11.2622ZM0.355957 13.624C0.355957 11.1948 2.36202 9.26221 4.79099 9.26221C7.21995 9.26221 9.22602 11.1948 9.22602 13.624C9.22602 16.0531 7.21995 17.9857 4.79099 17.9857C2.36202 17.9857 0.355957 16.0531 0.355957 13.624Z"
						fill="#FFFFFF"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M19.2091 20.9495C17.8438 20.9495 16.774 22.0271 16.774 23.3112C16.774 24.5954 17.8438 25.673 19.2091 25.673C20.5743 25.673 21.6441 24.5954 21.6441 23.3112C21.6441 22.0271 20.5743 20.9495 19.2091 20.9495ZM14.774 23.3112C14.774 20.8821 16.7801 18.9495 19.2091 18.9495C21.638 18.9495 23.6441 20.8821 23.6441 23.3112C23.6441 25.7404 21.638 27.673 19.2091 27.673C16.7801 27.673 14.774 25.7404 14.774 23.3112Z"
						fill="#FFFFFF"
					></path>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M18.983 2.3269C17.6177 2.3269 16.548 3.40452 16.548 4.68867C16.548 5.97283 17.6177 7.05044 18.983 7.05044C20.3483 7.05044 21.418 5.97283 21.418 4.68867C21.418 3.40452 20.3483 2.3269 18.983 2.3269ZM14.548 4.68867C14.548 2.25952 16.554 0.326904 18.983 0.326904C21.412 0.326904 23.418 2.25952 23.418 4.68867C23.418 7.11783 21.412 9.05044 18.983 9.05044C16.554 9.05044 14.548 7.11783 14.548 4.68867Z"
						fill="#FFFFFF"
					></path> -->
				</svg>
			</div>
			<div class="share-slider__content__text">
				<a
				title="Send Mail"
				data-bi-area="fixed-side-slider-module"
				data-bi-bhvr="SOCIALSHARE"
				data-bi-socchn="email-share​"
				id="social-share-email"
				href="mailto:?subject=Digitally Transform You Field Service&body=Check out Connected Field Services: https%3A%2F%2Fdiscover.microsoft.com%2Fdigitally-transform-your-field-service" @click="toggleClass">

					<svg
						fill="#3c3c41"
						width="29"
						height="19"
						viewBox="0 0 29 19"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M15.0182 10.1771L2 2.36619V17H27V2.47452L15.0182 10.1771ZM29 19H0V0H29V19ZM24.0396 2H5.27698L14.9818 7.82289L24.0396 2Z"
						></path>
					</svg>
				</a>
				<a
					title="Copy Link"
					id="cta:copy-link-to-clipboard"
					@click="copyUrl"
				>
					<svg
						id="copySvg"
						width="25"
						height="23"
						viewBox="0 0 25 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							:class="{ 'make-light-blue': copied }"
							class="share-slider__content__text__copy-svg-path"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M16 15V2H2V15H16ZM0 0V17H18V0H0Z"
							fill="#FFFFFF"
						></path>
						<path
							:class="{ 'make-light-blue': copied }"
							class="share-slider__content__text__copy-svg-path"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M23 8H9V21H23V8ZM7 6V23H25V6H7Z"
							fill="#FFFFFF"
						></path>
					</svg>
				</a>
			</div>
		</section>
	</div>
</template>
<script>
import copy from "clipboard-copy";
export default {
	name: "share-slider",
	props: [],
	data() {
		return {
			active: false,
			copied: false,
			revealed: false
		};
	},
	mounted() {
		// var vm = this
		window.addEventListener("scroll", () => {
			var scrollPos = window.pageYOffset;
			var docHeight = document.documentElement.scrollHeight;
			var winHeight = 0;
			var perc = (100 * scrollPos) / (docHeight - winHeight);
			var isShown = false;
			if (perc >= 5) {
				isShown = true;
			} else {
				isShown = false;
				this.active = false;
			}
			this.isRevealed(isShown);
		});
	},
	methods: {
		toggleClass() {
			this.active = !this.active;
		},
		isRevealed(isShown) {
			this.revealed = isShown;
		},
		copyUrl() {
			let copyText = "linkHEREURLWW.HO";
			copy(copyText)
				.then(() => {
					this.copied = true;
				})
				.then(() => {
					setTimeout(() => {
						this.copied = false;
						setTimeout(() => {
							this.toggleClass();
						}, 500);
					}, 500);
				});
		}
	}
};
</script>
<style scoped lang="scss">
.share-slider {
	position: fixed;
	right: -225px;
	// top: 30%;

	// bottom: calc(30% - 110px);


		bottom: calc(30% - 50px);
	width: 225px !important;
	height: 50px;
	border: none;
	padding: 0;
	transition-duration: 0.4s;

	background-color: rgba(255, 255, 255, 0.8);
	z-index: 100000;

	// transform: translateX(50%);
	&__content {
		height: 100%;
		width: 100%;
		margin: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: space-around;
		align-items: center;

		&__icon {
			background-repeat: no-repeat;
			background-position: 44% 50%;
			background-size: 20px 50px;
			height: 50px;
			width: 50px;
			padding-right: 0;
			padding-left: 0;
			cursor: pointer;
			border-right: 1px solid black;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			background: black;

			svg {
				&:hover {
					transform: scale(1.03);
				}
			}
		}

		&__text {
			width: 170px;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			padding: 0;
			padding-right: 0;

			svg {
				&:hover {
					transform: scale(1.03);
				}
			}

			a {
				line-height: 0;
				cursor: pointer;
			}

			&__copy-svg-path {
				fill: #3c3c41;
				transition: fill 0.3s ease-in-out;
			}
		}
	}
}

.make-light-blue {
	fill: #30752f;
	transition: fill 0.3s ease-in-out;
}

.show {
	right: -175px;
}

.active {
	right: 0;
}
</style>

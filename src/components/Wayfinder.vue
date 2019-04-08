<template>
	<div>
		<!-- <button v-on:click="localCurrent(1)">1</button>
<button v-on:click="localCurrent(2)">2</button>
<button v-on:click="localCurrent(3)">3</button>
<button v-on:click="localCurrent(4)">4</button>
<button v-on:click="localCurrent(5)">5</button> -->

		<div v-if="this._props.pageTitle === 1">
			<div class="right">
				<div>
					<div class="">
						<NavigationStage1 />
					</div>
				</div>
			</div>
		</div>

		<div v-else-if="this._props.pageTitle === 2">
			<div class="right">
				<div>
					<div class="">
						<NavigationStage2 />
					</div>
				</div>
			</div>
		</div>

		<div v-else-if="this._props.pageTitle === 3">
			<div class="right">
				<div>
					<div class="">
						<NavigationStage3 />
					</div>
				</div>
			</div>
		</div>
		<div v-else-if="this._props.pageTitle === 4">
			<div class="right">
				<div>
					<div class="">
						<NavigationStage4 />
					</div>
				</div>
			</div>
		</div>
		<div v-else-if="this._props.pageTitle === 5">
			<div class="right">
				<div>
					<div class="">
						<NavigationStage5 />
					</div>
				</div>
			</div>
		</div>
		<div v-else-if="this._props.pageTitle === 0">
			<div>
				<div>
					<div class="icon-box-large">
						<!-- <NavigationStage0 /> -->

						<newNavigationMobile0 />
						<newNavigationDesktop0 />
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<div>
				<div>
					<div class="icon-box-large">
						<!-- <NavigationStage10 /> -->
						<newNavigationMobile10 />
						<newNavigationDesktop10 />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import NavigationStage1 from "../components/navigationIcons/NavigationStage1";
import NavigationStage2 from "../components/navigationIcons/NavigationStage2";
import NavigationStage3 from "../components/navigationIcons/NavigationStage3";
import NavigationStage4 from "../components/navigationIcons/NavigationStage4";
import NavigationStage5 from "../components/navigationIcons/NavigationStage5";

import newNavigationMobile10 from "../components/navigationIcons/newNavigationMobile10";
import newNavigationDesktop10 from "../components/navigationIcons/newNavigationDesktop10";

import newNavigationMobile0 from "../components/navigationIcons/newNavigationMobile0";
import newNavigationDesktop0 from "../components/navigationIcons/newNavigationDesktop0";

export default {
	data() {
		return {};
	},
	components: {
		NavigationStage1,
		NavigationStage2,
		NavigationStage3,
		NavigationStage4,
		NavigationStage5,
		newNavigationMobile10,
		newNavigationDesktop10,
		newNavigationMobile0,
		newNavigationDesktop0
	},
	props: ["pageTitle"],
	methods: {
		localCurrent(e) {
			// localStorage.clear();

			// set the current one
			// localStorage.setItem("current", e);

			// if visited array doesnt exist, create it and add it
			if (!localStorage.getItem("visited")) {
				// console.log('create visited')
				localStorage.setItem("visited", e);
				// console.log(localStorage.getItem("visited"));
			} else {
				// if it does exist, get it, turn the value into an array, push 'e' to the array, and set visited to this new array
				let arr_a = localStorage.getItem("visited").split(",");

				if (!arr_a.includes(e.toString())) {
					arr_a.push(e.toString());
				}

				localStorage.setItem("visited", arr_a);
				// console.log(localStorage);
			}

			document.querySelector(".visited").innerHTML = localStorage.getItem(
				"visited"
			);
		}
	},
	beforeMount() {},
	mounted() {
		if (document.querySelector(".box-" + this._props.pageTitle)) {
			document
				.querySelector(".box-" + this._props.pageTitle)
				.classList.add("visited2");
		}
	}
};
</script>

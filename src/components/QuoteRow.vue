<template>
				<div class="col-lg-12 drop-shadow-box no-pad flexbox-container mb-30">






								<div class="bg-black pad-60 relative">



																<div v-if="this._props.ctaIcon === '1'">
																				<CsPattern1 />
																</div>
																<div v-else-if="this._props.ctaIcon === '2'">
																				<CsPattern2 />
																</div>
																<div v-else-if="this._props.ctaIcon === '3'">
																				<CsPattern3 />
																</div>
																<div v-else-if="this._props.ctaIcon === '4'">
																				<CsPattern4 />
																</div>
																<div v-else="this._props.ctaIcon === '5'">
																				<CsPattern5 />
																</div>


												{{this._props.quoteOrg }}
												<Quote />
												<div class="quote top-pad-sm">
																{{this._props.quoteText }}
												</div>
												<div class="name">
																{{this._props.quoteAuthor }}
												</div>
												<div class="title">
																	{{this._props.quoteTitle }}
												</div>
												<div class="org">
																{{this._props.quoteOrg }}
												</div>
								</div>
								<div class="pad-40 text-center large-tb-pad">
												<div class="icon-box-centered">
																<div v-if="this._props.ctaIcon === '1'">
																				<CtaIcon1 />
																</div>
																<div v-else-if="this._props.ctaIcon === '2'">
																				<CtaIcon2 />
																</div>
																<div v-else-if="this._props.ctaIcon === '3'">
																				<CtaIcon3 />
																</div>
																<div v-else-if="this._props.ctaIcon === '4'">
																				<CtaIcon4 />
																</div>
																<div v-else="this._props.ctaIcon === '5'">
																				<CtaIcon5 />
																</div>
												</div>
												<a v-bind:href="this._props.ctaLink" class="underline-link-blue">{{this._props.ctaText }} <span class="right-chevron"><svg width="15" height="15" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 9.89 16.55" xml:space="preserve">
																								<g>
																												<g>
																																<g>
																																				<g>
																																								<polygon points="1.62,16.55 0,14.94 6.64,8.28 0,1.62 1.62,0 9.89,8.28" class="st0-chevron-blue"></polygon>
																																				</g>
																																</g>
																												</g>
																								</g>
																				</svg></span></a>
								</div>
				</div>
</template>
<script>
import CtaIcon1 from '../components/ctaicons/CtaIcon1'
import CtaIcon2 from '../components/ctaicons/CtaIcon2'
import CtaIcon3 from '../components/ctaicons/CtaIcon3'
import CtaIcon4 from '../components/ctaicons/CtaIcon4'
import CtaIcon5 from '../components/ctaicons/CtaIcon5'

import CsPattern1 from '../components/csgridpatterns/CsPattern1'
import CsPattern2 from '../components/csgridpatterns/CsPattern2'
import CsPattern3 from '../components/csgridpatterns/CsPattern3'
import CsPattern4 from '../components/csgridpatterns/CsPattern4'
import CsPattern5 from '../components/csgridpatterns/CsPattern5'



import Quote from '../components/icons/Quote'



export default {
				components: {

								CtaIcon1,
								CtaIcon2,
								CtaIcon3,
								CtaIcon4,
								CtaIcon5,
								CsPattern1,
								CsPattern2,
								CsPattern3,
								CsPattern4,
								CsPattern5,
								Quote

				},
				props: [
								'quoteText',
								'quoteAuthor',
								'quoteTitle',
								'quoteOrg',
								'ctaIcon',
								'ctaText',
								'ctaLink'
				]
}

</script>

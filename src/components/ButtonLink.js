import React, { Component } from 'react';


const ButtonLink = ({ text, onClickHandler, styleModifier, target, props, href, image}) => (
	<a href={href} target={target} className={"c-btn " + styleModifier } onClick={ onClickHandler } {...props}>

		{image &&
			<svg className="c-btn__icon" viewBox="0 0 80 80" version="1.1">
			    <title>download</title>
			    <defs>
			        <linearGradient x1="11.5517976%" y1="88.9160154%" x2="117.786458%" y2="-28.3463542%" id="linearGradient-1">
			            <stop stopColor="#008ED1" offset="0%"></stop>
			            <stop stopColor="#4300A3" offset="42.0400571%"></stop>
			            <stop stopColor="#FF00CF" offset="100%"></stop>
			        </linearGradient>
			        <path d="M54.5605469,24.2421875 C57.3860818,24.3789069 60.0178915,25.0055283 62.4560547,26.1220703 C64.8942179,27.2386124 67.0247305,28.7425036 68.8476562,30.6337891 C70.670582,32.5250746 72.1175077,34.7239458 73.1884766,37.2304688 C74.2594455,39.7369917 74.8632806,42.4029807 75,45.2285156 C75,48.19077 74.4417374,50.9706901 73.3251953,53.5683594 C72.2086533,56.1660286 70.6819758,58.4332585 68.7451172,60.3701172 C66.8082585,62.3069758 64.5524217,63.8336533 61.9775391,64.9501953 C59.4026564,66.0667374 56.6341294,66.625 53.671875,66.625 L22.3632812,66.625 C19.9934777,66.5338537 17.749034,65.9983773 15.6298828,65.0185547 C13.5107316,64.0387321 11.6650469,62.7627032 10.0927734,61.1904297 C8.52049995,59.6181562 7.27865039,57.7952578 6.3671875,55.7216797 C5.45572461,53.6481016 5,51.4720166 5,49.1933594 C5,47.188141 5.33040034,45.308277 5.99121094,43.5537109 C6.65202153,41.7991449 7.56347075,40.1927156 8.72558594,38.734375 C9.88770112,37.2760344 11.2662681,36.0227917 12.8613281,34.9746094 C14.4563882,33.9264271 16.1881417,33.128909 18.0566406,32.5820312 C18.2845063,29.9387889 18.9339139,27.5006622 20.0048828,25.2675781 C21.0758517,23.034494 22.488598,21.0976645 24.2431641,19.4570312 C25.9977301,17.816398 28.0143115,16.528976 30.2929688,15.5947266 C32.571626,14.6604771 35.0097526,14.1933594 37.6074219,14.1933594 C41.2988466,14.1933594 44.6142431,15.1048086 47.5537109,16.9277344 C50.4931788,18.7506602 52.8287674,21.1887868 54.5605469,24.2421875 Z" id="path-2"></path>
			        <filter x="-34.3%" y="-26.7%" width="168.6%" height="191.5%" filterUnits="objectBoundingBox" id="filter-3">
			            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
			            <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
			            <feColorMatrix values="0 0 0 0 0.239215686   0 0 0 0 0.443137255   0 0 0 0 0.764705882  0 0 0 0.08 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
			            <feOffset dx="0" dy="8" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>
			            <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter2" result="shadowBlurOuter2"></feGaussianBlur>
			            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.08 0" type="matrix" in="shadowBlurOuter2" result="shadowMatrixOuter2"></feColorMatrix>
			            <feMerge>
			                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
			                <feMergeNode in="shadowMatrixOuter2"></feMergeNode>
			            </feMerge>
			        </filter>
			    </defs>
			    <g id="Icon/Resources" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			        <g id="Path" opacity="0.800000012">
			            <use fill="black" fillOpacity="1" filter="url(#filter-3)" xlinkHref="#path-2"></use>
			            <use fill="url(#linearGradient-1)" fillRule="evenodd" xlinkHref="#path-2"></use>
			        </g>
			        <path d="M53.671875,62.25 C55.9505322,62.25 58.1152241,61.8626341 60.1660156,61.0878906 C62.2168071,60.3131472 64.0169193,59.2194081 65.5664062,57.8066406 C67.1158932,56.3938731 68.3463496,54.696299 69.2578125,52.7138672 C70.1692754,50.7314354 70.625,48.5325642 70.625,46.1171875 C70.625,43.7018108 70.1692754,41.4573671 69.2578125,39.3837891 C68.3463496,37.310211 67.1158932,35.5100988 65.5664062,33.9833984 C64.0169193,32.4566981 62.2168071,31.2490279 60.1660156,30.3603516 C58.1152241,29.4716752 55.9505322,29.0273438 53.671875,29.0273438 L51.484375,29.0273438 C51.3020824,28.161454 51.0058614,27.3867222 50.5957031,26.703125 C50.1855448,26.0195278 49.7753927,25.3587271 49.3652344,24.7207031 C48.2714789,22.7154848 46.6878359,21.1888073 44.6142578,20.140625 C42.5406797,19.0924427 40.2050911,18.5683594 37.6074219,18.5683594 C35.1920452,18.5683594 33.0501396,19.0468702 31.1816406,20.0039062 C29.3131417,20.9609423 27.7294987,22.2483643 26.4306641,23.8662109 C25.1318294,25.4840576 24.1292353,27.3411354 23.4228516,29.4375 C22.7164678,31.5338646 22.3632812,33.744129 22.3632812,36.0683594 C18.6718565,36.2962251 15.5843223,37.7203645 13.1005859,40.3408203 C10.6168496,42.9612761 9.375,45.912093 9.375,49.1933594 C9.375,52.1100406 10.0471938,54.4342361 11.3916016,56.1660156 C12.7360093,57.8977951 14.2285074,59.2193965 15.8691406,60.1308594 C17.5097738,61.0423223 19.0022719,61.6233711 20.3466797,61.8740234 L22.3632812,62.25 L53.671875,62.25 Z" id="Path" fill="#FFFFFF"></path>
			        <polygon id="Path" fill="url(#linearGradient-1)" opacity="0.800000012" points="41.7673716 46.9546828 46.6072508 41.734139 49 44.1812689 40.0271903 53.5891239 31 44.1812689 33.4471299 41.734139 38.2870091 46.9546828 38.2870091 32 41.7673716 32"></polygon>
			    </g>
			</svg>
		}
		<span className="c-btn__text">{ text }</span>

	</a>
);

export default ButtonLink;

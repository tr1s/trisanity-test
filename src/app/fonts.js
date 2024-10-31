/*
 * Fonts.
 * ------------------------------------------------------------------------------
 *
 */

import localFont from 'next/font/local';

export const GTFAdieu = localFont({
	variable: '--font-GTFAdieu',
	src: [
		{
			path: '../../public/fonts/GTFAdieuTRIAL-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/GTFAdieuTRIAL-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/GTFAdieuTRIAL-Bold.otf',
			weight: '700',
			style: 'normal',
		},
	],
});

export const GTFAdieu_Backslant = localFont({
	variable: '--font-GTFAdieu-Backslant',
	src: [
		{
			path: '../../public/fonts/GTFAdieuTRIAL-LightBackslant.otf',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../../public/fonts/GTFAdieuTRIAL-RegularBackslant.otf',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../../public/fonts/GTFAdieuTRIAL-BoldBackslant.otf',
			weight: '700',
			style: 'italic',
		},
	],
});

export const GTFAdieu_Slanted = localFont({
	variable: '--font-GTFAdieu-Slanted',
	src: [
		{
			path: '../../public/fonts/GTFAdieuTRIAL-RegularSlanted.otf',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../../public/fonts/GTFAdieuTRIAL-BoldSlanted.otf',
			weight: '700',
			style: 'italic',
		},
	],
});

export const Source_Sans_3 = localFont({
	variable: '--font-Source-Sans-3',
	src: [
		{
			path: '../../public/fonts/source-sans-3-v4-latin-regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/source-sans-3-v4-latin-700.woff2',
			weight: '700',
			style: 'normal',
		},
	],
});

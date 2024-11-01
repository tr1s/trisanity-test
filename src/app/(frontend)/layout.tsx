/*
 * Layout component for Next.js /app router.
 * ------------------------------------------------------------------------------
 *
 */

import '@/styles/styles.scss';

import type { Metadata } from 'next';
import { GTFAdieu, GTFAdieu_Slanted, GTFAdieu_Backslant, Source_Sans_3 } from '../fonts';

import Nav from '@/components/Nav';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`
      ${GTFAdieu.variable}
      ${GTFAdieu_Slanted.variable}
      ${GTFAdieu_Backslant.variable}
      ${Source_Sans_3.variable}
    `}
		>
			<body>
				<Nav />
				<main role="main" id="main-content" tabIndex={-1}>
					{children}
				</main>
			</body>
		</html>
	);
}

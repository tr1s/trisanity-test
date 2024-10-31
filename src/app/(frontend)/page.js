/*
 * Homepage component.
 * ------------------------------------------------------------------------------
 *
 */

import styles from './page.module.scss';

import SectionWrapper from '@/components/SectionWrapper';
import Project from '@/components/Project';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		name: 'Signal1',
		cover: '/project-images/signal1.jpg',
		url: 'https://signal1.ai/',
		domain: 'signal1',
		tld: 'ai',
		path: '',
		builtWith:
			'Built w/ <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>Lottie.js</strong>',
	},
	{
		id: 2,
		name: 'Nightizm',
		cover: '/project-images/nightizm.jpg',
		url: 'https://nightizm.com/',
		domain: 'nightizm',
		tld: 'com',
		path: 'testing',
		builtWith:
			'Built w/ <strong>React</strong>, <strong>Next.js</strong>, and <strong>styled-components</strong>',
	},
];

export default function Home() {
	return (
		<SectionWrapper>
			<div className={styles.intro}>
				<p>
					I build fast, accessible, beautiful websites—email me and let’s see if I can help solve
					your web needs.
				</p>
			</div>
			<div className={styles.projectsWrapper}>
				{projects.map((project) => (
					<Project key={project.id} {...project} />
				))}
			</div>
		</SectionWrapper>
	);
}

export async function generateMetadata() {
	const title = 'Tristan Lawrence';
	const description = 'Tristan Lawrence is a frontend developer based in Toronto.';

	const baseUrl = 'https://www.tris.codes/';
	const ogImageUrl = 'https://i.imgur.com/lj6oMEj.jpg';
	const ogImageUrlAlt = "Tris' logo.";

	return {
		title: title,
		description: description,
		alternates: {
			canonical: '/',
		},
		openGraph: {
			type: 'website',
			siteName: title,
			title: title,
			description: description,
			url: baseUrl,
			images: [
				{
					url: ogImageUrl,
					alt: ogImageUrlAlt,
					width: 160,
					height: 160,
				},
			],
		},
	};
}

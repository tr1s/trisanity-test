import styles from './TextLink.module.scss';

import Link from 'next/link';

export default function TextLink({ children, href, className }) {
	const isExternalLink = href?.startsWith('http');
	const combinedClassNames = `${styles.link} ${className}`;

	if (isExternalLink) {
		<a href={href} rel="noopener noreferrer" className={combinedClassNames}>
			{children}
		</a>;
	}
	return (
		<>
			<Link href={href} className={combinedClassNames}>
				{children}
			</Link>
		</>
	);
}

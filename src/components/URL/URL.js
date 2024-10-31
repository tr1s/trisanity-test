/*
 * URL component.
 * ------------------------------------------------------------------------------
 *
 */

import styles from './URL.module.scss';

import Link from 'next/link';

export default function URL({ domain, tld, path, url, imagePalette }) {
	return (
		<>
			{url.startsWith('http') ? (
				<a href={url} className={styles.url} target="_blank" rel="noopener noreferrer">
					<span className={styles.top}>
						https<span className={styles.punctuation}>://</span>
					</span>
					<span className={styles.bottom}>
						<span className={styles.domain}>
							{domain}
							<span className={styles.punctuation}>.</span>
						</span>
						{tld}
						<span className={styles.punctuation}>/{path}</span>
					</span>
				</a>
			) : (
				<Link href={url} className={styles.url}>
					<span className={styles.top}>
						https<span className={styles.punctuation}>://</span>
					</span>
					<span className={styles.bottom}>
						<span className={styles.domain}>
							{domain}
							<span className={styles.punctuation}>.</span>
						</span>
						{tld}
						<span className={styles.punctuation}>/{path}</span>
					</span>
				</Link>
			)}
		</>
	);
}

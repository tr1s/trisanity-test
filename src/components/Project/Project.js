/*
 * Project component.
 * ------------------------------------------------------------------------------
 *
 */

import styles from './Project.module.scss';

import Image from 'next/image';
// import renderMarkdownAndHTML from '@/utils/renderMarkdownAndHTML';
import URL from '@/components/URL';

export default function Project({ id, title, builtWith, url, cover, domain, tld, path }) {
	return (
		<article className={styles.wrapper}>
			<URL url={url} domain={domain} tld={tld} path={path} />
			<span className={styles.id}>{id}</span>
			<div className={styles.cover}>
				<figure>
					<Image src={cover} alt="{title}" width={400} height={400} />
				</figure>
				<button>More info</button>
			</div>
			{/* <p className={styles.details}>{renderMarkdownAndHTML(builtWith)}</p> */}
			<p className={styles.details}>{builtWith}</p>
		</article>
	);
}

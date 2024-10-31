/*
 * Nav component.
 * ------------------------------------------------------------------------------
 *
 */

import styles from './Nav.module.scss';

import SectionWrapper from '@/components/SectionWrapper';
import URL from '@/components/URL';

export default function Nav() {
	return (
		<>
			<div className={styles.wrapper}>
				<SectionWrapper as="nav" className={styles.innerWrapper}>
					<URL url="/" domain="tris" tld="codes" />
				</SectionWrapper>
			</div>
		</>
	);
}

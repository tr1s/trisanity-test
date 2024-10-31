import React from 'react';

import styles from './styles.module.scss';

export default function SkipNavLink() {
	return (
		<a href="#main-content" className={styles['skip-nav-link']} aria-label="Skip to main content.">
			Skip to main content
		</a>
	);
}

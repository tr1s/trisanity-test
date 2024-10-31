/*
 * Custom Link component.
 * ------------------------------------------------------------------------------
 *
 */

import styles from './LinkCustom.module.scss';

import Link from 'next/link';
import classNames from 'classnames';

export default function LinkCustom({
	children,
	href,
	className,
	isLinedLink,
	hasArrow,
	linkCoversFullContainer,
	...props
}) {
	const isExternalLink = href?.startsWith('http');

	const classes = classNames(className, {
		[styles.link]: true,
		[styles.linkCoversFullContainer]: linkCoversFullContainer,
		[styles.isLinedLink]: isLinedLink,
		[styles.hasArrow]: hasArrow,
	});

	if (isExternalLink) {
		return (
			<a
				className={classes}
				href={href ? href : '#'}
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			>
				{children}
			</a>
		);
	}
	return (
		<Link href={href ? href : '#'} className={classes} {...props}>
			{children}
		</Link>
	);
}

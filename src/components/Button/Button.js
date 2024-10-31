/*
 * Button component.
 * ------------------------------------------------------------------------------
 *
 */

import styles from './styles.module.scss';

import Link from 'next/link';
import classNames from 'classnames';

export default function Button({ children, href, className, white, block, ...rest }) {
	const isExternalLink = href && href.startsWith('http');

	const classes = classNames(className, {
		[styles.button]: true,
		[styles.block]: block === true,
		[styles.white]: white,
	});

	if (!href) {
		return (
			<button className={classes} {...rest}>
				{children}
			</button>
		);
	}

	if (isExternalLink) {
		return (
			<a
				className={classes}
				href={href ? href : '#'}
				target="_blank"
				rel="noopener noreferrer"
				{...rest}
			>
				{children}
			</a>
		);
	}
	return (
		<Link href={href ? href : '#'} className={classes} {...rest}>
			{children}
		</Link>
	);
}

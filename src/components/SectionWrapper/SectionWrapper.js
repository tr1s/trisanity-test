/*
 * New SectionWrapper component (this replaces the SectionWrap component).
 * ------------------------------------------------------------------------------
 *
 */

import styles from './SectionWrapper.module.scss';

import { clsx } from 'clsx';

export default function SectionWrapper({
	children,
	as = 'section',
	className,
	background = 'transparent',
	maxWidth = false,
	hasContentWrapper = false,
	maxWidthFullBleed = false,
	hasBottomBorder = false,
	style,
	...props
}) {
	const Component = as;

	const baseStyles = {
		background,
		...style,
	};

	const classes = clsx(className, {
		[styles.sectionWrap]: true,
		[styles.maxWidthFullBleed]: maxWidthFullBleed,
		[styles.borderBottom]: hasBottomBorder,
		[styles.contentWrapper]: hasContentWrapper,
	});

	if (maxWidth) {
		return (
			<Component className={classes} style={baseStyles} {...props}>
				<div className="content-wrapper max-width">{children}</div>
			</Component>
		);
	}
	if (hasContentWrapper) {
		return (
			<Component className={classes} style={baseStyles} {...props}>
				<div className="content-wrapper">{children}</div>
			</Component>
		);
	}
	if (maxWidthFullBleed) {
		return (
			<Component className={classes} style={baseStyles} {...props}>
				<div className="full-bleed">{children}</div>
			</Component>
		);
	}
	return (
		<Component className={classes} style={baseStyles} {...props}>
			{children}
		</Component>
	);
}

/*
 * A hook to check if the component has mounted.
 * Reference: https://joshwcomeau.com/react/the-perils-of-rehydration/
 * ------------------------------------------------------------------------------
 *
 */

import { useEffect, useState } from 'react';

export default function useHasMounted() {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	return hasMounted;
}

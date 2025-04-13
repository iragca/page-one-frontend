export function sortByKey<T extends Record<string, any>>(
	array: T[],
	key: string,
	isAscending: boolean = true,
	type: 'string' | 'number' = 'string'
): T[] {
	return array.sort((a, b) => {
		const aVal = a[key];
		const bVal = b[key];

		if (type === 'number') {
			const result = (aVal ?? 0) - (bVal ?? 0);
			return isAscending ? result : -result;
		} else {
			const aStr = String(aVal ?? '').toLowerCase();
			const bStr = String(bVal ?? '').toLowerCase();
			const result = aStr.localeCompare(bStr);
			return isAscending ? result : -result;
		}
	});
}

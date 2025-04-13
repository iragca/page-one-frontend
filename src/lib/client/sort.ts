export function sortByKey(array: Object, key: string, isAscending = true, type='string') {
	// Sort the array of objects by a specific key

	if (isAscending) {
		return array.sort((a, b) => a[key].localeCompare(b[key]));
	}

	return array.sort((a, b) => b[key].localeCompare(a[key]));
}


export function sortByIntegerKey<T extends Record<string, any>>(
	array: T[],
	key: string,
	isAscending = true
): T[] {
	return array.sort((a, b) => {
		const aValue = a[key] ?? 0;
		const bValue = b[key] ?? 0;

		return isAscending ? aValue - bValue : bValue - aValue;
	});
}



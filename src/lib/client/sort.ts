export function sortByKey(array: Object, key: string, isAscending = true) {
	// Sort the array of objects by a specific key

	if (isAscending) {
		return array.sort((a, b) => a[key].localeCompare(b[key]));
	}

	return array.sort((a, b) => b[key].localeCompare(a[key]));
}

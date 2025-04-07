/**
 * Copies the provided text to the clipboard and optionally resets the `copied` flag after 1.5 seconds.
 *
 * @param textToCopy - Should be $state() variable. The text string to be copied to the clipboard.
 * @param copied - Should be a $state() variable. A boolean flag indicating whether the text has been copied. This will be reset to `false` after 1.5 seconds.
 * @returns A promise that resolves when the text has been successfully copied to the clipboard.
 * @throws Will log an error to the console if the copy operation fails.
 */
export const copyToClipboard = async (textToCopy: string, copied: boolean) => {
    try {
        await navigator.clipboard.writeText(textToCopy);
        setTimeout(() => (copied = false), 1500); // reset after 1.5s
    } catch (err) {
        console.error('Copy failed', err);
    }
};

export const copyToClipboard = async (textToCopy: string, copied: boolean) => {
    try {
        await navigator.clipboard.writeText(textToCopy);
        setTimeout(() => (copied = false), 1500); // reset after 1.5s
    } catch (err) {
        console.error('Copy failed', err);
    }
};

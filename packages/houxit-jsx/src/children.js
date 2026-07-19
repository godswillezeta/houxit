

export function normalizeText(text) {

    // Collapse whitespace
    text = text.replace(/\s+/g, " ");

    // Remove leading/trailing newlines only
    return text;

}
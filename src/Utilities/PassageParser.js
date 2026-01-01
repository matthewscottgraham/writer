const parsePassage = (rawText) => {
  const tagRegex = /<([^=]+)=([^>]+)>/g;
  let match;
  const tags = [];
  let bodyText = rawText;

  while ((match = tagRegex.exec(rawText)) !== null) {
    tags.push({
      key: match[1].trim(),
      value: match[2].trim()
    });
    bodyText = bodyText.replace(match[0], '');
  }

  return {tags, text: bodyText.trim()};
}

export const parsePassages = (rawText) => {
  return rawText
      .split(/\n\s*\n/)
      .map(block => block.trim())
      .filter(Boolean)
      .map(parsePassage);
};
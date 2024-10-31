/*
 * A utility function that renders markdown and/or HTML at the same time.
 * Useful for when we don't know whether the data will come from Contentful or be hard-coded HTML.
 * ------------------------------------------------------------------------------
 *
 */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

export default function renderMarkdownAndHTML(markdownText) {
	return (
		<ReactMarkdown
			components={{
				p: React.Fragment,
			}}
			children={markdownText}
			rehypePlugins={[rehypeRaw, rehypeSanitize]}
		/>
	);
}

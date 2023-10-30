import React from "react";

const Hyperlink = ({ href, color, text }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			style={{ color: color }}>
			{text}
		</a>
	);
};

export default Hyperlink;

export default function MarkIcon({ colorMark }: { colorMark?: string }) {
	return (
		<svg
			width="61"
			height="61"
			viewBox="0 0 61 61"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M61 0H0V53H8V61H16V53H24H32V61H53V53H61V45H53V37H61V0ZM53 45H45V53H53V45ZM16 53H8V45H16V53Z"
				fill={colorMark}
			/>
		</svg>
	);
}

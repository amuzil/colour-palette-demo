/* eslint-disable @next/next/no-head-element */
import "./global.css";

export default function RootLayout({ children }: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<title>Amuzil Colour Palette Demo</title>

				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>{children}</body>
		</html>
	);
}

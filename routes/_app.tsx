import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Power Up! with VeChain</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}

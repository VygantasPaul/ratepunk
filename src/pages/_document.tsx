import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <title>App</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

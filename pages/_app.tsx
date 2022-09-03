import "../styles/globals.css";
import type { AppProps } from "next/app";
import { EditorProvider } from "../context/EditorContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EditorProvider>
      <Component {...pageProps} />
    </EditorProvider>
  );
}

export default MyApp;

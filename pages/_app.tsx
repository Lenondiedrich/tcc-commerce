import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import GlobalState from "../context/GlobalState";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3214187, 6);
  }, []);

  return (
    <GlobalState>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </GlobalState>
  );
}

export default MyApp;

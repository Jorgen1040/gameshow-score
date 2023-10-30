import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { configureAbly } from "@ably-labs/react-hooks";

console.log(process.env.API_ROOT);
const prefix = process.env.API_ROOT || "";
console.log("prefix: ", prefix);
const clientId =
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

console.log(`${prefix}/api/createTokenRequest?clientId=${clientId}`);

configureAbly({
  authUrl: `${prefix}/api/createTokenRequest?clientId=${clientId}`,
  clientId: clientId,
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

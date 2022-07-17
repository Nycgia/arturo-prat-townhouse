import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import ModalProvider from '../components/context/modal/modal.provider';
import DrawerProvider from '../components/context/drawer/drawer.provider';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Townhouse Arturo Prat</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href={prefix + '/favicon.ico'} />
      </Head>

      <ModalProvider>
        <DrawerProvider>
          <Component {...pageProps} />
        </DrawerProvider>
      </ModalProvider>
    </>
  );
}

export default MyApp;

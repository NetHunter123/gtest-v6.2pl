import '@/styles/globals.css'
import 'react-medium-image-zoom/dist/styles.css'
import Head from "next/head"
import Script from "next/script"
import {MantineProvider} from '@mantine/core'

export default function App({Component, pageProps}) {
  return <>
    <Head>
      <title>Анна Астахова — Таро, снятие проклятий, предсказания</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      <meta
        name="description"
        content="Профессиональные расклады таро, снятие проклятий и предсказания. Анна Астахова поможет найти решение ваших проблем. Запишитесь на консультацию."
      />
      <meta property="og:title" content="Анна Астахова — Таро, снятие проклятий"/>
      <meta property="og:description" content="Профессиональные расклады таро, снятие проклятий и предсказания. Запишитесь на консультацию."/>
      <meta property="og:type" content="website"/>
      <meta name="robots" content="index, follow"/>
    </Head>

    {/* ── Facebook Pixel ── */}
    <Script id="facebook-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1682482752690793');
        fbq('track', 'PageView');
      `}
    </Script>

    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          x2: ["#222222"]
        }
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  </>
}

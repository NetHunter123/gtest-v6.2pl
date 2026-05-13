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
      {/* Розкоментуйте і замініть YOUR_DOMAIN після деплою: */}
      {/* <meta property="og:image" content="https://YOUR_DOMAIN/firstPhoto.jpg"/> */}
      {/* <meta property="og:url" content="https://YOUR_DOMAIN"/> */}
      <meta name="robots" content="index, follow"/>
    </Head>

    {/* ── Google Tag Manager ── */}
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WWGT8MTL');`}
    </Script>

    {/* ── Google Ads ── */}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=AW-18149320467"
      strategy="afterInteractive"
    />
    <Script id="google-ads" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-18149320467');

        // Конверсія "Перегляд сторінки" — рахується при кожному завантаженні
        gtag('event', 'conversion', {
          'send_to': 'AW-18149320467/CHTqCIHstKocEJPOos5D',
          'value': 1.0,
          'currency': 'UAH'
        });

        // Конверсія "Клік зовнішнього посилання" — викликається вручну при кліку
        function gtag_report_conversion(url) {
          var callback = function () {
            if (typeof url !== 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
            'send_to': 'AW-18149320467/9JCXCP6fl6ocEJPOos5D',
            'event_callback': callback
          });
          return false;
        }
      `}
    </Script>

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
        fbq('init', '1544741357044788');
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

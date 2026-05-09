import '@/styles/globals.css'
import 'react-medium-image-zoom/dist/styles.css'
// import Head from "next/head";
import {MantineProvider} from '@mantine/core'
import {useEffect} from "react";
// import {gtag} from "ga-gtag";


export default function App({Component, pageProps}) {

useEffect(()=>{
  window.dataLayer = window.dataLayer || [];
})

  return <>
	  <head dangerouslySetInnerHTML={{
		  __html: `
      <title>Anna Astachova</title>
      <meta
      name='viewport'
      content='minimum-scale=1, initial-scale=1, width=device-width'
      />
<!-- Google tag (gtag.js) -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-18149320467"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18149320467');
</script>
<!-- Event snippet for Перегляд сторінки conversion page -->
<script>
  gtag('event', 'conversion', {
      'send_to': 'AW-18149320467/CHTqCIHstKocEJPOos5D',
      'value': 1.0,
      'currency': 'UAH'
  });
</script>
		<!-- Event snippet for Клік зовнішнього посилання conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-18149320467/9JCXCP6fl6ocEJPOos5D',
      'event_callback': callback
  });
  return false;
}
</script>
`



	  }}/>


	  
	  <MantineProvider
		  withGlobalStyles
		  withNormalizeCSS
		  theme={{
			  /** Put your mantine theme override here */
			  // colorScheme: 'dark',
			  colors: {
				  x2: ["#222222"]
			  }
			  
			  // components:{
			  //   Drawer:{
			  //     body:{
			  //       backgroundColor:"red",
			  //       color:"red"
			  //     },
			  //
			  //     closeButton:{
			  //       backgroundColor:"red",
			  //       color:"red"
			  //     },
			  //     header: { color: 'red' },
			  //
			  //     backgroundColor:"#222222"
			  //   },
			  //   Button:{
			  //
			  //   }
			  // }
			  
		  }}
	  >
		  <Component {...pageProps} />
	  </MantineProvider>
  </>
}

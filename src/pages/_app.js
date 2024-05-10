import '@/styles/globals.css'
import 'react-medium-image-zoom/dist/styles.css'
// import Head from "next/head";
import {MantineProvider} from '@mantine/core'
// import {useEffect} from "react";
// import {gtag} from "ga-gtag";


export default function App({Component, pageProps}) {

// useEffect(()=>{
//   window.dataLayer = window.dataLayer || [];
// })

  return <>
	  <head dangerouslySetInnerHTML={{
		  __html: `
      <title>Anna Astachova</title>
      <meta
      name='viewport'
      content='minimum-scale=1, initial-scale=1, width=device-width'
      />
      
      
    <!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11451210787"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());
		
		  gtag('config', 'AW-11451210787');
		</script>`
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

import React from 'react';
import {Image, Button, rem} from "@mantine/core";
import {IconBrandInstagram, IconBrandTelegram, IconBrandWhatsapp, IconBrandFacebook} from '@tabler/icons-react';
import ContactButton from "@/components/ContactButton";
import useMediaQueries from "@/utils/useMediaQueries";


// const gTagConvers = (url) => {
// 	gtag_report_conversion(url)
// }

const ContactUs = ({contacts}) => {
  const md = useMediaQueries("md")
  const lg = useMediaQueries("lg")

  return (
    <>
      <div className="container relative">
        <a id={"contacts"} className="anchor"/>
        <div className={"flex w-full relative justify-center max-md:flex-col md:justify-between items-center py-[60px] z-10"}>
          <div className="photo mr-[30px] max-md:mr-0 max-md:order-1">
            <Image width={lg?360:md?314:300} withPlaceholder src='./contactUs.png' alt="Main Photo"/>
          </div>

          <div className={`info
           max-w-[450px]
           max-w-[500px]
           max-md:flex max-md:flex-col max-md:items-center lg:mr-[30px] max-md:mb-[25px]`}>
            <div className="text-left max-md:text-center max-lg:mb-[15px] mb-[35px]">
              <h3 className="title relative z-10 text-left max-md:mb-[20px] text-center">Kontakt ze mną</h3>
              <p className="sub-title relative z-20 text-left mb-0 text-center mb-[20px]">Odpowiem i doradzę w każdej sprawie. Pamiętaj – nie ma sytuacji, której nie da się rozwiązać!
              </p>

              <p className={"infoText font-bold text-center"}>Aby się ze mną skontaktować, napisz do mnie w dowolny wygodny dla Ciebie sposób.</p>
            </div>
	          <div className="btns flex flex-wrap gap-[10px] justify-center">
		          {contacts.map((btn) => {
			          return <div className={"inline-block  w-fit"
				          // "max-lg:mb-[20px] mb-[30px]" +
			          } key={btn.text}>
				          <ContactButton text={btn.text} link={btn.link} icon={btn.icon}/>
			          </div>
		          })}
	          </div>
          </div>
        
        </div>
      </div>
    </>
  )
	  ;
};

export default ContactUs;

import React from 'react';
import Button from "@/components/Button";
import {Image} from "@mantine/core";
import useMediaQueries from "@/utils/useMediaQueries";

const About = () => {
  const md = useMediaQueries("md")
  const lg = useMediaQueries("lg")
  return (
    <>
      <div className="container relative ">
        <a id={"about_me"} className="anchor"/>
        <div className={"flex w-full relative max-md:flex-col justify-between items-center py-[60px] max-md:py-[30px] z-10"}>
          <div className="photo mr-[20px] max-md:mr-0 max-md:mb-[20px] max-lg:mr-[30px]">
            <Image width={lg?360:md?300:300} withPlaceholder src='./aboutPhoto.png' alt="Main Photo"/>
          </div>

          <div className="info max-w-[450px] max-w-[500px] max-lg:max-w-full max-md:text-center">

            <p className={"text-s18 font-[400] mb-[27px]"}>Dzień dobry, nazywam się Anna Astachowa. Jestem wróżką z dziada pradziada, jasnowidzem i praktykującą rytualistką. Już w dzieciństwie pomagałam ludziom poznać ich przyszłość i uwalniałam ich od chorób. Kilkakrotnie odbyłam pielgrzymki do miejsc świętych, przez długi czas mieszkałam w klasztorze.</p>
            <p className={"text-s18 font-[400] mb-[27px]"}>Dziś zwracają się do mnie ludzie z różnymi problemami życiowymi – nieudane życie osobiste, klątwy rodowe, trudności z samorealizacją... Wszystkim pomagam uwolnić się od tych okowów, odnaleźć szczęście i spokój zarówno w domu, jak i w pracy.</p>
            <p className={"text-s18 font-[400] "}>Wszystkie swoje rytuały magiczne, obrzędy i zaklęcia wykonuję ściśle według kanonów dawnych przekazów. Będziesz mieć możliwość zobaczyć moją pracę i wziąć w niej udział. Jeśli podejmuję się pracy, zawsze doprowadzam ją do końca!</p>
          </div>


        </div>
        <div className="absolute max-md:-right-[400px] -right-[500px] bottom-[10px] animate-[spin_40s_linear_infinite] z-[0]">
          <Image height={660} width={660} withPlaceholder src='./animateCircle.png' alt="animation"/>
        </div>
      </div>
    </>
  );
};

export default About;

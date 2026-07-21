import React from 'react';
import AccordionServices from "@/components/AccordionServices";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const Services = () => {
  return (
    <div className={"container"}>
      <a id={"reviews"} className="anchor"/>
      <div className="z-10 py-[40px]">
        <div className="reviews-title_wrapper z-10">
          <h3 className="title relative z-10">Opinie</h3>
          <p className="sub-title relative z-20">W mediach społecznościowych, w zakładce kontakt, znajdziesz również opinie wielu zadowolonych klientów, które możesz przeczytać. Nic nie mówi o mojej pracy lepiej niż setki pozytywnych opinii moich klientów – poniżej możesz zobaczyć kilka z nich:</p>
          <div className="max-w-[760px] mx-auto">
          </div>
        </div>
        <div className="reviews_carousel w-full px-[40px] max-w-[800px] max-md:px-0 mx-auto relative z-10">
          <ReviewsCarousel/>
        </div>
      </div>
    </div>
  );
};

export default Services;

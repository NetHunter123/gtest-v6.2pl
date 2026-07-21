import React from 'react';
import AccordionServices from "@/components/AccordionServices";

const Services = () => {
  return (
    <div className={"container"}>
      <a id={"services"} className="anchor"/>
      <div className="z-10 py-[40px]">
        <h3 className="title">Usługi</h3>
        <p className="sub-title">Tutaj możesz zapoznać się z usługami oferowanymi <span
          className={"whitespace-nowrap"}>przez Annę Astachową:</span></p>
        <div className="max-w-[760px] mx-auto">
          <AccordionServices/>
        </div>
      </div>
    </div>
  );
};

export default Services;

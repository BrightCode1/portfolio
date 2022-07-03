import React from "react";

import ServicesCard from "../../components/ServicesCard";
import { services } from "./serviceContent";
import { ServiceContainer } from "./serviceStyles";

const Services = () => {
  return (
    <ServiceContainer className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </ServiceContainer>
  );
};

export default Services;

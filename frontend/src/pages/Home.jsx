import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../shared/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../services/ServicesList";
import carData from "../assets/data/cars";
import CarItem from "../shared/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import FeaturedCarList from "../components/Featured-cars/FeaturedCarList";
import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    // <Helmet title="Home">
    <>
      {/* ============= hero section =========== */}
      <section className="p-0" >
        <HeroSlider />
         
        
      </section  >
      <section className="p-0">
      <AboutSection />
      </section>
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      
    {/* </Helmet> */}
    </>
  );
};

export default Home;

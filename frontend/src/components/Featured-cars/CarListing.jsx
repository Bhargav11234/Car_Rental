import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../../shared/CommonSection";
//  import CarItem from "../UI/CarItem";
import carData from "../../assets/data/cars.js";
import CarItem from "../../shared/CarItem";

const CarListing = () => {


 
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}

            {/* <Col lg="12">
              <div className="pagination d-flex align-items-center
              justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number} onClick={number}>
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;

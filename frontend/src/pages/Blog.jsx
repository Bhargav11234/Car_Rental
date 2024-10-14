import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../shared/CommonSection";

import Giscus from "@giscus/react"

const Blog = () => {
  return (
    <Helmet title="Reviews">
      <CommonSection title="Reviews" />
      <section>
      <Giscus
      id="comments"
      repo="rokad03/sgp-6"
      repoId="R_kgDOLNWS7Q"
      category="Announcements"
      categoryId="DIC_kwDOLNWS7c4CeByq"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    /> 
      </section>
    </Helmet>
  );
};

export default Blog;

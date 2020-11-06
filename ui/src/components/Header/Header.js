import React from "react";

import { Container, Grid, Image, Header } from "semantic-ui-react";

import sigmaLogo from "../../assets/images/sigma-logo.png";

import "./Header.css";

export default function HeaderInfo() {
  return (
    <Container className="header">
      <Grid.Column align="center">
        <Image src={sigmaLogo} centered className="logo" />
        <Header as="h1" className="title">
          Prueba de desarrollo Sigma
        </Header>
        <Header.Subheader className="subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
          <br />
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and
          <br />
          scrambled it to make a type specimen book.
        </Header.Subheader>
      </Grid.Column>
    </Container>
  );
}

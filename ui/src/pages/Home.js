import React from "react";
import useFetch from "use-http";
import { Container, Grid, Image, Segment } from "semantic-ui-react";

import "./Home.css";

import BodyImage from "../assets/images/sigma-bodyImage.png";
import FormContact from "../components/FormContact/FormContact";
import { Error, Loading } from "../components/unexpected";
import HeaderInfo from "../components/Header/Header";

import { UserService } from "../services";

export default function Home() {
  const service = new UserService();
  const { url } = service.create();
  const { post, error, loading, response } = useFetch(url);

  return (
    <>
      {error && <Error />}
      {loading && <Loading />}
      <HeaderInfo />
      <Container className="containerBody">
        <Grid.Column>
          <Grid stackable columns={2}>
            <Grid.Column>
              <Image src={BodyImage} size="large" />
            </Grid.Column>
            <Grid.Column>
              <Segment className="cardForm">
                <FormContact post={post} response={response} />
              </Segment>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Container>
    </>
  );
}

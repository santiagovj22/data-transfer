import React, { useEffect, useState } from "react";
import useFetch from "use-http";

import { Form, Input, Button, Container, Grid } from "semantic-ui-react";

import { LocationService } from "../../services";
import "./FormContact.css";

const initState = {
  name: "",
  email: "",
};

export default function FormContact({ post, response }) {
  const service = new LocationService();
  const { url } = service.getLocation();
  const { get } = useFetch(url);
  const [form, setForm] = useState(initState);
  const [locations, setLocations] = useState({});
  const [city, setCity] = useState([]);
  const [departments, setDepartments] = useState([]);

  const getLocation = async () => {
    const getData = await get();
    setLocations(getData);
    fillSelect();
  };
  const arrayDepartamentos = [];
  const arrayCiudades = [];

  function fillSelect() {
    let add = 0;
    for (const key in locations) {
      arrayCiudades.push(locations[key]);
      arrayDepartamentos.push({ title: key, key: 1 + add, value: key });
      add++;
    }
    setDepartments(arrayDepartamentos);
    setCity(arrayCiudades);
  }

  useEffect(() => {
    getLocation();
  }, [departments]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    await post(form);
    if (response.ok) alert("Tu informacion ha sido recibida satisfactoriamente");
    e.target.reset();
    setForm("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Departamento*</label>
          <select name="department" onChange={handleChange} required>
            {departments &&
              departments.length > 0 &&
              departments.map((name, key) => (
                <option key={key + 1}>{name.title}</option>
              ))}
          </select>
        </Form.Field>
        <Form.Field>
          <label>Ciudad*</label>
          <select name="city" onChange={handleChange} required>
            <option disabled selected>
              Medellin
            </option>
            <option value="Medellin">Medellin</option>
            <option value="Bogota">Bogota</option>
            <option value="Barranquilla">Barranquilla</option>
            <option value="Cucuta">Cucuta</option>
            {/* {countryOptions.map((cityName, index) => (
              <option key={index+1}>{cityName}</option>
            ))} */}
          </select>
        </Form.Field>
        <Form.Field>
          <label>Nombre*</label>
          <Input
            name="name"
            placeholder="Pepito de Jesus"
            onChange={handleChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Correo*</label>
          <Input
            name="email"
            type="email"
            placeholder="Pepitodejesus@gmail.com"
            onChange={handleChange}
            required
          />
        </Form.Field>
        <Grid.Column align="center">
          <Button type="submit" className="buttonSubmit" size="huge">
            <h4 className="buttonText">ENVIAR</h4>
          </Button>
        </Grid.Column>
      </Form>
    </Container>
  );
}

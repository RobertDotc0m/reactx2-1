import React from "react";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ foto, nombre, descripcion, colorBoton, tipoDeRaza }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="cartita">
        <Card.Img className="footo" variant="top" src={foto} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Tags colorBoton={colorBoton} tipoDeRaza={tipoDeRaza} />
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;

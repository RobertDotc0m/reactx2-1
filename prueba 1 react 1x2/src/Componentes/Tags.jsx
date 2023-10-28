import React from "react";
import Badge from "react-bootstrap/Badge";

const Tags = ({ tipoDeRaza, colorBoton }) => {
  return (
    <div>
      <Badge className="boton" bg={colorBoton}>
        {tipoDeRaza}{" "}
      </Badge>
    </div>
  );
};

export default Tags;

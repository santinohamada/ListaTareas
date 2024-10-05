import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";
import React from "react";

const ListaTareas = React.memo(({ listaTareas, borrarTarea,setTareaSeleccionada}) => {
  return (
    <ListGroup>
      {listaTareas.map((item) => (
        <ItemTarea
          key={item._id}
          tarea={item}
          borrarTarea={borrarTarea}
          setTareaSeleccionada={setTareaSeleccionada}
        ></ItemTarea>
      ))}
    </ListGroup>
  );
});

export default ListaTareas;

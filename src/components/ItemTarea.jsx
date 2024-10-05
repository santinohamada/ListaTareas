import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ tarea, borrarTarea,setTareaSeleccionada }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div>{tarea.tarea}</div>
      <div>
        <Button
          variant="warning"
          onClick={() => {
            setTareaSeleccionada(tarea);
            console.log(tarea)
          }}
        >
          Editar
        </Button>{" "}
        <Button variant="danger" onClick={() => borrarTarea(tarea)}>
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;

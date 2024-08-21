import { Form, Button } from "react-bootstrap";
const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="agrega una tarea" />
          <Button variant="secondary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioTarea;

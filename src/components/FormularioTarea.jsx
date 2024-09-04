import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const tareasLocalstorage = JSON.parse(localStorage.getItem('tareas')) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalstorage);


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
useEffect(()=>
  localStorage.setItem("tareas",JSON.stringify(listaTareas))
  ,[listaTareas])
  const onSubmit = (data) => {
    console.log(data)
    setListaTareas([...listaTareas, data.tarea]);
    reset();
  };

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = listaTareas.filter((item) => item !== nombreTarea);
    setListaTareas(tareasFiltradas);
  };
  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength:{
                value:3,
                message:"La tarea debe contener como minimo 3 caracteres"
              },
              maxLength:{
                value:20,
                message:"La tarea debe contener como maximo 20 caracteres"
              }
            })}
            type="text"
            placeholder="agrega una tarea"

          />
          <Button variant="secondary" type="submit">
            Enviar
          </Button>
        </Form.Group>
          <Form.Text className="text-danger">
            {errors.tarea?.message}
          </Form.Text>
      </Form>
      <ListaTareas
        listaTareas={listaTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </section>
  );
};

export default FormularioTarea;

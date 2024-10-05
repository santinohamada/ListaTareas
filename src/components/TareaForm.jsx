import React, { useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";


const TareaForm = ({onSubmit,tareaSeleccionada,setTareaSeleccionada}) => {
    useEffect(()=>{
        if(tareaSeleccionada!==null){
            setValue("tarea",tareaSeleccionada.tarea)
            
            
        }
    },[tareaSeleccionada])
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
      } = useForm();
      
      const handleFormSubmit = (data) => {
        
        onSubmit(data);
        setTareaSeleccionada(null)
        reset()
      };
    
    return (
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 3,
                message: "La tarea debe contener como minimo 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "La tarea debe contener como maximo 20 caracteres",
              },
            })}
            type="text"
            placeholder="agrega una tarea"
          />
          <Button variant="secondary" type="submit">
            {!tareaSeleccionada? "Enviar" : "Editar"}
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.tarea?.message}</Form.Text>
      </Form>
    );
};

export default TareaForm;
import ListaTareas from "./ListaTareas";
import {
  listarTareas,
  agregarTarea,
  borrarTareaFront,
  editarTareaFront
} from "../helper/queries";
import { useCallback, useEffect, useState } from "react";
import TareaForm from "./TareaForm";
const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  const [editarTareas, setEditarTarea] = useState(false);
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  const NuevaTarea = async (data) => {
    const tarea = await agregarTarea(data);

    const dato = await tarea.json();
    setListaTareas([...listaTareas, dato]);
  };

  useEffect(() => {
    const obtenerTareas = async () => {
      const tareas = await listarTareas();
      const datos = await tareas.json();
      setListaTareas(datos);
    };
    obtenerTareas();
  }, []);
  const onSubmit = async (data) => {
    
    if (tareaSeleccionada !== null) {
      const nuevaLista = listaTareas.map((tarea) => {
        if (tarea._id == tareaSeleccionada._id) {
          tarea.tarea = data.tarea;
        }
        return tarea
      });
      
      setListaTareas(nuevaLista)
      await editarTareaFront(tareaSeleccionada._id,data)
  
    } else {
      NuevaTarea(data);
    }
    
  };

  const borrarTarea = useCallback(
    async (tarea) => {
      await borrarTareaFront(tarea);
      const tareasFiltradas = listaTareas.filter(
        (item) => item.tarea !== tarea.tarea
      );
      setListaTareas(tareasFiltradas);
    },
    [listaTareas]
  );


  return (
    <section>
      <TareaForm
        onSubmit={onSubmit}
        tareaSeleccionada={tareaSeleccionada}
        setTareaSeleccionada={setTareaSeleccionada}
      ></TareaForm>
      <ListaTareas
        setEditarTarea={setEditarTarea}
        setTareaSeleccionada={setTareaSeleccionada}
        listaTareas={listaTareas}
        borrarTarea={borrarTarea}
      ></ListaTareas>
    </section>
  );
};

export default FormularioTarea;

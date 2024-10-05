const URLTareas = import.meta.env.VITE_API_TAREAS
export const listarTareas = async ()=>{
    const tareas = await fetch(URLTareas)
    
    return tareas
}
export const agregarTarea = async (tarea)=>{
    const tareaNueva = await fetch(URLTareas,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(tarea)
        

    }
)
return tareaNueva
}

export const borrarTareaFront = async(tarea)=>{
    await fetch(URLTareas + "/" + tarea._id,{
        method:"DELETE"
        
    })
}
export const editarTareaFront = async(id,tareaModificada)=>{
    await fetch(URLTareas + "/" + id,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(tareaModificada)
        
    })
}
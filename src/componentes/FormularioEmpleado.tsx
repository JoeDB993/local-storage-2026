import type React from "react";
import useFormularioEmpleado from "../hooks/useFormularioEmpleado";
import type { Props  } from "../interfaces/Props";


const FormularioEmpleado: React.FC<Props> = ({ 
  empleadoEditar, 
  setEmpleadoEditar, 
  agregarActualizarEmpleado}) => {
  
    const {
      formularioDatos,
      manejarCambio,
      manejarEnvio,
      manejarCancelar,
    } = 
    useFormularioEmpleado(empleadoEditar,setEmpleadoEditar, 
      agregarActualizarEmpleado)
  
    return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font semibold mb-4 text-gray-700">
        {empleadoEditar ? "Editar Empleado" : "Agregar Empleado"}
      </h2>
      <form onSubmit={manejarEnvio}>
        <div>
          <label className="bloack text-gray-700 mb-1">
            Nombre:
            <input className="w-full border px-3 py-2 rounded" name="nombre" value={formularioDatos.nombre} onChange={manejarCambio}/>
          </label>
        </div>
        <div className="mb-4">
          <label className="bloack text-gray-700 mb-1">
            Cargo:
            <input className="w-full border px-3 py-2 rounded" name="cargo" value={formularioDatos.cargo} onChange={manejarCambio}/>
          </label >
        </div>
        <div className="mb-4">
          <label className="bloack text-gray-700 mb-1">
            Departamento:
            <input className="w-full border px-3 py-2 rounded" name="departamento" value={formularioDatos.departamento} onChange={manejarCambio}/>
          </label>
        </div>
        <div className="flex gap-2 justify-end">
          <button type="button" onClick={manejarCancelar} className= "px-4 py-2 bg-gray-200 rounded" >Cancelar</button>
          <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded ">{empleadoEditar ? "Actualizar" : "Agregar"}</button>
        </div>
      </form>
    </div>

  );
}

export default FormularioEmpleado;
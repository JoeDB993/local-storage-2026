import type React from "react";
import { useEmpleado } from "../hooks/useEmpleado";
import FormularioEmpleado from "./FormularioEmpleado";
import ListaEmpleado from "./ListaEmpleado";

const GestorEmpleado: React.FC = () => {
  const {
    empleados,
    empleadoEditar,
    setEmpleadoEditar,
    agregarActualizarEmpleado,
    eliminarEmpleado,
  } = useEmpleado();

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center my-6 text-gray-800">
        Gestor de Empleados
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <FormularioEmpleado
            agregarActualizarEmpleado={agregarActualizarEmpleado}
            empleadoEditar={empleadoEditar}
            setEmpleadoEditar={setEmpleadoEditar}
          />
        </div>
        <div className="md:col-span-2">
          <ListaEmpleado
            empleados={empleados}
            setEmpleadoEditar={setEmpleadoEditar}
            eliminarEmpleado={eliminarEmpleado}
          />
        </div>
      </div>
    </div>
  );
};

export default GestorEmpleado;
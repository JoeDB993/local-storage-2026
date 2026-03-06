import { useEffect, useState } from "react"; // ✅ React no necesita importarse por separado en proyectos modernos

import type { Empleado } from "../interfaces/Empleados";
import type { FormularioDatos } from "../interfaces/FormularioDatos";
import Swal from "sweetalert2";

const useFormularioEmpleado = (
  empleadoEditar: Empleado | null,
  setEmpleadoEditar: ((empleado: Empleado | null) => void) | null,
  agregarActualizarEmpleado: (e: Empleado) => void
) => {
  const [formularioDatos, setFormularioDatos] = useState<FormularioDatos>({
    nombre: "",
    cargo: "",
    departamento: "",
  });

  useEffect(() => {
    if (empleadoEditar) {
      setFormularioDatos({
        nombre: empleadoEditar.nombre,
        cargo: empleadoEditar.cargo,
        departamento: empleadoEditar.departamento,
      });
    }
  }, [empleadoEditar]);

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // ✅ Se eliminó e.preventDefault(), no aplica en onChange
    setFormularioDatos((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // useFormularioEmpleado.ts
const manejarEnvio = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();

  if (
    !formularioDatos.nombre.trim() ||
    !formularioDatos.cargo.trim() ||
    !formularioDatos.departamento.trim()
  ) {
    Swal.fire("Error", "Todos los campos son obligatorios", "error");
    return;
  }

  // ✅ Si hay empleado editando, conserva su id
  const empleadoAEnviar: Empleado = empleadoEditar
    ? { ...formularioDatos, id: empleadoEditar.id }
    : { ...formularioDatos };

  agregarActualizarEmpleado(empleadoAEnviar);
  setFormularioDatos({ nombre: "", cargo: "", departamento: "" });
};

  const manejarCancelar = (): void => {
    setFormularioDatos({ nombre: "", cargo: "", departamento: "" }); // Limpia el formulario
    if (setEmpleadoEditar) {
      setEmpleadoEditar(null); // Sale del modo edición si hay un setter disponible
    }
  };

  return {
    formularioDatos,
    manejarCambio,
    manejarEnvio,
    manejarCancelar,
  };
};

export default useFormularioEmpleado;
import { useEffect, useState } from "react";
import type { Empleado } from "../interfaces/Empleados";
import Swal from "sweetalert2";

export const useEmpleado = () => {
  const [empleados, setEmpleados] = useState<Empleado[]>(() => {
    const empleadosGuardados = localStorage.getItem("empleados");
    return empleadosGuardados ? JSON.parse(empleadosGuardados) : [];
  });

  const [empleadoEditar, setEmpleadoEditar] = useState<Empleado | null>(null);

  useEffect(() => {
    localStorage.setItem("empleados", JSON.stringify(empleados));
  }, [empleados]);

  const agregarActualizarEmpleado = (empleado: Empleado): void => {
    if (!empleado.id) {
      // ✅ Asigna el id aquí, no mutes el parámetro directamente
      const nuevoEmpleado = { ...empleado, id: Date.now().toString() };
      setEmpleados((prev) => [nuevoEmpleado, ...prev]);
      Swal.fire({
        icon: "success",
        title: "Empleado agregado correctamente",
      });
    } else {
      setEmpleados((prev) =>
        prev.map((e) => (e.id === empleado.id ? empleado : e))
      );
      setEmpleadoEditar(null);
      Swal.fire({
        icon: "success",
        title: "Empleado actualizado correctamente",
      });
    }
  };

  const eliminarEmpleado = (id: string): void => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",   // ✅ typo corregido ("Mo" → "No")
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",           // ✅ era cancelButtonText
      cancelButtonText: "Cancelar",        // ✅ añadido
      confirmButtonText: "Sí, eliminar",   // ✅ era "cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        setEmpleados((prev) => prev.filter((emp) => emp.id !== id)); // ✅ usa prev
        Swal.fire("Eliminado", "El empleado ha sido eliminado", "success");
      }
    });
  };

  return {
    empleados,
    empleadoEditar,
    setEmpleadoEditar,
    agregarActualizarEmpleado,
    eliminarEmpleado,
  };
};
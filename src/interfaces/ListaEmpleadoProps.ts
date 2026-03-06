import type { Empleado } from "./Empleados"

export interface ListaEmpleadoProps {
  empleados: Empleado[];
  setEmpleadoEditar: (empleado: Empleado) => void;
  eliminarEmpleado: (id: string) => void;
}
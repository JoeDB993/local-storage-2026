import type { Empleado }  from "./Empleados";

export interface Props {
  agreagrActualizarEmpleado: (e: Empleado) => void;
  empleadoEditar: Empleado | null;
  setEmpleadoEditar: (e: Empleado | null) => void;
}
import React, { useState, ChangeEventHandler } from "react";
import { Button } from "..";
import { FormControl } from "../molecules/FormControl";

interface ValueShipmentForm {
  zip_from: string;
  zip_to: string;
  weight: string;
  height: string;
  width: string;
  length: string;
}

export const ShipmentForm = () => {
  const [formulario, setFormulario] = useState<ValueShipmentForm>({
    zip_from: "",
    height: "",
    length: "",
    weight: "",
    width: "",
    zip_to: "",
  });

  const { zip_from, height, length, weight, width, zip_to } = formulario;

  const onChangeForm: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="w-4/12 max-w-screen-lg bg-slate-50 rounded-lg p-5 shadow-lg">
      <h3 className="pb-5 text-4xl font-bold text-center text-gray-700">Cotiza Tu Envio</h3>
      <div>
        <FormControl
          idInput="zip_from"
          nameInput="zip_from"
          labelText="Codigo Postal de Origen"
          onChange={onChangeForm}
          textError={""}
          typeInput="text"
          value={zip_from}
        />
        <FormControl
          idInput="zip_to"
          nameInput="zip_to"
          labelText="Codigo Postal de Destino"
          onChange={onChangeForm}
          textError={""}
          typeInput="text"
          value={zip_to}
        />
        <div className="my-3 text-center">Medidas del Paquete</div>
        <div className="flex flex-wrap justify-around">
          <FormControl
            idInput="length"
            nameInput="length"
            labelText="Largo (cm)"
            onChange={onChangeForm}
            textError={""}
            typeInput="text"
            value={length}
            size="50"
          />
          <FormControl
            idInput="height"
            nameInput="height"
            labelText="Alto (cm)"
            onChange={onChangeForm}
            textError={""}
            typeInput="text"
            value={height}
            size="50"
          />
          <FormControl
            idInput="width"
            nameInput="width"
            labelText="Ancho (cm)"
            onChange={onChangeForm}
            textError={""}
            typeInput="text"
            value={width}
            size="50"
          />
          <FormControl
            idInput="weight"
            nameInput="weight"
            labelText="Peso (kg)"
            onChange={onChangeForm}
            textError={""}
            typeInput="text"
            value={weight}
            size="50"
          />
        </div>
        <Button className="w-full bg-sky-600 rounded-lg p-2 text-white shadow">
          Enviar Cotizacion
        </Button>
      </div>
    </form>
  );
};

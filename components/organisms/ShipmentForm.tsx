import React, { useState, ChangeEventHandler, FormEventHandler } from "react";
import { useDispatch } from "react-redux";
import { Button, FormControl } from "..";
import { getBodyShipment } from "utils";
import { startAddShipment } from "redux/actions";

var only_numbers = /^\d+$/;

enum FormErrors {
    ALL_REQUIRED,
    VALIDATION_ERROR,
}

interface ValueShipmentForm {
    zip_from: string;
    zip_to: string;
    weight: string;
    height: string;
    width: string;
    length: string;
}

interface StateError {
    error: FormErrors | null;
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
    const dispatch = useDispatch();

    const [error, setError] = useState<StateError>({ error: null });

    const { zip_from, height, length, weight, width, zip_to } = formulario;

    const onChangeForm: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setError({ error: null });

        if (
            zip_from.trim() === "" ||
            height.trim() === "" ||
            length.trim() === "" ||
            weight.trim() === "" ||
            width.trim() === "" ||
            zip_to.trim() === ""
        ) {
            setError({ error: FormErrors.ALL_REQUIRED });
            return;
        } else if (
            !only_numbers.test(zip_from.trim()) ||
            !only_numbers.test(height.trim()) ||
            !only_numbers.test(length.trim()) ||
            !only_numbers.test(weight.trim()) ||
            !only_numbers.test(width.trim()) ||
            !only_numbers.test(zip_to.trim())
        ) {
            setError({ error: FormErrors.VALIDATION_ERROR });
            return;
        }

        const body = getBodyShipment(formulario);
        dispatch(startAddShipment(body))
    };

    return (
        <form
            onSubmit={onSubmit}
            className='max-w-lg bg-slate-50 rounded-lg p-5 shadow-lg'
        >
            <h3 className='pb-5 text-4xl font-bold text-center text-gray-700'>
                Cotiza Tu Envio
            </h3>
            <div>
                <FormControl
                    idInput='zip_from'
                    nameInput='zip_from'
                    labelText='Codigo Postal de Origen'
                    onChange={onChangeForm}
                    typeInput='text'
                    value={zip_from}
                />
                <FormControl
                    idInput='zip_to'
                    nameInput='zip_to'
                    labelText='Codigo Postal de Destino'
                    onChange={onChangeForm}
                    typeInput='text'
                    value={zip_to}
                />
                <div className='my-3 text-center'>Medidas del Paquete</div>
                <div className='flex flex-wrap justify-around'>
                    <FormControl
                        idInput='length'
                        nameInput='length'
                        labelText='Largo (cm)'
                        onChange={onChangeForm}
                        typeInput='text'
                        value={length}
                        size='50'
                    />
                    <FormControl
                        idInput='height'
                        nameInput='height'
                        labelText='Alto (cm)'
                        onChange={onChangeForm}
                        typeInput='text'
                        value={height}
                        size='50'
                    />
                    <FormControl
                        idInput='width'
                        nameInput='width'
                        labelText='Ancho (cm)'
                        onChange={onChangeForm}
                        typeInput='text'
                        value={width}
                        size='50'
                    />
                    <FormControl
                        idInput='weight'
                        nameInput='weight'
                        labelText='Peso (kg)'
                        onChange={onChangeForm}
                        typeInput='text'
                        value={weight}
                        size='50'
                    />
                </div>
                <div className='w-full my-2 text-red-500'>
                    {error?.error === FormErrors.ALL_REQUIRED && (
                        <span>Todos los campos son requeridos</span>
                    )}
                    {error?.error === FormErrors.VALIDATION_ERROR && (
                        <span>Todos los campos deben ser numeros</span>
                    )}
                </div>
                <Button
                    type='submit'
                    className='w-full bg-sky-600 rounded-lg p-2 text-white shadow'
                >
                    Enviar Cotizacion
                </Button>
            </div>
        </form>
    );
};

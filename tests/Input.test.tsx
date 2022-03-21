import React from "react";
import { shallow } from "enzyme";
import { Input } from "../components/atoms/Input";

describe("Pruebas <ErrorMessage>", () => {
    const onChange = jest.fn();
    let wrapper = shallow(
        <Input id='inputPrueba' type='text' value='' onChange={onChange} />
    );

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(
            <Input id='inputPrueba' type='text' value='' onChange={onChange} />
        );
    });

    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe ejecutar onchan correctamente", () => {
        const input = wrapper.find("input");
        const value = "Hola Mundo";
        const event = { target: { value } };
        input.simulate("change", event);

        expect(onChange).toHaveBeenCalledWith(event);
    });
});

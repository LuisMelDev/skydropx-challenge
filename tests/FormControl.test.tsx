import React from "react";
import { shallow } from "enzyme";
import { FormControl } from "../components/molecules/FormControl";

describe("Pruebas <FormControl>", () => {
    const onChange = jest.fn();
    let wrapper = shallow(
        <FormControl 
            idInput='idPrueba'
            onChange={onChange}
            labelText='labelTest'
            typeInput="text"
            value=""
        />
    );

    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
    
});

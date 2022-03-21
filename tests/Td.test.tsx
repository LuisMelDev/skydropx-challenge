import React from "react";
import { shallow } from "enzyme";
import { Td } from "../components/atoms/Td";


describe("Pruebas <Td>", () => {
    
    let wrapper = shallow(<Td><span>Text prueba</span></Td>);
    
    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
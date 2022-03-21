import React from "react";
import { shallow } from "enzyme";
import { Button } from "../components/atoms/Button";


describe("Pruebas <Button>", () => {
    
    let wrapper = shallow(<Button>hola</Button>);
    
    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
});

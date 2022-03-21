import React from "react";
import { shallow } from "enzyme";
import { Label } from "../components/atoms/Label";


describe("Pruebas <Label>", () => {
    
    let wrapper = shallow(<Label htmlFor="input" text="texto" />);
    
    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
});

import React from "react";
import { shallow } from "enzyme";
import { Spinner } from "../components/atoms/Spinner";


describe("Pruebas <Spinner>", () => {
    
    let wrapper = shallow(<Spinner />);
    
    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
});

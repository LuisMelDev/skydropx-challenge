import React from "react";
import { shallow } from "enzyme";
import { Tab } from "../components/atoms/Tab";


describe("Pruebas <Tab>", () => {
    
    const texto = "texto"
    let wrapper = shallow(<Tab text={texto} />);
    
    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("debe de mostrarse el texto correctamente", () => {
        expect(wrapper.find("span").children().find("span").children().text()).toBe(texto);
    });
});

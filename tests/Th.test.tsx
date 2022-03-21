import React from "react";
import { shallow } from "enzyme";
import { Th } from "../components/atoms/Th";

describe("Pruebas <Th>", () => {
    const name = "texto";
    let wrapper = shallow(<Th name={name} />);

    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
    test("debe de mostrarse el nombre correctamente", () => {
        expect(wrapper.find("th").text()).toBe(name);
    });
});

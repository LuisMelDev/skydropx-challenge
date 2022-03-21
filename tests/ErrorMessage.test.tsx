import React from "react";
import { shallow } from "enzyme";
import { ErrorMessage } from "../components/atoms/ErrorMessage";

describe("Pruebas <ErrorMessage>", () => {
    const message = "mensaje de error";
    let wrapper = shallow(<ErrorMessage message={message} />);

    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de mostrarse el mensaje correctamente", () => {
        expect(wrapper.find("div").children().find("div").text()).toBe(message);
    });
});

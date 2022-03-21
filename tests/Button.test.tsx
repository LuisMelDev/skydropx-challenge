import React from "react";
import { shallow } from "enzyme";
import { Button } from "../components/atoms/Button";

const wrapper = shallow(<Button>hola</Button>);

describe("Button", () => {
    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
});

import React from "react";
import { shallow } from "enzyme";
import { TableHead } from "../components/molecules/TableHead";

const heads = ["uno", "dos"];

describe("Pruebas <TableHead>", () => {
    let wrapper = shallow(<TableHead heads={heads} />);

    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
});

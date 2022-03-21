import React from "react";
import { shallow } from "enzyme";
import { ItemTable } from "../components/molecules/ItemTable";

const rate = {
    created_at: "2022-03-19T23:03:42.909-06:00",
    updated_at: "2022-03-19T23:03:42.945-06:00",
    amount_local: "134.0",
    currency_local: "MXN",
    provider: "CARSSA",
    service_level_name: "Nacional",
    service_level_code: "NACIONAL",
    service_level_terms: null,
    days: 10,
    duration_terms: null,
    zone: null,
    arrives_by: null,
    out_of_area: false,
    out_of_area_pricing: "0.0",
    total_pricing: "134.0",
    is_ocurre: false,
};

describe("Pruebas <ItemTable>", () => {
    const onClick = jest.fn();
    let wrapper = shallow(<ItemTable rate={rate} recomended onClick={onClick} />);

    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

});

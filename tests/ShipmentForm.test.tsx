import React from "react";
import { mount } from "enzyme";
import { ShipmentForm } from "../components/organisms/ShipmentForm";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startAddShipment } from "redux/actions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("redux/actions", () => ({
    startAddShipment: jest.fn(),
}));

const initState = {
    auth: {
        uid: "1",
        name: "Fernando",
    },
    ui: {
        loading: false,
        msgError: null,
    },
    notes: {
        active: {
            id: 1234,
            title: "Hola",
            body: "mundo",
            date: 0,
        },
        notes: [],
    },
};

let store = mockStore(initState);

store.dispatch = jest.fn();

describe("Pruebas <ShipmentForm>", () => {
    let wrapper = mount(
        <Provider store={store}>
            <ShipmentForm />
        </Provider>
    );

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = mount(
            <Provider store={store}>
                <ShipmentForm />
            </Provider>
        );
    });

    test("debe de mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe mostrar el mensaje 'Todos los campos son requeridos'", () => {
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        expect(wrapper.find("span").text().trim()).toBe(
            "Todos los campos son requeridos"
        );
    });

    test("Debe mostrar el mensaje 'Todos los campos deben ser numeros' y cambiar value de los inputs", () => {
        const value = "asdsa";
        const event = (name: string) => ({ target: { value, name } });

        wrapper
            .find("input[name='zip_from']")
            .simulate("change", event("zip_from"));
        wrapper
            .find("input[name='height']")
            .simulate("change", event("height"));
        wrapper
            .find("input[name='length']")
            .simulate("change", event("length"));
        wrapper
            .find("input[name='weight']")
            .simulate("change", event("weight"));
        wrapper.find("input[name='width']").simulate("change", event("width"));
        wrapper
            .find("input[name='zip_to']")
            .simulate("change", event("zip_to"));
        wrapper.find("form").simulate("submit", { preventDefault() {} });
        expect(wrapper.find("span").text().trim()).toBe(
            "Todos los campos deben ser numeros"
        );
    });
});

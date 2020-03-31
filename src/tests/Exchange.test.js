import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import Exchange from "../component/Exchange";

test("renders component", async () => {
        const { getByText } = render(<Exchange/>);
        expect(getByText("EUR: 0")).toBeInTheDocument();
    }
);

test("calculates result after user types value", async () => {
    const { getByLabelText, getByText, debug } = render(<Exchange/>);
    const input = getByLabelText("pln-input");
    console.log(debug);
    fireEvent.change(input, { target: { value: "122" } });
    const text= await waitForElement(() => getByText("EUR: 555.38"));
    console.log(debug);
    expect(text).toBeInTheDocument();
});
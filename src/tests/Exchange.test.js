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
    const fakeRatesResponse =
        [
            {
                rates: [
                    {currency: "euro", code: "EUR", mid: 4.5694},
                    {currency: "forint (Węgry)", code: "HUF", mid: 0.012533},
                    {currency: "frank szwajcarski", code: "CHF", mid: 4.3236},
                    {currency: "funt szterling", code: "GBP", mid: 5.1588}
                ]
            }
        ];
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
        return Promise.resolve({
            json: () => Promise.resolve(fakeRatesResponse),
        })
    });
    const { findByLabelText, getByText, findByText } = render(<Exchange/>);
    const input = await findByLabelText("Value:");
    fireEvent.change(input, { target: { value: 122 } });
    const button = getByText('Convert');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const text = await findByText("EUR: " + (4.5694*122).toFixed(2));
    expect(text).toBeInTheDocument();
});

test("view result and message after user types wrong value", async () => {
    const fakeRatesResponse =
        [
            {
                rates: [
                    {currency: "euro", code: "EUR", mid: 4.5694},
                    {currency: "forint (Węgry)", code: "HUF", mid: 0.012533},
                    {currency: "frank szwajcarski", code: "CHF", mid: 4.3236},
                    {currency: "funt szterling", code: "GBP", mid: 5.1588}
                ]
            }
        ];
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
        return Promise.resolve({
            json: () => Promise.resolve(fakeRatesResponse),
        })
    });
    const { findByLabelText, getByText, findByText } = render(<Exchange/>);
    const input = await findByLabelText("Value:");
    fireEvent.change(input, { target: { value: -3 } });
    const button = getByText('Convert');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const text = await findByText("EUR: 0");
    const textError = await findByText("Wrong value...");

    expect(text).toBeInTheDocument();
    expect(textError).toBeInTheDocument();
});
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Color from "./Color";

it("renders without crashing", function () {
  render(
  <MemoryRouter>
    <Color />
  </MemoryRouter>
  
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
        <Color />
    </MemoryRouter>
);
  expect(asFragment()).toMatchSnapshot();
});
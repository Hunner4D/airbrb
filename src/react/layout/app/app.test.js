import React from "react";
import { shallow } from "enzyme";
import App from "./index.js";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

afterEach(() => {
  wrapped.unmount();
});

it("shows container div with 5 nested divs", () => {
  expect(wrapped.find("div.container").children().length).toEqual(5);
});

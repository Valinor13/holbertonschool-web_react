import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "../../config/setupTests";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const wrapper = shallow(<Login />);

describe("Test suite for rendering the Login component", () => {
  it("test that Login renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Login />, div);
    console.log("true");
    ReactDOM.unmountComponentAtNode(div);
  });

  it("test that Login renders with App-body", () => {
    const element = wrapper.find("div#appBody");
    expect(element.length).toBe(1);
  });

  it("test that Login renders with input tag", () => {
    const element = wrapper.find("input");
    expect(element.length).toBe(3);
  });

  it("test that Login renders with label tag", () => {
    const element = wrapper.find("label");
    expect(element.length).toBe(2);
  });

  it("test to verify that the Login submit input is disabled by default", () => {
    const element = wrapper.find("#submit");
    expect(element.props().disabled).toBe(true);
  });

  it("test to verify that the Login submit input is enabled when the email and password fields are filled", () => {
    const mountedWrapper = mount(<Login />);
    const email = mountedWrapper.find("#email");
    const password = mountedWrapper.find("#password");
    const submit = mountedWrapper.find("#submit");
    expect(submit.props().disabled).toBe(true);
    email.simulate("change", { target: { value: "test" } });
    password.simulate("change", { target: { value: "test" } });
    mountedWrapper.setState({enableSubmit: true});
    expect(submit.props().disabled).toBe(true);
    mountedWrapper.unmount();
  });
});

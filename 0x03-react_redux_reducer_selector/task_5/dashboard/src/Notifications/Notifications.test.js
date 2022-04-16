import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "../../config/setupTests";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3,
    type: "urgent",
    html: { __html: `<strong>Urgent requirement</strong> - complete by EOD` },
  },
];

describe("Test suite for Notifications", () => {
  it("tests Notifications renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Notifications />, div);
    console.log("true");
    ReactDOM.unmountComponentAtNode(div);
  });

  // it("test that click on close icon calls handleHideDrawer and updates displayDrawer to false", () => {
  //   const wrapper = mount(<Notifications />);
  //   wrapper.setState({ displayDrawer: true });
  //   wrapper.find("#close-icon").simulate("click");
  //   expect(wrapper.state("displayDrawer")).toBe(true);
  //   wrapper.unmount();
  // });

  it("test to verify that clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );
    wrapper.update();
    wrapper.find("p").first().simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  // it("test that Notifications.markNotificationAsRead calls with the correct id", () => {
  //   const mockLog = jest.spyOn(console, "log");
  //   const wrapper = shallow(<Notifications />);
  //   wrapper.instance().markNotificationAsRead(99);
  //   expect(mockLog).toHaveBeenCalledWith(
  //     "Notification 99 has been marked as read"
  //   );
  //   jest.restoreAllMocks();
  // });

  it("tests that Notifications renders paragraph when list is empty", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const element = wrapper.find("p").last();
    expect(element.text()).toBe("No new notification for now");
  });

  it("tests that Notifications renders when list is not empty", () => {
    const wrapper = mount(
      <Notifications
        listNotifications={listNotifications}
      />)
    wrapper.setState({ displayDrawer: true });
    const element = wrapper.find(NotificationItem);
    expect(element.length).toBe(0);
    wrapper.unmount();
  });

  it("tests that Notifications renders the correct text", () => {
    const wrapper = mount(
      <Notifications
        listNotifications={listNotifications}
      />)
    wrapper.setState({ displayDrawer: true });
    const element = wrapper.find("p").last();
    expect(element.text()).toBe("Your notifications");
    wrapper.unmount();
  });

  it("tests that Notifications does not render when display is false", () => {
    const wrapper = mount(<Notifications />);
    const element = wrapper.find("p");
    expect(element.length).toBe(1);
    wrapper.unmount();
  });
});

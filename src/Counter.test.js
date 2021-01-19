import { shallow } from "enzyme";
import React from "react";
import Counter from "./Counter";

describe("Counter", () => {
  describe("function", () => {
    const wrapper = shallow(<Counter />);

    test("render without error", () => {
      expect(wrapper.exists()).toBe(true);
    });

    test("clicked button and counter +1", () => {
      wrapper.find("button").simulate("click");
      expect(wrapper.find(".count").text()).toBe("1");
    });
  });

  describe("with name prop", () => {
    const wrapper = shallow(<Counter name="Frankie" />);
    test("render with name", () => {
      expect(wrapper.find(".name").text()).toBe("hi,Frankie");
    });
  });
});

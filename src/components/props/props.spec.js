import { mount } from "@vue/test-utils";
import Message, { validateVariant } from "./Message.vue";

describe("Message", () => {
  it("renders variant correctly", () => {
    const wrapper = mount(Message, {
      props: {
        variant: "success",
      },
    });

    expect(wrapper.classes()).toContain("success");
    expect(wrapper.html()).toContain("Message! success");
  });

  it("validates valid variant", () => {
    ["success", "warning", "error"].forEach((variant) => {
      expect(() => validateVariant(variant)).not.toThrow();
    });
  });

  it("throw an error for invalid variant", () => {
    expect(() => validateVariant("invalid")).toThrow();
  });
});

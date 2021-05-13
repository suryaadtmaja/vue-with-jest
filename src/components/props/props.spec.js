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
  });
});

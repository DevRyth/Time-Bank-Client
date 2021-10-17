import React from "react";

import { Meta } from "@storybook/react";

import Input from "./Input";
import "../../index.css";

export const InputField = (args: any) => <Input {...args} />;

export default {
  title: "Components/Input",
  component: Input,
  args: {
    type: "password",
    name: "password",
    placeholder: "Password",
    className: "",
  },
} as Meta;

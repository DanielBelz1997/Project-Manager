import { useState } from "react";
import { TextInput } from "@mantine/core";
import classes from "../FloatingLabelInput.module.css";
import { NumberInput } from "@mantine/core";
import React from "react";

export function FloatingLabelInput() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const floating = value.trim().length !== 0 || focused || undefined;

  return (
    <TextInput
      label="Project name ?"
      // placeholder="example: Chat"
      required={true}
      classNames={classes}
      value={value}
      // style={{ : "space-evenly" }}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
      autoComplete="nope"
      data-floating={floating}
      labelProps={{ "data-floating": floating }}
    />
  );
}

export function FloatingLabelInputNum2() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const floating = value.trim().length !== 0 || focused || undefined;

  return (
    <TextInput
      label="Subject ?"
      // placeholder="example: Chat"
      required={true}
      classNames={classes}
      value={value}
      style={{ marginLeft: "10px", textAlign: "center" }}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
      autoComplete="nope"
      data-floating={floating}
      labelProps={{ "data-floating": floating }}
    />
  );
}

export function FloatingLabelInputNum3() {
  return (
    <NumberInput
      placeholder="Team count"
      min={2}
      max={10}
      style={{ marginLeft: "10px", textAlign: "center", marginTop: "1em" }}
    />
  );
}

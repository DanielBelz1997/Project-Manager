import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { Group } from "@mantine/core";
import React from "react";

export function DateInput() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <DatePickerInput
      type="range"
      label="Pick dates range:"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
      style={{ marginTop: "-2em", paddingLeft: "4em" }}
      mx="140"
      maw={400}
    />
  );
}

import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import React from "react";

export function DateInput() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <DatePickerInput
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}

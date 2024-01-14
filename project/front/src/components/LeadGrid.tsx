import { Container, Grid, SimpleGrid, Skeleton, rem } from "@mantine/core";
import React, { useState } from "react";
import {
  FloatingLabelInput,
  FloatingLabelInputNum2,
  FloatingLabelInputNum3,
} from "./FloatingLabelInput";
import { TableSelection } from "./TableSelection";
import { DateInput } from "./DateInput";
import { SubmitBotton } from "./BottonSubmit";

const PRIMARY_COL_HEIGHT = rem(390);

export function LeadGrid() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="xl">
      <SimpleGrid cols={{ base: 1, sm: 1 }} spacing="sm">
        <span style={{ marginBottom: "8px" }}>
          fill the following details in order to create a project:
        </span>
        <div style={{ display: "flex" }}>
          <FloatingLabelInput />
          <FloatingLabelInputNum2 />
          <FloatingLabelInputNum3 />
          <DateInput />
        </div>
        <Grid gutter="md">
          <Grid.Col>
            <p>choose the team members:</p>
            <TableSelection />
          </Grid.Col>
          {/* <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col> */}
          {/* <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col> */}
        </Grid>
        <SubmitBotton />
      </SimpleGrid>
    </Container>
  );
}

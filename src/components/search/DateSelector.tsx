import Stack from "@mui/material/Stack";
import { StackCommonStyles } from "./commonStyles";

import { DateSelectorInput } from "./DateSelectorInput";
const styles = {
  Stack: {
    ...StackCommonStyles,
  },
  DateFields: {
    sx: {
      flex: 1,
    },
  },
};

export const DateSelector = () => {
  return (
    <Stack {...styles.Stack}>
      <DateSelectorInput  />
      <DateSelectorInput  />
    </Stack>
  );
};

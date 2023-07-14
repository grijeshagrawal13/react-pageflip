import React, { useRef } from "react";
import { Grid, TextField } from "@mui/material";

interface DualTextBoxProps {
  maxLength: number;
}

const DualTextBox: React.FC<DualTextBoxProps> = ({ maxLength }) => {
  const firstTextBoxRef = useRef<HTMLInputElement | null>(null);
  const secondTextBoxRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length >= maxLength) {
      secondTextBoxRef.current?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && event.currentTarget.value === "") {
      firstTextBoxRef.current?.focus();
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={6}>
        <TextField
          inputRef={firstTextBoxRef}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          label="First Text Box"
          multiline
          rows={20}
          fullWidth
          variant="outlined"
          style={{ marginBottom: "16px" }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          inputRef={secondTextBoxRef}
          label="Second Text Box"
          multiline
          rows={20}
          fullWidth
          variant="outlined"
          style={{ marginBottom: "16px" }}
        />
      </Grid>
    </Grid>
  );
};

export default DualTextBox;

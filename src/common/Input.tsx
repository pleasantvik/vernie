import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import React from "react";

const Input = ({ label, type }: { label: string; type: string }) => {
	return (
		<FormControl fullWidth sx={{ marginTop: 3 }}>
			<TextField id="outlined-error" label={label} type={type} defaultValue="Hello World" />
		</FormControl>
	);
};

export default Input;

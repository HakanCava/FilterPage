import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";
import { useSelectContext } from "../../context/SelectContext";

function valuetext(range) {
  return range;
}

const Search = () => {
  const {date, setDate, setPrice,search, setSearch,range, setRange} = useSelectContext()
 

  const handleChange = (event, newValue) => {
    if (event === "left") {
        setRange([newValue, range[1]]);
      } else if (event === "right") {
        setRange([range[0], newValue]);
      } else {
        setRange(newValue);
      }
  };

  useEffect(()=>{
    setPrice({
        minPrice: range[0],
        maxPrice: range[1],
      })
  },[range,setPrice])


  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        my: 7,
        flexWrap:"wrap"
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          name="search"
          label="search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap:"wrap"
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            flexWrap:"wrap"
          }}
        >
          <Typography>Price: </Typography>
          <input
            type="number"
            value={range[0] || 0}
            onChange={(e) => handleChange("left", parseInt(e.target.value))}
          />
          <Typography> - </Typography>
          <input
            type="number"
            value={range[1] || 0}
            onChange={(e) => handleChange("right", parseInt(e.target.value))}
          />
        </Box>

        <Box sx={{ width: 300 }}>
          <Slider
            min={0}
            max={5000000}
            getAriaLabel={() => "range"}
            value={range}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </Box>

      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Date" value={date} onChange={(e)=>setDate(e)} />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default Search;

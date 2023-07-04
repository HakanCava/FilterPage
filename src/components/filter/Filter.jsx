import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import { turkey, usa, germany } from "../../countryData";
import Checkbox from "@mui/material/Checkbox";

import { useSelectContext } from '../../context/SelectContext'

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Filter = () => {

  const [select, setSelect] = useState("turkey");
  const [data, setData] = useState([]);
  const {choice,setChoice} = useSelectContext()
  const handleChange = (e) => {
    setChoice({ ...choice, [e.target.name]: e.target.value });
    if (e.target.name === "country") {
      setSelect(e.target.value.toLowerCase());
    }
    console.log(choice);
  };

  const list = [
    {
      id: "turkey",
      title: "Turkey",
    },
    {
      id: "usa",
      title: "USA",
    },
    {
      id: "germany",
      title: "Germany",
    },
  ];

  useEffect(() => {
    switch (select) {
      case "turkey":
        setData(turkey);
        break;
      case "usa":
        setData(usa);
        break;
      case "germany":
        setData(germany);
        break;
      default:
        setData("");
        break;
    }
  }, [select]);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        justifyContent: "center",
        flexWrap:"wrap"
      }}
    >
      <Box sx={{ width: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="rentOrsale-label">Rent/Sale</InputLabel>
          <Select
            labelId="rentOrsale-label"
            id="rentOrsale"
            name="rentOrsale"
            value={choice.rentOrsale}
            label="Rent/Sale"
            onChange={handleChange}
          >
            <MenuItem value={"Rent"}>Rent</MenuItem>
            <MenuItem value={"Sale"}>Sale</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            name="country"
            value={choice.country}
            label="Country"
            onChange={handleChange}
          >
            {list.map((item) => (
              <MenuItem value={item.title} key={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            id="state"
            name="state"
            value={choice.state}
            label="State"
            onChange={handleChange}
          >
            {data.map((item) => (
              <MenuItem value={item.state} key={item.id}>
                {item.state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="room-label">Room</InputLabel>
          <Select
            labelId="room-label"
            id="room"
            name="room"
            value={choice.room}
            label="Room"
            onChange={handleChange}
          >
            <MenuItem value={"1+1"}>1+1</MenuItem>
            <MenuItem value={"2+1"}>2+1</MenuItem>
            <MenuItem value={"3+1"}>3+1</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{}}>
        <Rating
          name="rate"
          value={Number(choice.rate)}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <Checkbox {...label} name="reSale" value={!choice.reSale} onChange={handleChange}/>ReSale
      </Box>
    </Box>
  );
};

export default Filter;

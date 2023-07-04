import React from "react";
import Checkbox from "@mui/material/Checkbox";
import "./filter.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";

import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import ForestIcon from "@mui/icons-material/Forest";
import { useSelectContext } from "../../context/SelectContext";

const FilterNav = () => {
  const { selected, handleSelection } = useSelectContext();

  return (
    <div className="filterNavContainer">
      <div className="chechbox">
        <Checkbox
          checked={selected.includes("Ev")}
          onChange={() => handleSelection("Ev")}
          inputProps={{ "aria-label": "controlled" }}
          icon={<HomeOutlinedIcon />}
          checkedIcon={<HomeIcon />}
        />
        <span className="title">HOME</span>
      </div>
      <div className="chechbox">
        <Checkbox
          checked={selected.includes("Residence")}
          onChange={() => handleSelection("Residence")}
          inputProps={{ "aria-label": "controlled" }}
          icon={<HomeWorkOutlinedIcon />}
          checkedIcon={<HomeWorkIcon />}
        />
        <span className="title">RESIDENCE</span>
      </div>
      <div className="chechbox">
        <Checkbox
          checked={selected.includes("Land/Farm")}
          onChange={() => handleSelection("Land/Farm")}
          inputProps={{ "aria-label": "controlled" }}
          icon={<ForestOutlinedIcon />}
          checkedIcon={<ForestIcon />}
        />
        <span className="title">LAND/FARM</span>
      </div>
      <div className="chechbox">
        <Checkbox
          checked={selected.includes("Workplace")}
          onChange={() => handleSelection("Workplace")}
          inputProps={{ "aria-label": "controlled" }}
          icon={<HomeOutlinedIcon />}
          checkedIcon={<HomeIcon />}
        />
        <span className="title">WORKPLACE</span>
      </div>
      <div className="chechbox">
        <Checkbox
          checked={selected.includes("Lake")}
          onChange={() => handleSelection("Lake")}
          inputProps={{ "aria-label": "controlled" }}
          icon={<HomeOutlinedIcon />}
          checkedIcon={<HomeIcon />}
        />
        <span className="title">LAKE</span>
      </div>
      <div className="chechbox">
        <Checkbox
          checked={selected.includes("Historic")}
          onChange={() => handleSelection("Historic")}
          inputProps={{ "aria-label": "controlled" }}
          icon={<HomeOutlinedIcon />}
          checkedIcon={<HomeIcon />}
        />
        <span className="title">HISTORIC</span>
      </div>
      <div className="chechbox">
        <Checkbox
          checked={selected.includes("Rest/Fun")}
          onChange={() => handleSelection("Rest/Fun")}
          inputProps={{ "aria-label": "controlled" }}
          icon={<HomeOutlinedIcon />}
          checkedIcon={<HomeIcon />}
        />
        <span className="title">REST/FUN</span>
      </div>
    </div>
  );
};

export default FilterNav;

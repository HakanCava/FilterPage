import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";

export const SelectContext = createContext();

const SelectProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const [choice, setChoice] = useState({
    rentOrsale: "",
    country: "",
    state: "",
    room: "",
    rate: "0",
    reSale: false,
  });
  const val = [0, 1000000];
  const [range, setRange] = useState(val);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(null);
  const [price, setPrice] = useState({
    minPrice: 0,
    maxPrice: 0,
  });

  const handleSelection = (type) => {
    if (selected.includes(type)) {
      setSelected(selected.filter((selected) => selected !== type));
    } else {
      setSelected([...selected, type]);
    }
  };
 

  const handleSearch = (e) => {
    //! Seçilen tüm değerler kullanarak arama işlemini gerçekleştir
    e.preventDefault();

    try {
      console.log("Arama: ", {selected, choice, search,price,date});
      toastSuccessNotify("Searched successfully!");
    } catch (error) {
      toastErrorNotify("Error");
    }

    
    
  };

  const handleClear = () => {
    setSelected([]);
    setChoice({
      rentOrsale: "",
      country: "",
      state: "",
      room: "",
      rate: "0",
      reSale: false,
    });
    setSearch("");
    setDate(null);
    setPrice({
      minPrice: 0,
      maxPrice: 0,
    });
    setRange(val)
    toastWarnNotify("Clear all box!");
  };

  const values = {
    selected,
    setSelected,
    handleSelection,
    handleSearch,
    handleClear,
    choice,
    setChoice,
    date,
    setDate,
    price,
    setPrice,
    search,
    setSearch,
    range,
    setRange
  };

  return (
    <SelectContext.Provider value={values}>{children}</SelectContext.Provider>
  );
};

export const useSelectContext = () => useContext(SelectContext);

export default SelectProvider;

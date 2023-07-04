import React from "react";
import Slider from "../components/slider/Slider";
import Filter from "../components/filter/Filter";
import FilterNav from "../components/filter/FilterNav";
import Search from "../components/filter/Search";
import Button from "../components/filter/Button";
import "../style/home.css";
import { Link } from "react-router-dom";
import el1 from '../img/el1.jpg'
import el2 from '../img/el2.png'
import kutu from '../img/kutu.png'

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <div className="homeContainer1">
        <FilterNav />
        <Filter />
        <Search />
        <Button />
      </div>

      <div className="homeContainer2">
        <div className="head">
          <p>Touch you life goals easy...</p>
        </div>
        <div className="links">
          <Link to="/buyadvertisement" className="link">
            <img src={el1} alt="" />
            <span> Buy Advertisement</span>
          </Link>
          <Link to="/beagent" className="link">
          <img src={el2} alt="" />
            <span> Be Agent</span>
          </Link>
          <Link to="/agentprofile" className="link">
          <img src={kutu} alt="" />
            <span>Agent Profile <span className="new">NEW</span></span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;

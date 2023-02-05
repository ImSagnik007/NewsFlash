import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SportsScores from "./SideBarComponents/Sports/SportsScores";
import LaLiga from "./SideBarComponents/Sports/FootballLeagues/LaLiga";
import EPL from "./SideBarComponents/Sports/FootballLeagues/EPL";
import Ligue1 from "./SideBarComponents/Sports/FootballLeagues/Ligue1";
import { FaChevronRight } from "react-icons/fa";
// import DNA from "react-loader-spinner/dist/loader/Dna";

const SideBar = () => {
  const [dropdownState, setDropdownState] = useState({
    firstDropdownOpen: false,
    secondDropdownOpen: false,
    thirdDropdownOpen: false,
    footballDropdownOpen: false,
    cricketDropdownOpen: false,
    laligaDropdownOpen: false,
    eplDropdownOpen: false,
    ligue1DropdownOpen: false,
    cricketDropDownOpen: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownState({
      ...dropdownState,
      [dropdown]: !dropdownState[dropdown],
    });
  };

  return (
    <div className="p-10 w-3/10 text-gray-50">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => toggleDropdown("firstDropdownOpen")}
        style={{ borderBottom: "2px solid white" }}
      >
        <h3 className="mr-5">Sports scores</h3>
        <FaChevronDown
          className={
            dropdownState.firstDropdownOpen ? "rotate-180" : "rotate-0"
          }
        />
      </div>
      {dropdownState.firstDropdownOpen && (
        <>
          <div
            className="flex items-center justify-between cursor-pointer mt-10"
            onClick={() => toggleDropdown("footballDropdownOpen")}
            style={{ borderBottom: "2px solid white" }}
          >
            <FaChevronRight />
            <h3 className="mr-5"> Football</h3>
            <FaChevronDown
              className={
                dropdownState.footballDropdownOpen ? "rotate-180" : "rotate-0"
              }
            />
          </div>
          {dropdownState.footballDropdownOpen && (
            <>
              <div
                className="flex items-center justify-between cursor-pointer mt-10"
                onClick={() => toggleDropdown("laligaDropdownOpen")}
                style={{ borderBottom: "2px solid white" }}
              >
                <FaChevronRight />
                <FaChevronRight />
                <h3 className="mr-5">LaLiga</h3>
                <FaChevronDown
                  className={
                    dropdownState.laligaDropdownOpen ? "rotate-180" : "rotate-0"
                  }
                />
              </div>
              {dropdownState.laligaDropdownOpen && <LaLiga />}
              <div
                className="flex items-center justify-between cursor-pointer mt-10"
                onClick={() => toggleDropdown("eplDropdownOpen")}
                style={{ borderBottom: "2px solid white" }}
              >
                <FaChevronRight />
                <FaChevronRight />
                <h3 className="mr-5">EPL</h3>
                <FaChevronDown
                  className={
                    dropdownState.eplDropdownOpen ? "rotate-180" : "rotate-0"
                  }
                />
              </div>
              {dropdownState.eplDropdownOpen && <EPL />}
              <div
                className="flex items-center justify-between cursor-pointer mt-10"
                onClick={() => toggleDropdown("ligue1DropdownOpen")}
                style={{ borderBottom: "2px solid white" }}
              >
                <FaChevronRight />
                <FaChevronRight />
                <h3 className="mr-5">Ligue1</h3>
                <FaChevronDown
                  className={
                    dropdownState.ligue1DropdownOpen ? "rotate-180" : "rotate-0"
                  }
                />
              </div>
              {dropdownState.ligue1DropdownOpen && <Ligue1 />}
            </>
          )}
          <div
            className="flex items-center justify-between cursor-pointer mt-10"
            onClick={() => toggleDropdown("cricketDropdownOpen")}
            style={{ borderBottom: "2px solid white" }}
          >
            <FaChevronRight />
            <h3 className="mr-5"> Cricket</h3>
            <FaChevronDown
              className={
                dropdownState.cricketDropdownOpen ? "rotate-180" : "rotate-0"
              }
            />
          </div>
        </>
      )}
      <div
        className="flex items-center justify-between cursor-pointer mt-10"
        onClick={() => toggleDropdown("secondDropdownOpen")}
        style={{ borderBottom: "2px solid white" }}
      >
        <h3 className="mr-5">Stocks</h3>
        <FaChevronDown
          className={
            dropdownState.secondDropdownOpen ? "rotate-180" : "rotate-0"
          }
        />
      </div>
      {dropdownState.secondDropdownOpen && (
        <ul className="list-disc pl-10">
          <li>BSE SENSEX</li>
          <li>NIFTY</li>
        </ul>
      )}
      <div
        className="flex items-center justify-between cursor-pointer mt-10"
        onClick={() => toggleDropdown("thirdDropdownOpen")}
        style={{ borderBottom: "2px solid white" }}
      >
        <h3 className="mr-5">Crypto</h3>
        <FaChevronDown
          className={
            dropdownState.thirdDropdownOpen ? "rotate-180" : "rotate-0"
          }
        />
      </div>
      {dropdownState.thirdDropdownOpen && (
        <ul className="list-disc pl-10">
          <li>Bitcoin</li>
          <li>Ethereum</li>
          <li>Dogecoin</li>
        </ul>
      )}
    </div>
  );
};

export default SideBar;

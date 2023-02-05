import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SideBar = () => {
  const [dropdownState, setDropdownState] = useState({
    firstDropdownOpen: true,
    secondDropdownOpen: false,
    thirdDropdownOpen: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdownState({
      ...dropdownState,
      [dropdown]: !dropdownState[dropdown],
    });
  };

  return (
    <div className="p-10 w-3/10">
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
        <ul className="list-disc pl-10">
          <li>IND vs AUS</li>
          <li>REAL MADRID vs MALLORCA</li>
          <li>HEATS vs SCORCHERS</li>
        </ul>
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

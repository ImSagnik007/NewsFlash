import React, { useState } from "react";
import LaLiga from "./SideBarComponents/Sports/FootballLeagues/LaLiga";
import EPL from "./SideBarComponents/Sports/FootballLeagues/EPL";
import SerieA from "./SideBarComponents/Sports/FootballLeagues/SerieA";
import Bundesliga from "./SideBarComponents/Sports/FootballLeagues/Bundesliga";
import Ligue1 from "./SideBarComponents/Sports/FootballLeagues/Ligue1";
import Cricket from "./SideBarComponents/Sports/Cricket";
import * as fcIcons from "react-icons/fc";
import * as faIcons from "react-icons/fa";
import * as mdIcons from "react-icons/md";

const Sidebar = () => {
  const [sportsOpen, setSportsOpen] = useState(true);
  const [cricketOpen, setCricketOpen] = useState(false);
  const [footballOpen, setFootballOpen] = useState(true);
  const [laligaOpen, setLaligaOpen] = useState(false);
  const [eplOpen, setEplOpen] = useState(false);
  const [serieAOpen, setSerieAOpen] = useState(false);
  const [bundesligaOpen, setBundesligaOpen] = useState(false);
  const [ligue1Open, setLigue1Open] = useState(false);

  return (
    <div className="bg-gray-800 h-screen w-full">
      <div className="p-4 w-full">
        <button
          className="flex items-center text-white font-medium bg-blue-600 hover:bg-gray-900 p-2 rounded-lg"
          onClick={() => setSportsOpen(!sportsOpen)}
        >
          <fcIcons.FcSportsMode className="mr-2" />
          Sports Scores
          <svg
            className="fill-current w-4 h-4 ml-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {sportsOpen ? (
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            ) : (
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            )}
          </svg>
        </button>
        {sportsOpen && (
          <div className="bg-gray-800 py-2 ml-4">
            <button
              className="flex items-center text-white font-medium hover:bg-gray-900 p-2 rounded-lg"
              onClick={() => setCricketOpen(!cricketOpen)}
            >
              <mdIcons.MdSportsCricket className="mr-2" />
              Cricket
              <svg
                className="fill-current w-4 h-4 ml-2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {cricketOpen ? (
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                ) : (
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                )}
              </svg>
            </button>
            {cricketOpen && <Cricket />}
            <button
              className="flex items-center text-white font-medium hover:bg-gray-900 p-2 rounded-lg"
              onClick={() => setFootballOpen(!footballOpen)}
            >
              <mdIcons.MdSportsSoccer className="mr-2" />
              Football
              <svg
                className="fill-current w-4 h-4 ml-2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {footballOpen ? (
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                ) : (
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                )}
              </svg>
            </button>
            {footballOpen && (
              <div className="bg-gray-800 py-2 ml-8">
                <button
                  className="flex items-center text-white font-medium hover:bg-gray-900 p-2 rounded-lg"
                  onClick={() => setLaligaOpen(!laligaOpen)}
                >
                  Laliga
                  <svg
                    className="fill-current w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {laligaOpen ? (
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    ) : (
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    )}
                  </svg>
                </button>
                {laligaOpen && <LaLiga />}
                <button
                  className="flex items-center text-white font-medium hover:bg-gray-900 p-2 rounded-lg"
                  onClick={() => setEplOpen(!eplOpen)}
                >
                  EPL
                  <svg
                    className="fill-current w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {eplOpen ? (
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    ) : (
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    )}
                  </svg>
                </button>
                {eplOpen && <EPL />}
                <button
                  className="flex items-center text-white font-medium hover:bg-gray-900 p-2 rounded-lg"
                  onClick={() => setSerieAOpen(!serieAOpen)}
                >
                  Serie A
                  <svg
                    className="fill-current w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {serieAOpen ? (
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    ) : (
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    )}
                  </svg>
                </button>
                {serieAOpen && <SerieA />}
                <button
                  className="flex items-center text-white font-medium hover:bg-gray-900 p-2 rounded-lg"
                  onClick={() => setBundesligaOpen(!bundesligaOpen)}
                >
                  Bundesliga
                  <svg
                    className="fill-current w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {bundesligaOpen ? (
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    ) : (
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    )}
                  </svg>
                </button>
                {bundesligaOpen && <Bundesliga />}
                <button
                  className="flex items-center text-white font-medium hover:bg-gray-900 p-2 rounded-lg"
                  onClick={() => setLigue1Open(!ligue1Open)}
                >
                  Ligue-1
                  <svg
                    className="fill-current w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {ligue1Open ? (
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    ) : (
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    )}
                  </svg>
                </button>
                {ligue1Open && <Ligue1 />}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        <button className="block text-white font-semibold py-2 hover:bg-gray-700 rounded">
          Stock
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

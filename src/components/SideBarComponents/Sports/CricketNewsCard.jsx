import React from "react";

const CricketNewsCard = ({ news1 }) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-500 m-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {news1.matchType.toUpperCase()}
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src={news1.teamInfo[0].img}
                alt={news1.teamInfo[0].shortname}
              />
            </div>
            <div className="ml-4">
              {news1.score.length == 1 && (
                <div className="text-gray-900">
                  {news1.score[0].r}/{news1.score[0].w}({news1.score[0].o})
                </div>
              )}
              {news1.score.length == 2 && (
                <div className="text-gray-900">
                  {news1.score[1].r}/{news1.score[1].w}({news1.score[1].o})
                </div>
              )}
              <div className="text-sm text-gray-500">
                <img
                  className="h-12 w-12"
                  src={news1.teamInfo[1].img}
                  alt={news1.teamInfo[1].shortname}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <div className="text-gray-900 flex">
              {news1.teamInfo[0].shortname}
            </div>
            <div className="text-gray-900 flex">
              {news1.teamInfo[1].shortname}
            </div>
          </div>
          <div className="mt-2 text-center text-gray-900">{news1.status}</div>
        </div>
      </div>
    </>
  );
};

export default CricketNewsCard;

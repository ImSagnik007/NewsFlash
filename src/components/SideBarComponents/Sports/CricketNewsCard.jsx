import React from "react";

const CricketNewsCard = ({ news1 }) => {
  return (
    <>
      <div className="w-full rounded overflow-hidden shadow-lg bg-gray-50 m-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {news1.matchType.toUpperCase()}
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12"
                src={news1.teamInfo[0].img}
                alt={news1.teamInfo[0].shortname}
              />
            </div>
            <div className="scores ml-4">
              {news1.score.length === 1 && (
                <div className="flex flex-wrap mr-1 ml-2">
                  <div className="text-gray-900 w-full">Yet To Bat</div>
                </div>
              )}

              {news1.score.length > 1 && (
                <div className="flex flex-wrap mr-1 ml-1">
                  {news1.score.slice(0, 2).map((score, index) => (
                    <div
                      key={index}
                      className={`text-gray-900 w-1/2 px-2 ${
                        news1.score.length === 2 ? "w-full" : ""
                      }`}
                    >
                      {score.r}/{score.w}({score.o})
                    </div>
                  ))}
                </div>
              )}

              {news1.score.length > 2 && (
                <div className="flex flex-wrap mt-2 mr-1 ml-1">
                  {news1.score.slice(2).map((score, index) => (
                    <div key={index} className="text-gray-900 w-full px-2">
                      {score.r}/{score.w}({score.o})
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="text-sm text-gray-500">
              <img
                className="h-12 w-12"
                src={news1.teamInfo[1].img}
                alt={news1.teamInfo[1].shortname}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between mt-2">
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

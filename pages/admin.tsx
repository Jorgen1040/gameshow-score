import { useChannel } from "@ably-labs/react-hooks";
import { useState } from "react";

export default function Admin() {
  // I know theres probably better ways to do this, but I'm lazy
  const [score1, updateScore1] = useState(0);
  const [score2, updateScore2] = useState(0);
  const [score3, updateScore3] = useState(0);
  const [score4, updateScore4] = useState(0);
  const [score5, updateScore5] = useState(0);
  const [score6, updateScore6] = useState(0);

  const [visual1, updateVisual1] = useState(0);
  const [visual2, updateVisual2] = useState(0);
  const [visual3, updateVisual3] = useState(0);
  const [visual4, updateVisual4] = useState(0);
  const [visual5, updateVisual5] = useState(0);
  const [visual6, updateVisual6] = useState(0);

  //   const sendScore = (deskNum, score) => {
  //     useChannel(`desk-${deskNum}`, (message) => {
  //       console.log(message);
  //       updateScore1(message.data.score);
  //     }
  //   };

  const [channel] = useChannel("points", (message) => {
    console.log(message);
  });
  const [response] = useChannel("response", (message) => {
    console.log(message);
    if (message.data.desk === "1") {
      console.log(message.data.points);
      updateVisual1(message.data.points);
    }
    if (message.data.desk === "2") {
      updateVisual2(message.data.points);
    }
    if (message.data.desk === "3") {
      updateVisual3(message.data.points);
    }
    if (message.data.desk === "4") {
      updateVisual4(message.data.points);
    }
    if (message.data.desk === "5") {
      updateVisual5(message.data.points);
    }
    if (message.data.desk === "6") {
      updateVisual6(message.data.points);
    }
  });

  return (
    <main>
      <div className="p-12 flex">
        {/* Desk 1 */}
        <div className="w-48 mr-8">
          <div className="items-center justify-center">
            <h1>Desk 1</h1>
            <div className="bg-gradient-radial from-purple-200 to-purple-400">
              <div className="flex items-center justify-center h-24">
                <h1 className="text-6xl font-bold outline-8">{visual1}</h1>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                className="bg-red-600 rounded-full w-8 h-8 font-bold text-xl m-1"
                onClick={() => updateScore1(score1 - 5)}
              >
                --
              </button>
              <button
                className="bg-red-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore1(score1 - 1)}
              >
                -
              </button>
              <div className="text-center m-1">
                {/* <input
                  type="number"
                  className="w-12 border-2 text-2xl m-2"
                  defaultValue={score1}
                /> */}
                <h1 className="text-2xl">{score1}</h1>
              </div>
              <button
                className="bg-green-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore1(score1 + 1)}
              >
                +
              </button>
              <button
                className="bg-green-600 rounded-full w-8 h-8 font-bold text-2xl m-1"
                onClick={() => updateScore1(score1 + 5)}
              >
                ++
              </button>
            </div>
            <div
              className="flex items-center justify-center bg-slate-300 border-2 border-black m-2 hover:cursor-pointer"
              onClick={() => channel.publish("points", { score1 })}
            >
              Update
            </div>
          </div>
        </div>
        {/* Desk 2 */}
        <div className="w-48 mr-8">
          <div className="items-center justify-center">
            <h1>Desk 2</h1>
            <div className="bg-gradient-radial from-purple-200 to-purple-400">
              <div className="flex items-center justify-center h-24">
                <h1 className="text-6xl font-bold outline-8">{visual2}</h1>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                className="bg-red-600 rounded-full w-8 h-8 font-bold text-xl m-1"
                onClick={() => updateScore2(score2 - 5)}
              >
                --
              </button>
              <button
                className="bg-red-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore2(score2 - 1)}
              >
                -
              </button>
              <div className="text-center m-1">
                {/* <input
                  type="number"
                  className="w-12 border-2 text-2xl m-2"
                  defaultValue={score1}
                /> */}
                <h1 className="text-2xl">{score2}</h1>
              </div>
              <button
                className="bg-green-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore2(score2 + 1)}
              >
                +
              </button>
              <button
                className="bg-green-600 rounded-full w-8 h-8 font-bold text-2xl m-1"
                onClick={() => updateScore2(score2 + 5)}
              >
                ++
              </button>
            </div>
            <div
              className="flex items-center justify-center bg-slate-300 border-2 border-black m-2 hover:cursor-pointer"
              onClick={() => channel.publish("points", { score2 })}
            >
              Update
            </div>
          </div>
        </div>
        {/* Desk 3 */}
        <div className="w-48 mr-8">
          <div className="items-center justify-center">
            <h1>Desk 3</h1>
            <div className="bg-gradient-radial from-purple-200 to-purple-400">
              <div className="flex items-center justify-center h-24">
                <h1 className="text-6xl font-bold outline-8">{visual3}</h1>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                className="bg-red-600 rounded-full w-8 h-8 font-bold text-xl m-1"
                onClick={() => updateScore3(score3 - 5)}
              >
                --
              </button>
              <button
                className="bg-red-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore3(score3 - 1)}
              >
                -
              </button>
              <div className="text-center m-1">
                {/* <input
                  type="number"
                  className="w-12 border-2 text-2xl m-2"
                  defaultValue={score1}
                /> */}
                <h1 className="text-2xl">{score3}</h1>
              </div>
              <button
                className="bg-green-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore3(score3 + 1)}
              >
                +
              </button>
              <button
                className="bg-green-600 rounded-full w-8 h-8 font-bold text-2xl m-1"
                onClick={() => updateScore3(score3 + 5)}
              >
                ++
              </button>
            </div>
            <div
              className="flex items-center justify-center bg-slate-300 border-2 border-black m-2 hover:cursor-pointer"
              onClick={() => channel.publish("points", { score3 })}
            >
              Update
            </div>
          </div>
        </div>
        <div className="w-48 mr-8">
          <div className="items-center justify-center">
            <h1>Desk 4</h1>
            <div className="bg-gradient-radial from-purple-200 to-purple-400">
              <div className="flex items-center justify-center h-24">
                <h1 className="text-6xl font-bold outline-8">{visual4}</h1>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                className="bg-red-600 rounded-full w-8 h-8 font-bold text-xl m-1"
                onClick={() => updateScore4(score4 - 5)}
              >
                --
              </button>
              <button
                className="bg-red-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore4(score4 - 1)}
              >
                -
              </button>
              <div className="text-center m-1">
                {/* <input
                  type="number"
                  className="w-12 border-2 text-2xl m-2"
                  defaultValue={score1}
                /> */}
                <h1 className="text-2xl">{score4}</h1>
              </div>
              <button
                className="bg-green-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore4(score4 + 1)}
              >
                +
              </button>
              <button
                className="bg-green-600 rounded-full w-8 h-8 font-bold text-2xl m-1"
                onClick={() => updateScore4(score4 + 5)}
              >
                ++
              </button>
            </div>
            <div
              className="flex items-center justify-center bg-slate-300 border-2 border-black m-2 hover:cursor-pointer"
              onClick={() => channel.publish("points", { score4 })}
            >
              Update
            </div>
          </div>
        </div>
        <div className="w-48 mr-8">
          <div className="items-center justify-center">
            <h1>Desk 5</h1>
            <div className="bg-gradient-radial from-purple-200 to-purple-400">
              <div className="flex items-center justify-center h-24">
                <h1 className="text-6xl font-bold outline-8">{visual5}</h1>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                className="bg-red-600 rounded-full w-8 h-8 font-bold text-xl m-1"
                onClick={() => updateScore5(score5 - 5)}
              >
                --
              </button>
              <button
                className="bg-red-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore5(score5 - 1)}
              >
                -
              </button>
              <div className="text-center m-1">
                {/* <input
                  type="number"
                  className="w-12 border-2 text-2xl m-2"
                  defaultValue={score1}
                /> */}
                <h1 className="text-2xl">{score5}</h1>
              </div>
              <button
                className="bg-green-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore5(score5 + 1)}
              >
                +
              </button>
              <button
                className="bg-green-600 rounded-full w-8 h-8 font-bold text-2xl m-1"
                onClick={() => updateScore5(score5 + 5)}
              >
                ++
              </button>
            </div>
            <div
              className="flex items-center justify-center bg-slate-300 border-2 border-black m-2 hover:cursor-pointer"
              onClick={() => channel.publish("points", { score5 })}
            >
              Update
            </div>
          </div>
        </div>
        {/* Desk 6 */}
        <div className="w-48 mr-8">
          <div className="items-center justify-center">
            <h1>Desk 6</h1>
            <div className="bg-gradient-radial from-purple-200 to-purple-400">
              <div className="flex items-center justify-center h-24">
                <h1 className="text-6xl font-bold outline-8">{visual6}</h1>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                className="bg-red-600 rounded-full w-8 h-8 font-bold text-xl m-1"
                onClick={() => updateScore6(score6 - 5)}
              >
                --
              </button>
              <button
                className="bg-red-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore6(score6 - 1)}
              >
                -
              </button>
              <div className="text-center m-1">
                {/* <input
                  type="number"
                  className="w-12 border-2 text-2xl m-2"
                  defaultValue={score1}
                /> */}
                <h1 className="text-2xl">{score6}</h1>
              </div>
              <button
                className="bg-green-600 rounded-full w-12 font-bold text-2xl p-2"
                onClick={() => updateScore6(score6 + 1)}
              >
                +
              </button>
              <button
                className="bg-green-600 rounded-full w-8 h-8 font-bold text-2xl m-1"
                onClick={() => updateScore6(score6 + 5)}
              >
                ++
              </button>
            </div>
            <div
              className="flex items-center justify-center bg-slate-300 border-2 border-black m-2 hover:cursor-pointer"
              onClick={() => channel.publish("points", { score6 })}
            >
              Update
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center bg-slate-300 border-2 border-black m-2 hover:cursor-pointer"
        onClick={() =>
          channel.publish("points", {
            score1,
            score2,
            score3,
            score4,
            score5,
            score6,
          })
        }
      >
        Update all
      </div>
    </main>
  );
}

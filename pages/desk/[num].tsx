import { useChannel } from "@ably-labs/react-hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCountUp } from "react-countup";

const SimpleHook = () => {
  useCountUp({ ref: "counter", end: 1234567 });
  return <span id="counter" />;
};

export default function Desk() {
  const { num } = useRouter().query;
  console.log(num);
  const [score, updateScore] = useState(0);
  const [response] = useChannel("response", (message) => {
    console.log(message);
  });
  const [channel] = useChannel("points", (message) => {
    console.log(message);
    console.log(`score${num}`);
    if (message.data[`score${num}`] !== undefined) {
      console.log(message.data[`score${num}`]);
      updateScore(message.data[`score${num}`]);
      response.publish("response", {
        points: message.data[`score${num}`],
        desk: num,
      });
    }
    // updateScore(message.data.score1);
  });

  return (
    <main className="bg-gradient-radial from-purple-200 to-purple-400">
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-[40rem] font-bold outline-8">{score}</h1>
      </div>
    </main>
  );
}

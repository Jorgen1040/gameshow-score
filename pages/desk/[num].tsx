import { useChannel } from "@ably-labs/react-hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Desk() {
  const router = useRouter();
  const { num } = useRouter().query;
  useEffect(() => {
    if (router.isReady) {
      // Code using query
      console.log(router.query);
    }
  }, [router.isReady, router.query]);
  const deskNum = "score" + num;
  console.log("Desk num", num);
  // const [start, updateStart] = useState(0);
  // const [score, updateScore] = useState(0);

  const [[start, score], updateScore] = useState([0, 0]);

  const [response] = useChannel("response", (message) => {
    console.log(message);
    });
  const [channel] = useChannel("points", (message) => {
    console.log(message);
    console.log(deskNum);
    if (message.data[deskNum] !== undefined) {
      console.log(message.data[`score${num}`]);
      console.log(start);
      // updateStart(score);
      console.log(start);
      updateScore([score, message.data[deskNum]]);
      response.publish("response", {
        points: message.data[deskNum],
        desk: num,
      });
    }
    // updateScore(message.data.score1);
  });

  return (
    <main className="bg-gradient-radial from-purple-200 to-purple-400">
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-[40rem] leading-none font-bold outline-8">
          <CountUp start={start} end={score} />
        </h1>
      </div>
    </main>
  );
}

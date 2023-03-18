import React, { useEffect, useState } from "react";
import ControlCluster from "./Controls/ControlCluster";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as Mousetrap from "mousetrap";

const Home = () => {
  const [testToggle, setTestToggle] = useState(false);

  useEffect(() => {
    Mousetrap.bind("ctrl+g", () => {
      setTestToggle(true);
    });
    Mousetrap.bind("ctrl+h", () => {
      setTestToggle(false);
    });
    Mousetrap.bind("f12", () => {
      document.getElementById("click").click();
    });

    return () => {
      Mousetrap.unbind("ctrl+g", "ctrl+h", "f12");
    };
  }, []);

  return (
    <div className="bg-transparent flex flex-col w-full h-full border border-red-500 relative">
      <h1>💖 Hello World!</h1>
      <p>Welcome to your Electron application.</p>
      <ControlCluster testToggle={testToggle} />
    </div>
  );
};

export default Home;

import React, { FC } from "react";

interface Props {
  testToggle: boolean;
}

const ControlCluster: FC<Props> = ({ testToggle }) => {
  return (
    <div className="absolute top-5 right-1/2">
      <button className=" bg-gray-200/10" type="button">
        <div>Show Instructions: ctrl + "g" </div>
        <div>Hide Instructions: ctrl + "h"</div>
      </button>
      {testToggle && <div>Test toggle Boolean</div>}
    </div>
  );
};

export default ControlCluster;

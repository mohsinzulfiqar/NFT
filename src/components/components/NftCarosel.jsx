import React from "react";

import NftCard from "./NftCard";

const NftCarosel = ({ data }) => {
  let tempData = JSON.parse(JSON.stringify(data));
  return (
    <div className="row">
      {tempData.map((single, i) => {
        try {
          single.metadata = JSON.parse(single?.metadata || {});
        } catch (error) {
          return null;
        }
        return <NftCard data={single} key={i} />;
      })}
    </div>
  );
};

export default NftCarosel;

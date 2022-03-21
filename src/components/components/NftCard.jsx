import React from "react";
import { getIpfsUrl } from "../../utils/urls";
import Tilt from "react-parallax-tilt";

const NftCard = ({ data }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4   px-0">
      <Tilt>
        <div class="card m-3  rounded ">
          <img
            className="w-fit"
            src={getIpfsUrl(data.metadata.image)}
            alt="Forest"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = "/404.png";
            }}
            style={{ maxHeight: 400, width: "100%" }}
          />
          <div class="card-body">
            <h2>{data.metadata.name}</h2>
            <p className="text-muted">{data?.metadata?.description}</p>
            <h3 className="badge btn-main w-100">{data.name}</h3>
            <span className="">
              Amount
              <span className="ms-2 badge bg-primary">{data.amount}</span>
            </span>
            <span className="ms-3">
              Contract Type
              <span className="ms-2 badge bg-primary">
                {" "}
                {data.contract_type}{" "}
              </span>
            </span>
            <p className="mt-2">
              Address{" "}
              <span className="ms-2 badge bg-secondary">
                {data.token_address.slice(0, 10) +
                  "..." +
                  data.token_address.slice(-5)}
              </span>
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default NftCard;

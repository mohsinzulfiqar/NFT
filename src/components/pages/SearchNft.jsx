import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import NFtService from "../../services/NFtService";
import useDebounce from "../../hooks/useDebounce";
import NftCarosel from "../../components/components/NftCarosel";
import { Spinner } from "react-bootstrap";

const limit = 10;
const SearchNft = () => {
  const [query, setQuery] = useState("");

  const [nftData, setNFTData] = useState([]);

  const [page, setPage] = useState(0);

  const val = useDebounce(query, 300);

  const { isLoading, isError, data } = useQuery(
    `search-nfts-${val}-${page}`,
    () => {
      if (!val) {
        return;
      }
      return NFtService.searchNftData("eth", val, {
        limit: limit,
        offset: page * limit,
      });
    },
    { staleTime: 60 * 1000 }
  );

  useEffect(() => {
    setNFTData([]);
  }, [val]);

  useEffect(() => {
    if (!data) {
      return;
    }
    setNFTData((prev) => [...prev, ...(data?.result || [])]);
  }, [data]);

  console.log(isLoading, isError, data);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="mt-5 pt-5">
      <div className="search d-flex justify-content-center">
        <input
          className="p-3 px-5 form-control  w-50 border border-danger rounded-pill"
          type="text"
          placeholder="Search Nft"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {isLoading && (
        <>
          <h2>Loading...</h2>
          <Spinner />
        </>
      )}
      <NftCarosel data={nftData} />
      {nftData.length <= data?.total && (
        <button onClick={handleLoadMore}>Load-more</button>
      )}
    </div>
  );
};

export default SearchNft;

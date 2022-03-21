import Moralis from "moralis/dist/moralis.min.js";

const serverUrl = "https://h2najvg6rsdj.usemoralis.com:2053/server";
const appId = "tBervYPJOVX8CXUeuiVWW3R0CGIpgW0d3RMzloJv";

Moralis.start({ serverUrl, appId });

class NFTService {
  async getNftData(chain = "eth", address, otherOptions = {}) {
    console.log(chain, address);
    const options = { chain, address, ...otherOptions };
    const tokenMetadata = await Moralis.Web3API.token.getAllTokenIds(options);
    return tokenMetadata;
  }
  async searchNftData(chain = "eth", query = "Pancake", otherOptions = {}) {
    const options = { q: query, chain: "bsc", filter: "name", ...otherOptions };
    console.log("🎩", options);
    const NFTs = await Moralis.Web3API.token.searchNFTs(options);
    return NFTs;
  }
}

export default new NFTService();

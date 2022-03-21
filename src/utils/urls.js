export const getIpfsUrl = (imgURL) => {
  if (imgURL?.includes("ipfs://")) {
    return imgURL.replace("ipfs://", "https://ipfs.io/ipfs/");
  }
  return imgURL;
  // nftUrl.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");
};
export const getProjectsJsonUrl = () => `/data/projects.json`;
export const getProjectJsonUrl = (projectKey) =>
  `/data/${projectKey}/project.json`;
export const getNftJsonUrl = (projectKey, tokenId) =>
  `/data/${projectKey}/${tokenId}.json`;
export const getOpenSeaTokenUrl = (contractAddress, tokenId) =>
  `https://opensea.io/assets/${contractAddress}/${tokenId}`;

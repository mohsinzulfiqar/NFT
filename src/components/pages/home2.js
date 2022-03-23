import React, { useEffect, useState } from "react";
import Particle from "../components/Particle";
import SliderMainParticle from "../components/SliderMainParticle";
import FeatureBox from "../components/FeatureBox";
import CarouselCollection from "../components/CarouselCollection";
import CarouselNew from "../components/CarouselNew";
import AuthorList from "../components/authorList";
import Footer from "../components/footer";
import { createGlobalStyle } from "styled-components";
import { useMoralis } from "react-moralis";
import Moralis from "moralis/dist/moralis.min.js";
import NFtService from "../../services/NFtService";
import { useQuery } from "react-query";
import NftCarosel from "../components/NftCarosel";
import { Spinner } from "react-bootstrap";

const GlobalStyles = createGlobalStyle`
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .navbar .mainside a{
    background: #8364e2;
    &:hover{
      box-shadow: 2px 2px 20px 0px #8364e2;
    }
  }
  .item-dropdown{
    .dropdown{
      a{
        &:hover{
          background: #8364e2;
        }
      }
    }
  }
  .btn-main{
    background: #8364e2;
    &:hover{
      box-shadow: 2px 2px 20px 0px #8364e2;
    }
  }
  p.lead{
    color: #a2a2a2;
  }
  .navbar .navbar-item .lines{
    border-bottom: 2px solid #8364e2;
  }
  .jumbotron.no-bg{
    height: 100vh;
    overflow: hidden;
    background-repeat: repeat;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  #tsparticles{
    top: 0;
  }
  .text-uppercase.color{
    color: #8364e2;
  }
  .de_count h3 {
    font-size: 36px;
    margin-bottom: 0px;
  }
  .de_count h5{
    font-size: 14px;
    font-weight: 500;
  }
  h2 {
    font-size: 30px;
  }
  .box-url{
    text-align: center;
    h4{
      font-size: 16px;
    }
  }
  .de_countdown{
    border: solid 2px #8364e2;
  }
  .author_list_pp, .author_list_pp i, 
  .nft_coll_pp i, .feature-box.style-3 i, 
  footer.footer-light #form_subscribe #btn-subscribe i, 
  #scroll-to-top div{
    background: #8364e2;
  }
  footer.footer-light .subfooter .social-icons span i{
    background: #403f83;
  }
  .author_list_pp:hover img{
    box-shadow: 0px 0px 0px 2px #8364e2;
  }
  .nft__item_action span{
    color: #8364e2;
  }
  .feature-box.style-3 i.wm{
    color: rgba(131,100,226, .1);
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const Homeone = () => {
  const { isLoading, isError, data } = useQuery("get-nfts-", () =>
    NFtService.getNftData("eth", "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d", {
      limit: 12,
    })
  );
  const {
    isLoading: roboIsLoading,
    isError: roboIsError,
    data: roboData,
  } = useQuery("get-nfts-robo", () =>
    NFtService.getNftData("eth", "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb", {
      limit: 12,
    })
  );
  const {
    isLoading: clonXIsLoading,
    isError: clonXIsError,
    data: clonXData,
  } = useQuery("get-nfts-clonx", () =>
    NFtService.getNftData("eth", "0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b", {
      limit: 12,
    })
  );
  const availabelProviders = {
    metaMask: {},
    elrond: { type: "erd" },
    walletconnect: { provider: "walletconnect" },
  };
  const { authenticate, isAuthenticated, user } = useMoralis();

  const [loading, setLoading] = useState(false);

  const handleAuthenticate = async (provider) => {
    console.log(provider);
    setLoading(true);
    // if (!isAuthenticated) {
    try {
      await authenticate(availabelProviders[provider]);
    } catch (error) {
      console.log(error);
    }

    // }
    setLoading(false);
  };

  return (
    <div>
      <GlobalStyles />
      <section
        className="jumbotron no-bg"
        style={{ backgroundImage: `url(${"./img/background/8.jpg"})` }}
      >
        <Particle />
        <SliderMainParticle />
      </section>

      <section className="container no-bottom">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2 col-sm-4 col-6 mb30" onClick={() => handleAuthenticate(availabelProviders.metaMask)}>
            <span className="box-url">
              <img src="./img/wallet/1.png" alt="" className="mb20" />
              <h4>Metamask</h4>
            </span>
          </div>

          {/* <div className="col-lg-2 col-sm-4 col-6 mb30">
            <span className="box-url">
              <img src="./img/wallet/2.png" alt="" className="mb20" />
              <h4>Bitski</h4>
            </span>
          </div> */}

          {/* <div className="col-lg-2 col-sm-4 col-6 mb30">
            <span className="box-url">
              <img src="./img/wallet/3.png" alt="" className="mb20" />
              <h4>Fortmatic</h4>
            </span>
          </div> */}

          <div className="col-lg-2 col-sm-4 col-6 mb30" onClick={() => handleAuthenticate(availabelProviders.metaMask)}>
            <span className="box-url">
              <img src="./img/wallet/4.png" alt="" className="mb20" />
              <h4>WalletConnect</h4>
            </span>
          </div>

          {/* <div className="col-lg-2 col-sm-4 col-6 mb30">
            <span className="box-url">
              <img src="./img/wallet/5.png" alt="" className="mb20" />
              <h4>Coinbase Wallet</h4>
            </span>
          </div> */}

          {/* <div className="col-lg-2 col-sm-4 col-6 mb30">
            <span className="box-url">
              <img src="./img/wallet/6.png" alt="" className="mb20" />
              <h4>Arkane</h4>
            </span>
          </div> */}
        </div>
      </section>

      <section className="container no-top no-bottom">
        <h2 className="awesome-line">NFTs by Businesses</h2>
        {isLoading ? <Spinner /> : <NftCarosel data={data?.result || []} />}
      </section>

      <section className="container ">
        <h2 className="awesome-line">CryptoPunks NFTs</h2>
        {isLoading ? <Spinner /> : <NftCarosel data={roboData?.result || []} />}
      </section>
      <section className="container no-top no-bottom">
        <h2 className="awesome-line"> ClonX NFTs</h2>
        {isLoading ? (
          <Spinner />
        ) : (
          <NftCarosel data={clonXData?.result || []} />
        )}
      </section>

      <section className="container ">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12 mb-2">
            <h2>New Items</h2>
          </div>
        </div>
        <CarouselNew />
      </section>
      <section className="container ">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12">
            <h2>Top Sellers</h2>
          </div>
          <div className="col-lg-12">
            <AuthorList />
          </div>
        </div>
      </section>

      <section className="container no-top no-bottom">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12 mb-2">
            <h2>Hot Collections</h2>
          </div>
          <div className="col-lg-12">
            <CarouselCollection />
          </div>
        </div>
      </section>

      <section className="container no-top">
        <div className="row">
          <div className="spacer-double"></div>
          <div className="col-lg-12 mb-3">
            <h2>Create and Sell Now</h2>
          </div>
          <FeatureBox />
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Homeone;

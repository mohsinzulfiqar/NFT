import React, { useEffect } from 'react';
import Wallet from '../components/wallet';
import Footer from '../components/footer';
import { useMoralisSolanaApi } from 'react-moralis';
// import Moralis from 'moralis/types';


const WalletPage = () => {
 

  return (<div>
    <section className='jumbotron breadcumb no-bg' >
      <div className='mainbreadcumb'>
        <div className='container'>
          <div className='row m-10-hor'>
            <div className='col-12'>
              <h1 className='text-center'>Wallet</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='container'>
      <Wallet />
    </section>

    <Footer />
  </div>

  )
};

export default WalletPage;

// import { useERC20Transfers } from "react-moralis";


// const ERC20Transfers = () => {
//   const { fetchERC20Transfers, data, error, isLoading, isFetching, } = useERC20Transfers();
//   return (
//     <div>
//       {error && <>{JSON.stringify(error)}</>}
//       <button onClick={() => fetchERC20Transfers({ params: { chain: "0xbd984cd2d021Dc816304f3192F367C189a18702d" } })}>Refetch</button>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };
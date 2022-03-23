import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Footer from "../components/footer";
// import http, { baseUrl } from './http'
const customStyles = {
  option: (base, state) => ({
    ...base,
    background: "#212428",
    color: "#fff",
    borderRadius: state.isFocused ? "0" : 0,
    "&:hover": {
      background: "#16181b",
    },
  }),
  menu: (base) => ({
    ...base,
    background: "#212428 !important",
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  control: (base, state) => ({
    ...base,
    padding: 2,
  }),
};

const options = [
  { value: "Last 7 days", label: "Last 7 days" },
  { value: "Last 24 hours", label: "Last 24 hours" },
  { value: "Last 30 days", label: "Last 30 days" },
  { value: "All time", label: "All time" },
];
const options1 = [
  { value: "All categories", label: "All categories" },
  { value: "Art", label: "Art" },
  { value: "Music", label: "Music" },
  { value: "Domain Names", label: "Domain Names" },
  { value: "Virtual World", label: "Virtual World" },
  { value: "Trading Cards", label: "Trading Cards" },
  { value: "Collectibles", label: "Collectibles" },
  { value: "Sports", label: "Sports" },
  { value: "Utility", label: "Utility" },
];

const Explore = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(5);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 5);
  };

  const getAllNFT = async () => {
    try {
      let url = "https://api.solradar.io/dd/latestPrices";
      const response = await axios.get(url);
      setItems(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(()=>{
    getAllNFT();
  },[])
  

  return (
    <div>
      <section className="jumbotron breadcumb no-bg">
        <div className="mainbreadcumb">
          <div className="container">
            <div className="row m-10-hor">
              <div className="col-12">
                <h1 className="text-center">Top NFTs</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="items_filter centerEl ranking_filter">
              <form
                className="row form-dark ranking_quick_search"
                id="form_quick_search"
                name="form_quick_search"
              >
                <div className="col">
                  <input
                    className="form-control"
                    id="name_1"
                    name="name_1"
                    placeholder="search item here..."
                    type="text"
                  />{" "}
                  <button id="btn-submit">
                    <i className="fa fa-search bg-color-secondary"></i>
                  </button>
                </div>
              </form>
              <div className="dropdownSelect one">
                <Select
                  className="select1"
                  styles={customStyles}
                  menuContainerStyle={{ zIndex: 999 }}
                  defaultValue={options[0]}
                  options={options}
                />
              </div>
              <div className="dropdownSelect two">
                <Select
                  className="select1"
                  styles={customStyles}
                  defaultValue={options1[0]}
                  options={options1}
                />
              </div>
            </div>

            <table className="table de-table table-rank">
              <thead>
                <tr>
                  <th scope="col">Collection</th>
                  <th scope="col">Volume</th>
                  <th scope="col">24h %</th>
                  <th scope="col">7d %</th>
                  <th scope="col">Floor Price</th>
                  {/* <th scope="col">Owners</th> */}
                  {/* <th scope="col">Assets</th> */}
                  <th scope="col">List Count</th>

                </tr>
                <tr></tr>
              </thead>
              <tbody>
                {items.slice(0, visible).map((item) => (
                  <tr>
                    <th scope="row">
                      <div className="coll_list_pp">
                        <img
                          className="lazy"
                          src={item.imageUrl}
                          alt=""
                        />
                        <i className="fa fa-check"></i>
                      </div>
                      {item.name}
                    </th>
                    <td>15,225.87</td>
                    <td className="d-plus">+87.54%</td>
                    <td className="d-plus">+309.49%</td>
                    <td>{item.floorPrice}</td>
                    {/* <td>2.8k</td> */}
                    <td>{item.listedCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="spacer-double"></div>
                  <span class="btn-main lead m-auto" onClick={showMoreItems}>Load More</span>
            {/* <ul className="pagination justify-content-center">
              <li className="active">
                <span>1 - 20</span>
              </li>
              <li>
                <span>21 - 40</span>
              </li>
              <li>
                <span>41 - 60</span>
              </li>
            </ul> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Explore;

import React from "react";
import CoinItem from "./CoinItem";
import "./Coins.css";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">24Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
      </div>

      {coins.map((coins) => {
        return <CoinItem key={coins.id} coins={coins} />;
      })}
    </div>
  );
};

export default Coins;

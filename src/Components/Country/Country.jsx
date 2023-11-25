/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Country.css";

export default function Country({ country }) {
  const language = country.languages;
  const arr = [];
  for (const key in language) {
    arr.push(language[key]);
  }

  const currencies = country.currencies;
  let currencyName = "";
  for (const currencyCode in currencies) {
    const currency = currencies[currencyCode];
    currencyName += currency.symbol + " " + currency.name;
  }

  return (
    <>
      <div className="wrap">
        <div>
          <h2>{country?.name?.common}</h2>
          <p>Capital: {country?.capital}</p>
          <p>Currency: {currencyName} </p>
        </div>
        <div className="flagNarms">
          <div className="flags">
            <img className="flag" src={country.flags.png} alt="" />
            <p>Flag</p>
          </div>
          <div className="coatofArms">
            <img className="coatOfArm" src={country.coatOfArms.png} />
            <p>Emblem</p>
          </div>
        </div>
        <div className="language">
          <p>
            Language{arr.length > 1 && "s"}: {arr.join(", ")}
          </p>
          <p>Population: {country.population}</p>
        </div>
        <div className="region">
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
        </div>
      </div>
    </>
  );
}

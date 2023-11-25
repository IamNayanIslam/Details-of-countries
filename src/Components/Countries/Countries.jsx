/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const url = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <>
      <h1>Countries: {countries.length}</h1>
      <div className="countries">
        {countries
          .filter((country) => country.name.common !== "Israel")
          .map((country) => (
            <div>
              <Country key={country.ccn3} country={country} />
            </div>
          ))}
      </div>
    </>
  );
}

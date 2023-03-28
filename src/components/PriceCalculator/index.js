import React, { useState } from 'react';
import InpRadio from './InpRadio.jsx';
import './pricecalc.css';

function PriceCalculator() {
  const data = [
    {
      defaultName: 'bm',
      text: 'Wedding ',
      idlab: 'labBM',
      name: 'type',
    },
    {
      defaultName: 'bm',
      text: 'Bar Mitzvah ',
      idlab: 'labWedd',
      name: 'type',
    },
  ];

  return (
    <div className="price">
      <h1 className="text-center mb-2">
        <span className="font-bold">Price</span> Calculator
      </h1>
      <div className="line"></div>

      <form id="weddingCalc" className="mt-5">
        <div className="border p-2 my-2">
          {'Event type:'}
          <div className="my-1 flex">
            {data.map((item, i) => (
              <InpRadio key={i} {...item} />
            ))}
          </div>
        </div>
        <p className="mb-1">
          <table className="checkTable">
            <tbody>
              <tr>
                <td className="w-50 px-3">
                  <input
                    type="checkbox"
                    id="fulFilm"
                    className="form-check-input"
                  />
                </td>
                <td className="py-2">
                  <label htmlFor="fulFilm" className="w-100 p-2">
                    {'Full film'} <span className="text-xs">(1-3hours)</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="w-50 px-3">
                  <input
                    type="checkbox"
                    id="fulFilm"
                    className="form-check-input"
                  />
                </td>
                <td className="py-2">
                  <label htmlFor="fulFilm" className="w-100 p-2">
                    {'Full film'} <span className="text-xs">(1-3hours)</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="w-10 px-3">
                  <input
                    type="checkbox"
                    id="fulFilm"
                    className="form-check-input"
                  />
                </td>
                <td className="py-2">
                  <label htmlFor="fulFilm" className="w-100 p-2">
                    {'Full film'} <span className="text-xs">(1-3hours)</span>
                  </label>
                </td>
              </tr>
              <tr>
                <td className="w-50 px-3">
                  <input
                    type="checkbox"
                    id="fulFilm"
                    className="form-check-input"
                  />
                </td>
                <td className="py-2">
                  <label htmlFor="fulFilm" className="w-100 p-2">
                    {'Full film'} <span className="text-xs">(1-3hours)</span>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
        <div className="border p-2 my-2">
          {'Video Resolution:'}
          <div className="my-1 flex">
            <label htmlFor="fullhd" className="typeLabel" id="labfulhd">
              {'Full HD '}
              <span className="text-xs">(1080p) </span>
              <input
                type="radio"
                name="res"
                id="fullhd"
                className="form-check-input"
                defaultChecked
              />
            </label>
            <label htmlFor="fourk" className="typeLabel" id="labfourk">
              {'4K '}
              <span className="text-xs">(2160p) </span>
              <input
                type="radio"
                name="res"
                id="fourk"
                value="fourk"
                className="form-check-input"
              />
            </label>
          </div>
        </div>
        <div className="border p-2 my-2">
          <label>How many cameras worked? </label>
          <select name="camera" id="camera" className="form-select">
            <option value="1">1 camera</option>
            <option value="2">2 camera</option>
            <option value="3">3 camera</option>
            <option value="4">4 camera</option>
          </select>
        </div>

        <div className="flex justify-between items-center flex-wrap">
          <p id="totalPrice">
            <p
              className="font-medium text-base text-danger discountAnimation"
              id="subtot"
            >
              {'Without discount: $'}
              <del>380</del>
            </p>
            <p
              className="font-400 text-base text-success discountAnimation"
              id="disPrice"
            >
              {'Discount: $'}
              {380}
            </p>
            <p className="text-primary text-4xl font-bold totPrice">
              {'Total: $'}
              {270}
            </p>
          </p>

          <button className="btn purple text-4xl" id="order">
            Order Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default PriceCalculator;

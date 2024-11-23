const MyError = require("../models/MyError");
require("dotenv").config();
const API_KEY = process.env.API_KEY; // API_KEY from .env

const User = require("../models/user-schema");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");
const FINANCIAL_MODELING_PREP_URL =
  "https://financialmodelingprep.com/api/v3/search";
const SEARCH_STOCK = "https://financialmodelingprep.com/api/v3/quote/";
//const API_KEY = "8roX02YIPYsR8ydedtXvDsBbKHCtfj1x"; // Replace with your API key

const searchStoke = async (req, res, next) => {
  try {
    console.log("searchStoke");
    const { query, limit = 15 } = req.query;
    const response = await axios.get(FINANCIAL_MODELING_PREP_URL, {
      params: {
        query,
        limit,
        apikey: API_KEY,
      },
      timeout: 5000,
    });
    const data = response.data;
    // console.log(response);
    res.json({ status: "ok", data: data });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
const getStock = async (req, res, next) => {
  try {
    console.log("getStock");
    const { symbol } = req.params;
    console.log("getStock", symbol);
    const url = SEARCH_STOCK + symbol;
    const response = await axios.get(url, {
      params: {
        apikey: API_KEY,
      },
      timeout: 5000,
    });
    const data = response.data;
    console.log("response");
    res.json({ status: "ok", data: data });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
const myStocks = async (req, res, next) => {
  try {
    const { symbol, action } = req.body; // Get symbol and action from the request body

    console.log("myStocks", req.user);
    if (req.user) {
      const userData = await User.findById(req.user.id); // Replace with your actual user identifier logic
      if (action) {
        // Add symbol if it's not already in the array
        if (!userData.myStocks.includes(symbol)) {
          userData.myStocks.push(symbol);
        }
      } else {
        // Remove symbol from the array if it exists
        userData.myStocks = userData.myStocks.filter((item) => item !== symbol);
      }

      // Save the updated user document
      await userData.save();
      return res.json({ status: "ok", data: userData.myStocks });
    }

    let err = new MyError("User Not Found", 500);
    return next(err);
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
const test = async (req, res) => {
  // console.log("test", apiKey);
  const { query = "app", limit = 15 } = req.body;
  const response = await axios.get(FINANCIAL_MODELING_PREP_URL, {
    params: {
      query,
      limit,
      apikey: API_KEY,
    },
    timeout: 5000,
  });
  const data = response.data;
  // console.log(response);
  return res.json({ status: "ok", data: data });
};
const myFave = async (req, res, next) => {
  try {
    console.log(req.user);
    const userData = await User.findById(req.user.id);
    const { myStocks } = userData;
    const stockPromises = myStocks.map((symbol) => {
      const url = `${SEARCH_STOCK}${symbol}?apikey=${API_KEY}`;
      return axios.get(url); // Returns a promise for each API call
    });
    const stockResponses = await Promise.all(stockPromises);
    const stockData = stockResponses.map((response) => response.data);
    console.log(stockData);
    // Send back the stock data as a response
    return res.json({ status: "ok", data: stockData });
  } catch (error) {
    console.log(error);
    let err = new MyError("Internal Error", 500);
    return next(err);
  }
};
module.exports = {
  test,
  searchStoke,
  getStock,
  myStocks,
  myFave,
};

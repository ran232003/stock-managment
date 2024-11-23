import { userAction } from "./store/userSlice";

export const homePageTitle = "Welcome to my Blog";
export const homePageSubTitle =
  "Here you'll find a variety of articles and tutorials on topics such as web development, software engineering, and programming languages.";
export const authPageSubTitle =
  "This is a demo project. You can sign in with your email and password";
export const authMap = { login: "Login", signin: "SignIn" };
export const formikValuesSingUp = [
  { name: "userName", lable: "User Name", type: "text" },
  { name: "email", lable: "Email", type: "text" },
  { name: "password", lable: "Password", type: "password" },
];
export const formikValuesSingIn = [
  { name: "email", lable: "Email", type: "text" },
  { name: "password", lable: "Password", type: "password" },
];
export const optionsCategory = ["", "java", "javaScript", "C", "C++", "React"];
export const landingCards = [
  {
    title: "Real-Time Portfolio Updates",
    subTitle:
      "Stay up-to-date with live updates on your investments and stock performance",
  },
  {
    title: "Advanced Market Analytics",
    subTitle:
      "Gain insights into market trends with powerful analysis tools and applay tools",
  },
  {
    title: "Custom Alerts & Notifications",
    subTitle:
      "Set alerts for price changes, market events, and portfolio milestones.",
  },
];
export const landingSteps = [
  {
    title: "Step 1",
    subTitle: "Create an account and set up your stock categories.",
  },
  {
    title: "Step 2",
    subTitle: "Start adding your inventory using our intuitive dashboard.",
  },
  {
    title: "Step 3",
    subTitle: "Track, update, and manage your stock effortlessly.",
  },
];
export const data = [
  {
    symbol: "APC.F",
    name: "Apple Inc.",
    currency: "EUR",
    stockExchange: "Frankfurt Stock Exchange",
    exchangeShortName: "XETRA",
  },
  {
    symbol: "APC.DE",
    name: "Apple Inc.",
    currency: "EUR",
    stockExchange: "Frankfurt Stock Exchange",
    exchangeShortName: "XETRA",
  },
  {
    symbol: "AAPL.NE",
    name: "Apple Inc.",
    currency: "CAD",
    stockExchange: "NEO",
    exchangeShortName: "NEO",
  },
  {
    symbol: "AAPL.MX",
    name: "Apple Inc.",
    currency: "MXN",
    stockExchange: "Mexico",
    exchangeShortName: "MEX",
  },
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    currency: "USD",
    stockExchange: "NASDAQ Global Select",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "APPLX",
    name: "Appleseed Fund",
    currency: "USD",
    stockExchange: "NASDAQ",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "APUSD",
    name: "AppleSwap AI USD",
    currency: "USD",
    stockExchange: "CCC",
    exchangeShortName: "CRYPTO",
  },
  {
    symbol: "APRU",
    name: "Apple Rush Company, Inc.",
    currency: "USD",
    stockExchange: "Other OTC",
    exchangeShortName: "PNK",
  },
  {
    symbol: "APLE",
    name: "Apple Hospitality REIT, Inc.",
    currency: "USD",
    stockExchange: "New York Stock Exchange",
    exchangeShortName: "NYSE",
  },
  {
    symbol: "2788.T",
    name: "Apple International Co., Ltd.",
    currency: "JPY",
    stockExchange: "Tokyo",
    exchangeShortName: "JPX",
  },
  {
    symbol: "APLY.NE",
    name: "Apple (AAPL) Yield Shares Purpose ETF",
    currency: "CAD",
    stockExchange: "Cboe CA",
    exchangeShortName: "NEO",
  },
  {
    symbol: "603020.SS",
    name: "Apple Flavor & Fragrance Group Co.,Ltd.",
    currency: "CNY",
    stockExchange: "Shanghai",
    exchangeShortName: "SHH",
  },
  {
    symbol: "PNPL",
    name: "Pineapple, Inc.",
    currency: "USD",
    stockExchange: "Other OTC",
    exchangeShortName: "PNK",
  },
  {
    symbol: "PEGY",
    name: "Pineapple Energy Inc.",
    currency: "USD",
    stockExchange: "NASDAQ Capital Market",
    exchangeShortName: "NASDAQ",
  },
  {
    symbol: "PAPL",
    name: "Pineapple Financial Inc.",
    currency: "USD",
    stockExchange: "American Stock Exchange",
    exchangeShortName: "AMEX",
  },
];
export const stockPageValues = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 145.775,
    changesPercentage: 0.32,
    change: 0.465,
    dayLow: 143.9,
    dayHigh: 146.71,
    yearHigh: 179.61,
    yearLow: 124.17,
    marketCap: 2306437439846,
    priceAvg50: 140.8724,
    priceAvg200: 147.18594,
    exchange: "NASDAQ",
    volume: 42478176,
    avgVolume: 73638864,
    open: 144.38,
    previousClose: 145.31,
    eps: 5.89,
    pe: 24.75,
    earningsAnnouncement: "2023-04-26T10:59:00.000+0000",
    sharesOutstanding: 15821899776,
    timestamp: 1677790773,
  },
];

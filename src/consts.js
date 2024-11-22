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

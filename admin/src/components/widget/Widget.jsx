import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "PENDING REQUESTS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="text-red-500"
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="text-yellow-500"
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EQUIPMENT COUNT",
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="text-green-500"
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "WORK ORDERS",
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="text-purple-500"
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        </div>
        {data.icon}
      </div>
  );
};

export default Widget;

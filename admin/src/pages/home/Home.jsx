import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import DataTable from "./dataTable";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="requests" />
          <Widget type="order" />
          <Widget type="equipment" />
          <Widget type="workorders" />
        </div>
       {/*
       <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        */} 
        <div className="listContainer">
          <div className="listTitle">Latest Work Orders</div>
          <DataTable/>
        </div>
      </div>
    </div>
  );
};

export default Home;

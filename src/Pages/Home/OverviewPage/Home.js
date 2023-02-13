import React from "react";
import PiChart from "./charts/Pichart";
import Table from "./TableforOverview/Table";
import Widget from "./Widget";

const Home = () => {
  return (
    <div className="mt-10 mb-10">
      <div>
        <Widget />
      </div>
      <div>
        <PiChart></PiChart>
      </div>
      <div className="mt-16 mx-4">
        <Table></Table>
      </div>
    </div>
  );
};

export default Home;

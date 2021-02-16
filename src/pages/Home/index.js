import React from "react";
import { Card, Category, Navbar, Search } from "../../components";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div class="search-form mt-3 d-flex align-items-center justify-content-between">
          <div>
            <Category />
            <Category />
            <Category />
            <Category />
          </div>
          <div>
            <Search />
          </div>
        </div>
        <div class="row d-flex align-items-center justify-content-between">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;

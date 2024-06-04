import React from 'react';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="home__card card">
        <img
          src="https://en.yoyostorerewind.com/cdn/shop/files/plasmacrash13_ea45495a-962e-416b-8606-a7df92c932e8.jpg?v=1716873682&width=400"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Plasma Crash</h5>
          <p className="card-text">A variant of the Hydrogen Crash. Slightly smaller and with even more sleep.</p>
          <a
            href="https://en.yoyostorerewind.com/products/plasma-crash"
            className="btn btn-primary"
          >Go buy it</a>
        </div>
      </div>
    </div>
  );
}

export default Home;

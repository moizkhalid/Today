import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <h3>NEWS</h3>
                <ul>
                  <li>
                    <a href="#!">Featured News</a>
                  </li>
                  <li>
                    <a href="#!">Latest News</a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h3>Life</h3>
                <ul>
                  <li>
                    <a href="#!">Latest News</a>
                  </li>
                  <li>
                    <a href="#!">Fashion</a>
                  </li>
                  <li>
                    <a href="#!">Dining</a>
                  </li>
                  <li>
                    <a href="#!">Recipes</a>
                  </li>
                  <li>
                    <a href="#!">Art & Culture</a>
                  </li>
                  <li>
                    <a href="#!">Travel</a>
                  </li>
                  <li>
                    <a href="#!">Motoring</a>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <h3>business</h3>
                <ul>
                  <li>
                    <a href="#!">Open House</a>
                  </li>
                  <li>
                    <a href="#!">What does that even mean?</a>
                  </li>
                  <li>
                    <a href="#!">Homegrown</a>
                  </li>
                  <li>
                    <a href="#!">How do I...</a>
                  </li>
                  <li>
                    <a href="#!">Bag off</a>
                  </li>
                  <li>
                    <a href="#!">Where to spend it</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="subscribe-letter">
              <h3>Subscribe</h3>
              <form>
                <label htmlFor="subscribe-email">Get fresh updates about the fashion, beauty, trends</label>
                <input type="email" id="subscribe-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

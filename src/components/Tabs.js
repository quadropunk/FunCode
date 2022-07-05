import { useState } from "react";
import "./App.css";
import Cards from './Cards';
import Levels from './Levels';
import { getUser, onConnect, onDisconnect } from "./web3/wallet";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const login = async () => {
    await onConnect();
    window.location.reload(false);
  }

  const logout = () => {
    onDisconnect();
    window.location.reload(false);
  }

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Settings
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Profile
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Map
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Shop
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Settings</h2>
          <hr />

          <div>
            <p>
              Language
            </p>
            <select>
              <option>English</option>
              <option>Kazakh</option>
            </select>
            <p>
              Proramming Language
            </p>
            <select>
              <option>Python</option>
            </select>


          </div>
          <div>
            <p>
              Music
            </p>
            <input type="range" min="1" max="10" id="size" value="3"></input>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Profile</h2>
          <button onClick={async () => getUser() === null ? await login() : logout()}>
            {getUser() === null ? "Connect Wallet" : "Disconnect Wallet"}
          </button>
          <hr />

          <div className="row">
            <div className="column">
              <img className="profile" src={require('./ava.png')} />
            </div>
            <div className="column">
              <div className="row">
                <p>Name</p></div>
              <div className="row">
                <p>Surname</p></div>
              <div className="row">
                <p>Nickname</p></div>
              <div className="row">
                <p>Date of birth</p></div>

            </div>
          </div>
          <div>
            <p>Achievements</p>
          </div>
          <div className="row">
            <div className="column">
              <div className="round"></div>
            </div>
            <div className="column">
              <div className="round"></div>
            </div>
            <div className="column">
              <div className="round"></div>
            </div>
            <div className="column">
              <div className="round"></div>
            </div>
            <div className="column">
              <div className="round"></div>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="round"></div>
            </div>
            <div className="column">
              <div className="round"></div>
            </div>
            <div className="column">
              <div className="round"></div>
            </div>
            <div className="column">
              <div className="round"></div>
            </div>
            <div className="column">
              <div className="round"></div>
            </div>
          </div>

        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Map</h2>
          <hr />
          <div>
            <p>
              Select level
            </p></div>
          <Levels />
        </div>



        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Shop</h2>
          <hr />
          <div className="column" >

            <div className="row" >
              <img src={require('./ava.png')} />
              <p>My Character</p>
            </div>
            <div className="row">
              <Cards />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Tabs;
import { useState } from "react";
import "./App.css";
import Cards from './Cards';
import Levels from './Levels';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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
          <hr />
          
<div class="row">
    <div class ="column">
              <img className="profile" src="https://play-lh.googleusercontent.com/CgZQvdfQWV9b4ZEHhLzL5ccXb_fd0dlu-6nJy-miyzXGJUSaUSpg76qxcSBz0AaRM8fG=w240-h480-rw" />
                  </div>
<div class ="column">
    <div class="row">
                  <p>Name</p></div>
    <div class="row">
                  <p>Surname</p></div>
    <div class="row">
                  <p>Nickname</p></div>
    <div class="row">
                  <p>Date of birth</p></div>
              
</div>
        </div>
<div>
                      <p>Achievements</p>
                      </div>
<div class="row">
    <div class="column">
        <div class="round"></div>
</div>
<div class="column">
        <div class="round"></div>
</div>
<div class="column">
        <div class="round"></div>
</div>
<div class="column">
        <div class="round"></div>
</div>
<div class="column">
        <div class="round"></div>
</div>
    </div>
<div class="row">
    <div class="column">
        <div class="round"></div>
</div>
<div class="column">
        <div class="round"></div>
</div>
<div class="column">
        <div class="round"></div>
</div>
<div class="column">
        <div class="round"></div>
</div>
<div class="column">
        <div class="round"></div>
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
                  <img src="https://play-lh.googleusercontent.com/CgZQvdfQWV9b4ZEHhLzL5ccXb_fd0dlu-6nJy-miyzXGJUSaUSpg76qxcSBz0AaRM8fG=w240-h480-rw" />
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
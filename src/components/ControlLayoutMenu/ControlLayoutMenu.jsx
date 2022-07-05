import {NavLink} from 'react-router-dom';

import './ControlLayoutMenu.css';

const ControlLayoutMenu = ({style, run, loseCode}) => {
    return (
        <div className='control-layout-menu-cont' style={style}>
            <div className='control-menu-item stop' onClick={run}>
                <p>Run</p>
            </div>
            <div className='control-menu-item run'>
                <p>Stop</p>
            </div>
            <div className='control-menu-item resume'>
                <p onClick={loseCode}>Reset</p>
            </div>
            <div className='control-menu-item reset'>
                <p>
                    <NavLink to={'/'}>
                        Menu
                    </NavLink></p>
            </div>
        </div>
    )
}

export default ControlLayoutMenu;

import './ControlLayoutMenu.css';

const ControlLayoutMenu = ({style, run}) => {
    return (
        <div className='control-layout-menu-cont' style={style}>
            <div className='control-menu-item stop' onClick={run}>
                <p>Run</p>
            </div>
            <div className='control-menu-item run'>
                <p>Stop</p>
            </div>
            <div className='control-menu-item resume'>
                <p>Reset</p>
            </div>
            <div className='control-menu-item reset'>
                <p>Menu</p>
            </div>
        </div>
    )
}

export default ControlLayoutMenu;
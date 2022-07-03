import './ControlLayoutMenu.css';

const ControlLayoutMenu = ({style}) => {
    return (
        <div className='control-layout-menu-cont'>
            <div className='control-menu-item stop'>
                <p>Stop</p>
            </div>
            <div className='control-menu-item run'>
                <p>Run</p>
            </div>
            <div className='control-menu-item resume'>
                <p>Resume</p>
            </div>
            <div className='control-menu-item reset'>
                <p>Reset</p>
            </div>
        </div>
    )
}

export default ControlLayoutMenu;
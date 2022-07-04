import './Header.css';

const Header = ({level}) => {
    return(
        <div className="header-container">
            <div className="level-name">
                    Level {level}
            </div>
            <div className="data-cont">
                <div className="time-cont data-item">
                    <img src={'https://cdn4.iconfinder.com/data/icons/epic-outlines/30/timer-128.png'} />
                    <p>0:05</p>
                </div>
                <div className="lives-cont data-item">
                    <div className='lives-lives'>
                     <img src={'https://cdn3.iconfinder.com/data/icons/object-emoji/50/Heart-128.png'} />
                     <img src={'https://cdn3.iconfinder.com/data/icons/object-emoji/50/Heart-128.png'} />
                     <img src={'https://cdn3.iconfinder.com/data/icons/object-emoji/50/Heart-128.png'} />
                    </div>
                </div>
                <div className="coin-cont data-item">
                    <img src={'https://cdn2.iconfinder.com/data/icons/finance-253/24/currency-money-dollar-finance-coin-128.png'} />
                    <p>100</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
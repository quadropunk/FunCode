import './Header.css';

const Header = ({level, lives, time}) => {
    return(
        <div className="header-container">
            <div className="level-name" style={{
                paddingLeft:'20px',
                fontSize:'25px'
            }}>
                    Level {level}
            </div>
            <div className="data-cont">
                <div className="time-cont data-item">
                    <img alt="pic"src={'https://cdn4.iconfinder.com/data/icons/epic-outlines/30/timer-128.png'} />
                    <p> {Math.floor(time / 60) } : {time % 60 < 10 ? (0 + "" + (time % 60)) : time%60} </p>
                </div>
                <div className="lives-cont data-item">
                    <div className='lives-lives'>
                     {lives.map((i,key) => {
                        return  <img key={key} alt='heart pic' src={i === 1 ? 'https://cdn3.iconfinder.com/data/icons/object-emoji/50/Heart-128.png' :
                        'https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-19-128.png'
                    } />
                     })}
                    </div>
                </div>
                <div className="coin-cont data-item">
                    <img alt="coin pic"src={'https://cdn2.iconfinder.com/data/icons/finance-253/24/currency-money-dollar-finance-coin-128.png'} />
                    <p>100</p>
                </div>
            </div>
        </div>
    )
}

export default Header;
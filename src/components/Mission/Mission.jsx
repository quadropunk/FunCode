import BlueRadiusText from '../BlueRadiusText/BlueRadiusText';
import './Mission.css';

const Mission = () => {
    return (
        <div className='mission-container'>
            <BlueRadiusText>
                Mission
            </BlueRadiusText>
            <div className='mission-blank' style={{   
            }}>
                <div className='hints-img'>
                    <img alt="hint" style={{marginLeft:'20px', marginTop:'10px'}} src={'https://cdn4.iconfinder.com/data/icons/blueline-navigation/64/flag-128.png'} />
                </div>
                <div className='hints-list'>
                    <ul>
                        <li>
                            Go to the left corner
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Mission;
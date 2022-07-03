import './Hints.css';
import BlueRadiusText from '../BlueRadiusText/BlueRadiusText';

const Hints = ({style}) => {
    return (
        <div className='hints-panel-cont'>
            <BlueRadiusText>
                Hints
            </BlueRadiusText>
            <div className='hints-list-cont'>
                <div className='hints-img'>
                    <img alt="hint" src={'https://cdn2.iconfinder.com/data/icons/dual-stroke-part-three/64/lightbulb-light-idea-energy-128.png'} />
                </div>
                <div className='hints-list'>
                    <ul>
                        <li>
                            Hero.moveDown() - moves one step down
                        </li>
                        <li>
                            Hero.moveUp() - moves one step up
                        </li>
                        <li>
                            Hero.moveRight() - moves one step right
                        </li>
                        <li>
                            Hero.moveLeft() - moves one step left
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hints;
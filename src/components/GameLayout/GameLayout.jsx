import GameScreen from '../GameScreen/GameScreen';
import Hints from '../Hints/Hints';
import Mission from '../Mission/Mission';
import CodeLayout from '../CodeLayout/CodeLayout';
import './GameLayout.css';
import ControlLayoutMenu from '../ControlLayoutMenu/ControlLayoutMenu';
import { useState } from 'react';

const GameLayout = ({style}) => {
    
    
    return(
        <div className="game-layout-cont" style={style}>
            <div className='game-play-part-cont'>
                <GameScreen style={{

                }}
                />
                <br/>
                <ControlLayoutMenu style={{
                    
                }}
                />

                <Hints style={{

                }}
                
                />
            </div>
            <div className='game-code-part-cont'>
                <Mission style={{
                    
                }}
                
                />
                <CodeLayout style={{

                }}
                
                />
            </div>
        </div>
    )
}

export default GameLayout;
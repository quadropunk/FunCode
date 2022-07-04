import GameScreen from '../GameScreen/GameScreen';
import Hints from '../Hints/Hints';
import Mission from '../Mission/Mission';
import CodeLayout from '../CodeLayout/CodeLayout';
import './GameLayout.css';
import ControlLayoutMenu from '../ControlLayoutMenu/ControlLayoutMenu';
import { useState } from 'react';
import Header from '../Header/Header';

const GameLayout = ({style}) => {
    const [code, setCode] = useState(``);

    const saveCode = (code) => {
        setCode(code);
    }

    const [gameStatus, setGameStatus] = useState({finished:false, msg:''});
 


    const commands = [
        'Hero.moveUp()',
        'Hero.moveLeft()',
        'Hero.moveRight()',
        'Hero.moveDown()'
    ]
    
    const checkPoint = () => {
        const codes = code.split('\n').filter(i => i.length > 0);
        const char = document.getElementById('char');
        if(codes.length === 3) {
            let out = true;
            codes.map(i => {
                if(i !== commands[2]) {
                    out = false;
                    
                }
            })
            if(out) {
                setTimeout(() => {
                    setGameStatus({finished:true, msg:'Game over!Try again'})
                    char.style.display = "none";
                }, 2500)
                
            }
        }

        if(codes.length === 10) {
            setTimeout(() => {
                setGameStatus({finished:true, msg:'You win!'})
            }, 9000);
            
        }
    }

    const runCode = async () => {
        const char = document.getElementById('char');
        char.style.left = "0px";
        char.style.bottom="30px";
        const codes = code.split('\n').filter(i => i.length > 0);
        
        const move = async () => {
            for(let i = 0; i < codes.length;i++) {
                if(codes[i] === commands[0]) {
                    setTimeout(() => {
                    char.style.bottom = char.style.bottom === "" ? "100px" : ( (parseInt(char.style.bottom.slice(0, char.style.bottom.length - 2)) + 60) + "px")      
                }, i *800)
                } else if(codes[i] === commands[2]) {
                    setTimeout(() => {
                        char.style.left = char.style.left === "" ? "145px" : ( (parseInt(char.style.left.slice(0, char.style.left.length - 2)) + 120) + "px") 
                        
                    }, i * 800)
                } else if(codes[i] === commands[1]) {
                    setTimeout(() => {
                        char.style.left = char.style.left === "" ? "0px" : ( (parseInt(char.style.left.slice(0, char.style.left.length - 2)) - 120) + "px") 
                    }, i * 800)
                } else if(codes[i] === commands[3]) {
                    setTimeout(() => {
                        char.style.bottom = char.style.bottom === "" ? "0px" : ( (parseInt(char.style.bottom.slice(0, char.style.bottom.length - 2)) - 65) + "px") 
                    }, i * 800)
                }
            }
        
            return true
        }

        if(codes.length > 0) {
            const res = await move();  
            if(res) {
                checkPoint()
            }
        }

    }


    const processCode = () => {  
        runCode();
    }
    
    

    
    return(
        <div className="game-layout-cont" style={style}>
           
        
            <div className='game-play-part-cont'>
            <Header level={1}/>
               {gameStatus.finished &&  <div className='notification-cont'>
                <p>The End</p>
                <br/>
                <h1>{gameStatus.msg}</h1>
                <br/>
                <p onClick={() => {
                    window.location.reload()
                }} style={{cursor:'pointer'}}>Click to start again</p>
                </div>
            
            }
                <GameScreen style={{}}
                />
                <br/>
                <ControlLayoutMenu style={{}}
                    run={processCode}
                />

                <Hints style={{}}
                />

            </div>
            <div className='game-code-part-cont'>
                <Mission style={{
                    
                }}
                
                />
                <CodeLayout style={{

                }}
                saveCode={saveCode}
                />
            </div>
        </div>
    )


}

export default GameLayout;
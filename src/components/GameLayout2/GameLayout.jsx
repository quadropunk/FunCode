import GameScreen from '../GameScreen/GameScreen';
import Hints from '../Hints/Hints';
import Mission from '../Mission/Mission';
import CodeLayout from '../CodeLayout/CodeLayout';
import './GameLayout.css';
import ControlLayoutMenu from '../ControlLayoutMenu/ControlLayoutMenu';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { NavLink } from "react-router-dom";

const GameLayout2 = ({style}) => {
    const [code, setCode] = useState(``);
    const [lives, setLives] = useState([1,1,1]);
    const [time, setTime] = useState(0);

    const saveCode = (code) => {
        setCode(code);
    }

    const [gameStatus, setGameStatus] = useState({finished:false, msg:''});
    

    let timerID
    useEffect(() => {
        if(!gameStatus.finished) {
            timerID = setInterval( () => tick(), 1000);
            return function cleanup() {
                clearInterval(timerID);
            };
        } else {
            return
        }
        
       
    })

    function cleanup() {
        clearInterval(timerID);
    };

   function tick() {
    setTime(prev => prev + 1);
   }

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
                    if(lives[2] === 1) {
                        setTimeout(() => {
                            char.style.left = "0px";
                            char.style.bottom="30px";
                            
                            setGameStatus({finished:true, msg:'Try again'})
                            setTimeout(() => {
                                setGameStatus({finished:false, msg:''})
                            }, 1000);
                            setLives([1,1,0]);
                        }, 1000);
                    } else if(lives[1] === 1) {
                        console.log('hello')
                        setTimeout(() => {
                            char.style.left = "0px";
                    char.style.bottom="30px";
                            
                    setLives([1,0,0]);

                            setGameStatus({finished:true, msg:'Try again'})
                            setTimeout(() => {
                                setGameStatus({finished:false, msg:''})
                            }, 1000);
                        }, 1000);
                    } else if(lives[0] === 1) {
                        setTimeout(() => {
                            setLives([0,0,0]);
                            cleanup(timerID)
                            char.style.display="none";
                            setGameStatus({finished:true, msg:'Game over!Try again'})
                        }, 1000);
                        
                    }

                }, 2500)
                
            }
        }

        if(codes.length >= 10) {
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
                    char.style.bottom = char.style.bottom === "" ? "100px" : ( (parseInt(char.style.bottom.slice(0, char.style.bottom.length - 2)) + 65) + "px")      
                }, i *800)
                } else if(codes[i] === commands[2]) {
                    setTimeout(() => {
                        char.style.left = char.style.left === "" ? "145px" : ( (parseInt(char.style.left.slice(0, char.style.left.length - 2)) + 130) + "px") 
                        
                    }, i * 800)
                } else if(codes[i] === commands[1]) {
                    setTimeout(() => {
                        char.style.left = char.style.left === "" ? "0px" : ( (parseInt(char.style.left.slice(0, char.style.left.length - 2)) - 130) + "px") 
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
            <Header level={2} lives={lives} time={time}/>
               {gameStatus.finished &&  <div className='notification-cont'>
                <p>FunCode</p>
                <br/>
                <h1>{gameStatus.msg}</h1>
                <br/>
                {gameStatus.msg === 'Try again' &&  <p onClick={() => {
                    window.location.reload()
                }} style={{cursor:'pointer'}}>Click to start again</p>}
               {gameStatus.msg !== 'Try again' && <p>
                    <NavLink to={'/level2'}>
                        Go to the lvl3
                    </NavLink>
                </p>}
                </div>
            
            }
                 <GameScreen style={{}}
                    bg={'level2'}
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

export default GameLayout2;
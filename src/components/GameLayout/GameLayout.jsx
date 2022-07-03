import GameScreen from '../GameScreen/GameScreen';
import Hints from '../Hints/Hints';
import Mission from '../Mission/Mission';
import CodeLayout from '../CodeLayout/CodeLayout';
import './GameLayout.css';
import ControlLayoutMenu from '../ControlLayoutMenu/ControlLayoutMenu';
import { useState } from 'react';

const GameLayout = ({style}) => {
    const [code, setCode] = useState(``);

    const saveCode = (code) => {
        setCode(code);
    }

    const [gameStatus, setGameStatus] = useState({finished:false, msg:''});
 
    const steps = [
        {
            id:1,
            left:'145px',
            bottom:'',
            code:'Hero.moveRight()'
        },
        {
            id:2,
            left:'280px',
            bottom:'',
            code:'Hero.moveRight()'
        },
        {
            id:3,
            left:'280px',
            bottom:'100px',
            code:'Hero.moveUp()'
        },
        {
            id:4,
            left:'400px',
            bottom:'100px',
            code:'Hero.moveRight()'
        },
        {
            id:5,
            left:'380px',
            bottom:'170px',
            code:'Hero.moveUp()'
        },
        {
            id:6,
            left:'530px',
            bottom:'170px',
            code:'Hero.moveRight()'
        },
        {
            id:6,
            left:'690px',
            bottom:'220px',
            code:'Hero.moveUp()'
        },
        {
            id:7,
            left:'690px',
            bottom:'280px',
            code:'Hero.moveRight()'
        },
        {
            id:8,
            left:'700px',
            bottom:'345px',
            code:'Hero.moveUp()'
        },
        {
            id:9,
            left:'710px',
            bottom:'370px',
            code:'Hero.moveUp()'
        },
        
    ]

    /*const runCode = () => {

        const char = document.getElementById('char');
        const codes = code.split('\n').filter(i => i.length > 0);

        if(codes.length > 0) {
           for(let i = 0; i < codes.length;i++) {
            setTimeout(() => {
              char.style.left = steps[i].left;
              char.style.bottom = steps[i].bottom;
              
            if(steps[i].err) {
                setTimeout(() => {
                    char.style.display="none";
                    setGameStatus({finished:true,msg:'you failed, game over!'});
                    alert('Game over!');
                }, 500);
            }
            
            if(steps[i].id === 9) {
                setGameStatus({finished:true, msg : 'you win'})
            }

            console.log(steps[i].err);
            
        }, i * 1000);   
            }   
        }
    }
    */

    const commands = [
        'Hero.moveUp()',
        'Hero.moveLeft()',
        'Hero.moveRight()',
        'Hero.moveDown()'
    ]

    const runCode = () => {
        const char = document.getElementById('char');
        const codes = code.split('\n').filter(i => i.length > 0);
        
        if(codes.length > 0) {
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


        }

    }


    const processCode = () => {
        const codes = code.split('\n').filter(i => i.length > 0);

        if(codes.length > 0) {
            for(let i = 0; i < codes.length;i++) {
                if(steps.length > i && codes[i] !== steps[i].code) {
                    let value = '';
                    if(codes[i] === 'Hero.moveRight()') {
                        console.log('ERROR: on code line ' + (i + 1) );
                        value = parseInt(steps[i].left.slice(0, steps[i].left.length - 2));
                        value = (value + 100) + 'px';
                        steps[i].left = value;
                        steps[i].err=true;
                        
                    }
                    
                }
        }
    }

        console.log(steps);
        
        runCode();
    }
    
    

    
    return(
        <div className="game-layout-cont" style={style}>
            <div className='game-play-part-cont'>
               {gameStatus.finished && <p>{gameStatus.msg}</p>}
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
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
 
    const steps = [
        {
            id:1,
            left:'280px',
            bottom:'',
            code:'Hero.moveRight()'
        },
        {
            id:2,
            left:'280px',
            bottom:'100px',
            code:'Hero.moveRight()'
        },
        {
            id:3,
            left:'425px',
            bottom:'100px',
            code:'Hero.moveUp()'
        },
        {
            id:4,
            left:'400px',
            bottom:'170px',
            code:'Hero.moveRight()'
        },
        {
            id:5,
            left:'545px',
            bottom:'170px',
            code:'Hero.moveUp()'
        },
        {
            id:6,
            left:'545px',
            bottom:'240px',
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

    const runCode = () => {

        const char = document.getElementById('char');
        let timer = null;

        for(let i = 0; i < steps.length;i++) {
          timer = setTimeout(() => {
              char.style.left = steps[i].left;
              char.style.bottom = steps[i].bottom;
              

           
            if(steps[i].err) {
                setTimeout(() => {
                    char.style.display="none";
                }, 500);
            }
           

              console.log(steps[i].err);
            }, i * 1000);


            
        }   

    }

   

    const processCode = () => {
        const codes = code.split('\n');
        
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

        console.log(steps);
        
        runCode();
    }

    
    
    return(
        <div className="game-layout-cont" style={style}>
            <div className='game-play-part-cont'>
               
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
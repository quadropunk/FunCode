import './GameScreen.css';

const GameScreen = ({style}) => {
    const steps = [
        {
            id:1,
            left:'280px',
            bottom:''
        },
        {
            id:2,
            left:'280px',
            bottom:'100px'
        },
        {
            id:3,
            left:'425px',
            bottom:'100px'
        },
        {
            id:4,
            left:'400px',
            bottom:'170px'
        },
        {
            id:5,
            left:'545px',
            bottom:'170px'
        },
        {
            id:6,
            left:'545px',
            bottom:'240px'
        },
        {
            id:6,
            left:'690px',
            bottom:'220px'
        },
        {
            id:7,
            left:'690px',
            bottom:'280px'
        },
        {
            id:8,
            left:'700px',
            bottom:'345px'
        },
        {
            id:9,
            left:'710px',
            bottom:'370px'
        },
        
    ]

    const runCode = (e) => {
        e.preventDefault();
        const char = document.getElementById('char');
        
        for(let i = 0; i < steps.length;i++) {
            setTimeout(() => {
              char.style.left = steps[i].left;
              char.style.bottom = steps[i].bottom;
            }, i * 500);
        }   

    }

   


    return (
        <div className='game-screen-cont' style={style}>
            <div className='game-character' onClick={runCode} id="char">
                <img src={require('../../media/main_char.png')}  alt="your character"/>
            </div>
            <div className='game-ice-row1 ice'>
                <img src={require('../../media/ice.PNG')} alt="ice"/>
                <img src={require('../../media/ice.PNG')} alt="ice"/>
              
            </div>
            <div className='game-ice-row2 ice'>
                <img src={require('../../media/ice.PNG')} alt="ice"/>
                <img src={require('../../media/iceDark.PNG')} alt="ice"/>
            </div>
            <div className='game-ice-row3 ice'>
                <img src={require('../../media/iceDark.PNG')} alt="ice"/>
                <img src={require('../../media/iceDark.PNG')} alt="ice"/>
            </div>
            <div className='game-ice-row4 ice'>
                <img src={require('../../media/iceDark.PNG')} alt="ice"/>
                <img src={require('../../media/ice.PNG')} alt="ice"/>
            </div>
            <div className='game-ice-row5 ice'>
                <img src={require('../../media/iceDark.PNG')} alt="ice"/>
            </div>
            <div className='game-ice-row6 ice'>
                <img src={require('../../media/ice.PNG')} alt="ice"/>
            </div>
        </div>
    )
}

export default GameScreen;
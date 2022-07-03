import './GameScreen.css';

const GameScreen = ({style}) => {
    


    return (
        <div className='game-screen-cont' style={style}>
            <div className='game-character' id="char">
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


/*
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
    
]*/
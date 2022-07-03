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
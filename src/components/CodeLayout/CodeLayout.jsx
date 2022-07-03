import BlueRadiusText from '../BlueRadiusText/BlueRadiusText';
import './CodeLayout.css';

const CodeLayout = () => {
    return (
        <div className='code-layout'>
            <BlueRadiusText>
                Code:
            </BlueRadiusText>
            
            <textarea className='code-editor-cont'>

            </textarea>
        </div>
    )
}

export default CodeLayout;
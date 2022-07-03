import BlueRadiusText from '../BlueRadiusText/BlueRadiusText';
import './CodeLayout.css';

const CodeLayout = ({saveCode}) => {
    return (
        <div className='code-layout'>
            <BlueRadiusText>
                Code:
            </BlueRadiusText>
            
            <textarea id="editor" className='code-editor-cont' onChange={(e) => {saveCode(e.target.value)}}>
            </textarea>
        </div>
    )
}

export default CodeLayout;
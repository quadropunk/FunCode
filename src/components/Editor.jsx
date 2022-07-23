import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditorComponent } from 'react-codemirror2';


const Editor = ({ language, value, setEditorState }) => {
    const handleChange = (editor, data, value) => {
        setEditorState(value);
    }

    
  
    return (
    <div className="editor-container">
      <ControlledEditorComponent
        onBeforeChange={handleChange}
        value= {value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
        }}
      />
    </div>
  )
}

export default Editor;
import { useState } from 'react';

import './CodeLayout.css';

// important to use these two packages
import { CodeEditorEditable } from 'react-code-editor-editable'
import 'highlight.js/styles/dracula.css';


const CodeLayout = () => {
    const [value, setValue] = useState('')

      return (
        <div className='center'>
        <CodeEditorEditable
          value={value}
          setValue={setValue}
          width='50vw'
          height='50vh'
          language='js'
          inlineNumbers
        />

        <iframe
          srcDoc={`<html>
          <head></head>
          <body>
          <script>
          ${value}
          </script>
          </body>
          </html>
          `}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
      );
}

export default CodeLayout;
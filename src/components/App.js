import React, { useState } from 'react';
import Editor from './Editor';
import Header from './Header';

function App() {
  const [html, setHtml] = useState();
  const [css, setCss] = useState();
  // const [srcDoc, setSrcDoc] = useState('');
  let srcDoc = `<html> 
  <body>${html}</body>
  <style>${css}</style>
  </html`;
  return (
    <div className="bg-pink-700 pb-12 bg-opacity-60">
      <Header />

      <div className="flex w-5/6 mx-auto ">
        <div className="w-1/2">
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
        </div>
        <div className="bg-white my-5 ml-8 w-2/3 rounded-xl">
          <div className="py-2 px-5 bg-gray-400 bg-opacity-70 text-right text-gray-800 text-base font-bold ">
            <p>Output</p>
          </div>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

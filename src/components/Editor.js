import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

export default function Editor(props) {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="my-5 rounded-xl">
      <div className="py-2 px-5 bg-gray-400  text-base font-bold text-right text-gray-800 ">
        {displayName}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="w-full"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'white',
          lineNumbers: true,
        }}
      />
    </div>
  );
}

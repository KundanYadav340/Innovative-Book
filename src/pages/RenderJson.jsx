import React from 'react';
import question from './Questions';

// const jsonData = {
//   "tag": "div",
//   "props": {
//     "fontSize":"10px",
//   },
//   "children": [
//     {
//       "tag": "h1",
//       "props": {},
//       "children": [
//         "Hello{pi} World!"
//       ]
//     },
//     {
//       "tag": "p",
//       "props": {},
//       "children": [
//         "This is a paragraph."
//       ]
//     }
//   ]
// };


const RenderJson = (props) => {
  function parseJSONData(data) {
    const { tag, props, children } = data;
    const parsedChildren = children.map(child => {
      if (typeof child === 'string') {
        return child;
      } else {
        return parseJSONData(child);
      }
    });
    return React.createElement(tag, props, ...parsedChildren);
  }
  // const parsedData = parseJSONData(question[0].question_code);
  console.log(question[0].question_code);
  return (
    // <React.Fragment>
    //   {parsedData}
    // </React.Fragment>
    <p>Good</p>
    
  );
}

export default RenderJson;

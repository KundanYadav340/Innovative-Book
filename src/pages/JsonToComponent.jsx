import React from 'react';
// import CodeToJson from './CodeToJson';

// const htmlJson = CodeToJson;
const htmlJson = {
  "type": "div",
  "props": {
    "className": "container",
    "children": [
      {
        "type": "h1",
        "props": {
            "fontColor": "red",
          "children": "Welcome to my website!"
        }
      },
      {
        "type": "p",
        "props": {
          "children": "This is an example website built with ReactJS."
        }
      },
      {
        "type": "a",
        "props": {
          "href": "https://www.example.com",
          "children": "Visit Example.com"
        }
      }
    ]
  }
};

const JsonToComponentConverter = (json) => {
  const { type, props } = json;
  const children = Array.isArray(props.children) ? 
    props.children.map(child => JsonToComponentConverter(child)) : 
    props.children;
  return React.createElement(type, { ...props, children });
};

const JsonToComponent = () => {
  return (
    <div>
      <h1>Converting HTML JSON to HTML</h1>
      {JsonToComponentConverter(htmlJson)}
    </div>
  );
};

export default JsonToComponent;

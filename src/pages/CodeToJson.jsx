import React from 'react';
import HTMLtoReact from 'html-to-react';

const html = '<p>This is good for country</p><b>India</b>';

class CodeToJson extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the component tree with the parsed HTML
    const htmlToReactParser = new HTMLtoReact.Parser();
    const reactElement = htmlToReactParser.parse(html);
    this.state = {
      json: this.buildJSON(reactElement),
    };
  }

  // Recursive function to build the JSON object
  buildJSON(element) {
    const json = {
      tag: element.type,
    };

    // Add any props to the JSON object
    if (element.props) {
      json.props = {};
      for (const prop in element.props) {
        if (prop === 'children') {
          continue;
        }
        json.props[prop] = element.props[prop];
      }
    }

    // Recursively build the children array
    if (element.props && element.props.children) {
      json.children = React.Children.map(element.props.children, child => {
        if (typeof child === 'string') {
          return child;
        }
        return this.buildJSON(child);
      });
    }

    return json;
  }

  render() {
    return (
      <pre>{JSON.stringify(this.state.json, null, 2)}</pre>
    );
  }
}


export default CodeToJson;
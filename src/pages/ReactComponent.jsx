import React from 'react';
import question from './Questions';
// import MathJax from 'react-mathjax';


const ReactComponent = (prop) => {
  const { tag, props, children } = prop.data;
  const childElements = children.map(child => {
    if (typeof child === 'string') {
      return child;
    } else{
        // if(child.tag !== "mathjax.provider" || child.tag!=="mathjax.node"){
      return React.createElement(child.tag, child.props);
        }
        // else{
        //     if(child.tag === "mathjax.provider"){
        //         return React.createElement("Mathjax.Provider", child.props);
        //     }else{
        //         return '<MathJax.Node formula="\frac{1}{2}\int_{-\infty}^{\infty}x^2 e^{-\frac{x^2}{2}}dx" />';
        //     }
        // }
    // }
  });
  console.log(childElements);
  return React.createElement(tag, props, childElements);
}

export default ReactComponent;
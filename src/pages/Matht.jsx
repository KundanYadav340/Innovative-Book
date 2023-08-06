import MathJax from 'react-mathjax';

import React, { useEffect, useRef } from 'react';

function Matht({ tex }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML';
    script.async = true;
    script.onload = () => {
      MathJax.Hub.Config({
        tex2jax: { inlineMath: [['$', '$']] }
      });
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, containerRef.current]);
    };
    document.body.appendChild(script);
  }, []);

  return <div ref={containerRef}>{`$${tex}$`}</div>;
}

export default Matht;
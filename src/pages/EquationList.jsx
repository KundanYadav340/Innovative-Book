import React, { useState } from 'react';
// import MathJax from 'react-mathjax2';

const EquationList = ({ equations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
    // MathJax.typeset();
  };

  return (
    <div>
      <script type="text/x-mathjax-config">
        {`
        MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
          },
          showMathMenu: false,
        });
        `}
      </script>
      <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
      <script src="https://cdn.jsdelivr.net/npm/mathjax@3.2.0/es5/tex-mml-chtml.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/react-mathjax2@4.2.0/umd/react-mathjax2.js"></script>
      {/* <MathJax.Context>
        <MathJax.Text text={equations[currentIndex]} />
      </MathJax.Context> */}
      <button onClick={handleNextClick} disabled={currentIndex === equations.length - 1}>
        Next
      </button>
    </div>
  );
};

export default EquationList;

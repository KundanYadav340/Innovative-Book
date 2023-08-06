import React from 'react';
import Plot from 'react-plotly.js';

const SubjectGraph = ({widths}) => {
  return (
    <div>
        <Plot
        data={[ 
          {type: 'bar', 
          x: [" 1", " 2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
           y: [2, 5, 3, 2, 5, 3, 1, 6, 2, 1, 3, 2],
           text: ['10% of total marks', '5% of total marks', '12% of total marks','10% of total marks', '5% of total marks', '12% of total marks','10% of total marks', '5% of total marks', '12% of total marks','10% of total marks', '5% of total marks', '12% of total marks'],
           marker: {
                color: '#2ac5b3'
                // 2ac5b3
            },
            width: [0.9, 0.9, 0.9,0.9, 0.9, 0.9, 0.9, 0.9, 0.9,0.9, 0.9, 0.9],
            textposition:'none',
        }]}
        layout={ {width: widths,
        height: 320, 
        title: 'Number of Question Asked in 2022',
        xaxis: {
            tickangle: 0,
            dtick:1,
        },
        yaxis: {
            // zeroline: false,
            gridwidth: 1,
            automargin: true,
        },
        bargap :0,
        
        } }
        config={{
        displayModeBar: false
         }}
      />
    </div>
  )
}

export default SubjectGraph;
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class MultiAxisLine extends Component {
  constructor(props){
    super(props);
    this.state={
  }
}

render(){
  return(
    <Line data={{
      labels: ['1', '2', '3', '4', '5', '6','7','8','9','10','11', '12', '13', '14', '15', '16','17','18','19','20'],
  datasets: [
    {
      label: 'Number of Happy',
      data: this.props.lineInfo.happy,
      fill: false,
      backgroundColor: '#45d382',
      borderColor: '#45d382',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'Number of Sad',
      data: this.props.lineInfo.sad,
      fill: false,
      backgroundColor: '#d40000',
      borderColor: '#d40000',
      yAxisID: 'y-axis-1',
    },
    {
        label: 'Number of Neutral',
        data: this.props.lineInfo.neutral,
        fill: false,
        backgroundColor: '#4e8fda',
        borderColor: '#4e8fda',
        yAxisID: 'y-axis-1',
      },
  ],

                }} 

          options={{

            scales: {
              yAxes: [
                {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  id: 'y-axis-1',
                  
                },
                // {
                //   type: 'linear',
                //   display: true,
                //   position: 'right',
                //   id: 'y-axis-2',
                //   gridLines: {
                //     drawOnArea: false,
                //   },
                // },
              ],
            },

          }} />

    );
  }
}

export default MultiAxisLine;
import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends Component {
  constructor(props){
    super(props);
    this.state={
  }
}
  render(){
    return(
      <Doughnut 
          data={{
            labels: ['Angry','Confused','Fear','Happy','Neutral', 'Sad', 'Surprise'],
            datasets: [
              {
                label: '# of Votes',

                data: [ this.props.doughInfo.angry ,
                        this.props.doughInfo.confused ,
                        this.props.doughInfo.fear , 
                        this.props.doughInfo.happy ,
                        this.props.doughInfo.neutral ,
                        this.props.doughInfo.sad ,
                        this.props.doughInfo.surprise ],

                backgroundColor: [
                  '#003f5c',
                  '#374c80',
                  '#7a5195',
                  '#bc5090',
                  '#ef5675',
                  '#ff764a',
                  '#ffa600',
                ],
                borderColor: [
                  '#003f5c',
                  '#374c80',
                  '#7a5195',
                  '#bc5090',
                  '#ef5675',
                  '#ff764a',
                  '#ffa600',
                  
                ],
                borderWidth: 1,
              },
            ],
          }}
      />
    );
  }

}

export default DoughnutChart;
import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component{ 
  constructor(props){
    super(props);
    this.state={
  }
}
  render(){
    return ( 
    <Pie 
      data={{
        labels: ['Paying Attention', 'Not Paying Attention'],
        datasets: [
          {
            label: '# of Votes',
            data: [this.props.pieInfo.payingAttention,this.props.pieInfo.notPayingAttention],
            backgroundColor: [
              '#e8e8e8',
              '#c23939',
            ],
            borderColor: [
              '#e8e8e8',
              '#c23939',
            ],
            borderWidth: 1,
          },
        ],
      }} />
    );
  }
  }

export default PieChart;
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class HorizontalBarChart extends Component{
  constructor(props){
    super(props);
    this.state={
  }
}
  render(){
    return(
      <Bar
        data={{
          labels: ['Satisfied', 'Not Satisfied'],
          datasets: [
            {
              label: '# of Students',
              data: [this.props.barInfo.satisfied, this.props.barInfo.unsatisfied],
              backgroundColor: [
                '#41d27f',
                '#c23939',
              ],
              borderColor: [
                '#41d27f',
                '#c23939',
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          indexAxis: 'y',
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
        }}
      />
    );
  }
}

export default HorizontalBarChart;
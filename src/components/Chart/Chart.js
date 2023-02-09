import React from 'react';
import ChartBar from '../ChartBar/ChartBar';
import './Chart.css';


const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <section className='chart'>
      {
        props.dataPoints.map(dataPoint => 
          <ChartBar 
            key={dataPoint.label} 
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label} 
          />
        )
      }
    </section>
  )
}

export default Chart
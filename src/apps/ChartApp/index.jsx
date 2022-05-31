import React, { useState } from 'react';
import Chart from '../../components/Chart';
import TextInput from '../../components/TextInput';
import RadioInput from '../../components/RadioInput';
import styles from './ChartApp.module.css';

const ChartApp = () => {
  // initial chart state
  const INITIALCHART = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    values: [20, 10, 40, 30, 10]
  }
  // initial inputs state
  const INITIALINPUTS = {
    xLabels: '',
    yValues: ''
  }
  // state containing chart labels and values
  const [chart, setChart] = useState(INITIALCHART);
  // state with chart type
  const [chartType, setChartType] = useState('bar');
  // state for controlled inputs
  const [textInputValue, setTextInputValue] = useState(INITIALINPUTS);

  // input id matches controlled input name in state
  const textInputs = [
    {
      id: 'xLabels',
      label: 'X axis labels:',
      placeholder: INITIALCHART.labels.join(', ')
    },
    {
      id: 'yValues',
      label: 'Y axis values:',
      placeholder: INITIALCHART.values.join(', ')
    }
  ];

  // radio buttons to choose between different chart types
  const radioInputs = [
    {id: 'barChart', label: 'Bar Chart', value: 'bar'},
    {id: 'lineChart', label: 'Line Chart', value: 'line'},
    {id: 'pieChart', label: 'Pie Chart', value: 'pie'},
    {id: 'doughnutChart', label: 'Doughnut Chart', value: 'doughnut'}
  ];

  const handleRadioInputChange = (e) => {
    const value = e.target.value;
    setChartType(value);
  }

  const handleTextInputChange = (e) => {
    const { id, value } = e.target;
    setTextInputValue({
      ...textInputValue,
      [id]: value
    });
  }

  const handleTextInputKeyDown = (e) => {
    switch (e.key) {
      case 'Enter':
        e.target.blur();
        break;
    }
  }

  const updateChart = (e) => {
    // set initial values if inputs are empty
    if (!textInputValue.xLabels && !textInputValue.yValues) {
      setChart(INITIALCHART);
      return;
    }
    // lists of labels and values from inputs
    const inputLabels = textInputValue.xLabels.split(', ');
    const inputValues = textInputValue.yValues.split(', ');
    // update chart state with values from inputs
    if (inputLabels.length === inputValues.length) {
      setChart({
        ...chart,
        labels: inputLabels,
        values: inputValues
      });
    }
  }

  return (
    <div className={styles.chartContainer}>
      <div className={styles.inputs}>
        {textInputs.map(i =>
          <TextInput
            id={i.id}
            key={i.id}
            label={i.label}
            onBlur={updateChart}
            onChange={handleTextInputChange}
            onKeyDown={handleTextInputKeyDown}
            placeholder={i.placeholder}
            value={textInputValue[i.id]}
          />
        )}
      </div>
      <div className={styles.chart}>
        <Chart data={chart.values} labels={chart.labels} type={chartType} />
      </div>
      <div className={styles.radioBtns}>
        {radioInputs.map(i =>
          <RadioInput
            id={i.id}
            checked={i.value === chartType ? true : false}
            key={i.id}
            label={i.label}
            name="chartType"
            onChange={handleRadioInputChange}
            value={i.value}
          />
        )}
      </div>
    </div>
  );
}

export default ChartApp;

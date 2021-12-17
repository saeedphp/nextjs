import styles from './chart.module.css';
import {Fragment} from "react";
import ChartBar from "./chart-bar";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map((dataPoint) => (
        dataPoint.value
    ));
    const totalMaximum = Math.max(...dataPointValues);

    return (
      <Fragment>
          <div className={styles.chart}>
              {props.dataPoints.map((dataPoints) => (
                  <ChartBar
                      key={dataPoints.label}
                      value={dataPoints.value}
                      maxValue={totalMaximum}
                      label={dataPoints.label}
                  />
              ))}
          </div>
      </Fragment>
    );
};

export default Chart;
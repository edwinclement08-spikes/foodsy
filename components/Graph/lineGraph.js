import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'
 
class LineChartExample extends React.PureComponent {
 
    render() {
 
        const data = [ 50, 10, 40, 9, 15, 91, 35, 24, 50 ]
 
        return (
            <LineChart
                style={{ height: 200 }}
                data={ data }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
        )
    }
 
}
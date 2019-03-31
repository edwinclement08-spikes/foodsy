import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts';
 
export default class BarChartExample extends React.PureComponent {
 
    render() {
 
        const fill = 'rgb(134, 65, 244)'
        const data   = [ 50, 10, 45, 35, 53, 24, 50 ]
        const label = [ 'MON' , 'TUE' , 'WED', 'THUR' , 'FRI' , 'SAT' , 'SUN'  ]
        return (
            <BarChart
                style={{ height: 200 }}
                data={ data }
                svg={{ fill }}
                contentInset={{ top: 30, bottom: 30 }}
            >
                <Grid/>
            </BarChart>
        )
    }
 
}
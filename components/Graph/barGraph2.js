import React from 'react'
import { BarChart, Grid } from 'react-native-svg-charts';
 
export default class BarChartExample extends React.PureComponent {
 
    render() {
 
        const fill = 'rgb(14, 65, 244)'
        const data   = [ 10, 70, 45, 35, 23, 24, 60 ]
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
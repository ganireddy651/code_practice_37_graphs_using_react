// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccination} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    // <ResponsiveContainer width="100%" height={500}>
    <div className="bar-chat-container">
      <h1 className="heading">Vaccination Coverage</h1>
      <BarChart
        width={900}
        height={400}
        data={vaccination}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 0.5,
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar
          dataKey="dose1"
          name="dose1"
          radius={[10, 10, 0, 0]}
          fill="#5a8dee"
          barSize="20%"
        />
        <Bar
          dataKey="dose2"
          name="dose2"
          radius={[5, 5, 0, 0]}
          fill="#f54394"
          barSize="20%"
        />
      </BarChart>
    </div>
    // </ResponsiveContainer>
  )
}

export default VaccinationCoverage

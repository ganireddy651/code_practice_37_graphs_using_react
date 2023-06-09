// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccination} = props

  const DataFormatter = number => {
    if (number > 1500) {
      return `${(number / 1500).toString()}k`
    }
    return number.toString()
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={vaccination}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 20,
          }}
        />
        <Bar dataKey="dose1" name="dose1" fill="#5a8dee" barSize="10%" />
        <Bar dataKey="dose2" name="dose2" fill="#f54394" barSize="10%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage

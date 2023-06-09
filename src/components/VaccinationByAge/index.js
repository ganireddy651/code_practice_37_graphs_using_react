import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {byAge} = props

  return (
    <div className="bar-chat-container">
      <h1 className="heading">Vaccination by Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="30%"
          data={byAge}
          // startAngle={0}
          // endAngle={360}
          // innerRadius="40%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill=" #a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge

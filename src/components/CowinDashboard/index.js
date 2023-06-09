import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    cowinData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCowinData()
  }

  getFormatedData = data => ({
    vaccineDate: data.vaccine_date,
    dose1: data.dose_1,
    dose2: data.dose_2,
  })

  getCowinData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const option = {
      Method: 'GET',
    }
    const response = await fetch(url, option)

    if (response.ok === true) {
      const data = await response.json()
      const formattedData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(each =>
          this.getFormatedData(each),
        ),
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        cowinData: formattedData,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderCowindata = () => {
    const {cowinData} = this.state

    return (
      <div>
        <h1>Vaccination Coverage</h1>
        <VaccinationCoverage vaccination={cowinData.last7DaysVaccination} />
        <h1>Vaccination by gender</h1>
        <VaccinationByGender byGender={cowinData.vaccinationByGender} />
        <h1>Vaccination by Age</h1>
        <VaccinationByAge byAge={cowinData.vaccinationByAge} />
      </div>
    )
  }

  renderCowinFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCowindata()
      case apiStatusConstants.failure:
        return this.renderCowinFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    console.log(apiStatus)
    return (
      <div className="app-container">
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <p className="website">Co-Win</p>
        </nav>
        <h1 className="heading">Cowin Vaccination In India</h1>
        <div>{this.renderData()}</div>
      </div>
    )
  }
}

export default CowinDashboard

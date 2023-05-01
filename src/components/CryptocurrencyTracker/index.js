import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptocurrenciesListData: []}

  componentDidMount() {
    this.getCryptocurrenciesList()
  }

  getCryptocurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      currencyLogo: eachData.currency_logo,
    }))

    this.setState({
      isLoading: false,
      cryptocurrenciesListData: updatedData,
    })
  }

  render() {
    const {isLoading, cryptocurrenciesListData} = this.state

    return (
      <div className="crypto-tracker-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList
            cryptocurrenciesListData={cryptocurrenciesListData}
          />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker

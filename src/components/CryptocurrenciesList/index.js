// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptocurrenciesListData} = props

  return (
    <div className="crypto-list-container">
      <h1 className="title">Cryptocurrency Tracker</h1>

      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="crypto-image"
      />

      <div className="crypto-list-table">
        <div className="crypto-list-table-head">
          <p className="table-head-text col-1">Coin Type</p>
          <p className="table-head-text col-2">USD</p>
          <p className="table-head-text col-3">EURO</p>
        </div>
        {cryptocurrenciesListData.map(eachCurrency => (
          <CryptocurrencyItem
            key={eachCurrency.id}
            currencyItem={eachCurrency}
          />
        ))}
      </div>
    </div>
  )
}

export default CryptocurrenciesList

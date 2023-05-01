// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = currencyItem

  return (
    <li className="crypto-item-container">
      <div className="crypto-logo-currency-container col-1">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="crypto-item-text">{currencyName}</p>
      </div>
      <p className="crypto-item-text col-2">{usdValue}</p>
      <p className="crypto-item-text col-3">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem

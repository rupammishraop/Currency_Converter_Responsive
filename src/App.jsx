import InputBox from './components/InputBox'
import './App.css'
import { useEffect, useState } from 'react'
import useCurrencyInfo from '../customHooks/useCurrencyInfo';

function App() {
  let [amount, setAmount] = useState(1);
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");
  let [convertedAmount, setConvertedAmount] = useState();

  // fetch the data from Api
 
  let currencyData = useCurrencyInfo(from);

  let option = Object.keys(currencyData)
  // console.log(options);
 
  let convertTheAmount = () => {
    setConvertedAmount(amount * currencyData[to]);
  }
 
  let clickMe = () => {
    window.open("https://github.com/rupammishraop");
  }

  return (
    <>
      <div className="container">
        <div className="app">
          <div className='developerClick'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwlq5SY4yfyjOHVfE3pQF9a6Je7Q6iddMQyuwn4AIzw&s" alt=""
              onClick={clickMe}
            />
            <h3>Click Me</h3>
          </div>
          <div className='fromInput'>
            <InputBox
              //passing Props
              options={option}
              amount={amount}
              label="From"
              selectCurrency={from}
              onCurrencyChange={(newCurrency) => {
                setFrom(newCurrency)
              }}
              onAmountChange={(newAmount) => {
                if (newAmount < 0) {
                  alert("Negative Amount Not Allowed")
                  setAmount(0)
                } else if (newAmount === 0) {
                  setAmount(null)
                } else {
                  setAmount(newAmount)
                }
              }}


            />
          </div>
          <div className='toInput'>
            <InputBox
              //passing Props
              options={option}
              label="To"
              amount={convertedAmount}
              selectCurrency={to}
              onCurrencyChange={(newCurrency) => {
                setTo(newCurrency)
              }}


            />
          </div>
          <div className='convertBtn'>
            <button
              onClick={convertTheAmount}
            >Convert</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

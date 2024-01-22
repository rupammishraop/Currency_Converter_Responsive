import React from 'react'
function InputBox({
    amount,
    label,
    selectCurrency = "usd",
    onCurrencyChange,
    onAmountChange,
    options = []
}) {

    return (

        <>
            <div className='labels'>
                <label htmlFor="
            "> {label}</label>
                <label htmlFor="
            "> Currency Type</label>
            </div>
            <div className='inputs'>
                <input type="number"

                    placeholder='Amount'
                    value={amount}
                    onChange={(newValue) => {
                        onAmountChange && onAmountChange(Number(newValue.target.value))
                    }
                    }

                />
                <select
                    value={selectCurrency}
                    onChange={(newValue) => {

                        onCurrencyChange && onCurrencyChange(newValue.target.value)
                    }
                    }
                >
                    {options.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default InputBox
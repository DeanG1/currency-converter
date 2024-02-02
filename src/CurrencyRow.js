import React,{useEffect, useState} from 'react'
import './App.css'


export default function CurrencyRow(props) {

  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount
  } = props



  return (
    <div>
      <input className='input' type='number' value={amount} onChange={onChangeAmount}/>
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

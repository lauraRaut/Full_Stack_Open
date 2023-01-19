import { useState } from 'react'
const App = () => {

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


    const all = good + neutral + bad
    const average = ((good *1)) + (neutral * 0) + (bad * -1) / (good + neutral + bad)
    const countPositive = good/all *100

  return (
    <>
      <h1>give feedback</h1>
      
      <Button handleClick = {() => setGood (good +1)} text = 'good'/>
      <Button handleClick = {() => setNeutral (neutral +1)} text = 'neutral'/>
      <Button handleClick = {() => setBad (bad +1)} text = 'bad'/>

    
    <Statistics all = {all} 
                average = {average}
                countPositive = {countPositive} 
                good={good} 
                neutral={neutral} 
                bad={bad}
                 />
    </>
  )
}

const Button = (props) => (
  <button onClick= {props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {

  return (
    <>
    <td>{props.text}</td><td> {props.value}</td>  
    </>
  )

}

const Statistics = (props) => {

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {

    return (
      <div>
   No feedback given
      </div>
    )
  }

  return (
  
<table>
  <tbody>
   <tr><StatisticLine text="good" value={props.good} /></tr> 
   <tr><StatisticLine text="neutral" value={props.neutral} /></tr> 
   <tr><StatisticLine text="bad" value={props.bad} /></tr>
   <tr><StatisticLine text="all" value={props.all} /></tr>
   <tr><StatisticLine text="Average" value= {props.average} /></tr>
   <tr><StatisticLine text="Positive" value= {props.countPositive} /></tr>
  </tbody>
  </table>
 
  
  )
}


export default App
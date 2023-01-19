import { useState } from 'react'

const App = () => {
   
  const [selected, setSelected] = useState('')

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  var randomNumber = Math.floor(Math.random()*anecdotes.length);
  var randomElement = anecdotes[randomNumber];
  

  return (
    <div>
      <Button handleClick= {() => setSelected (randomElement)} text="Uusi anekdootti" />
     
     <Hello selected={selected}/>
 {console.log(selected)}
    </div>
  )
}
const Button = (props) => (
  <button onClick= {props.handleClick}>
    {props.text}
  </button>
)
const ChosenAnecdote = (props) => {

  return (
    
    <p>{props.value}</p>
    
  )

}
const Hello = (props) => {

  if (props.selected === '') {

    return (
      <div>
   Press the button
      </div>
    )
  }

  return (
  
<ChosenAnecdote value={props.selected}/>
 

  )
}


export default App
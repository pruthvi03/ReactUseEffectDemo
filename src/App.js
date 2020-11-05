import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import { ThemeProvider } from 'styled-components'
// import Button from './element/Button'
import axios from 'axios'
const theme = {
  primary: '#4CAF50',
  mango: 'yellow'
}

function App() {

  const [card, setCard] = useState([])
  const [id, setId] = useState(1)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        console.log(res.data)
        setCard(res.data)
      })
  }, [id])

  // const toggleShowCard = () => setShowCard(!showCard)
  // const deleteCardHandler = (cardIndex) => {
  //   const cards_copy = [...cards]
  //   cards_copy.splice(cardIndex, 1)
  //   console.log('cards_copy', cards_copy)
  //   console.log('cards', cards)
  //   setCards(cards_copy)

  // }
  const changeNameHandler = (event, id) => {
    //1. make a copy of the cards
    const card_copy = {...card}
    //2. change the name of the specific card
    card_copy.name = event.target.value
    //3. set the card with the latest version of card copy
    setCard(card_copy)
  }
  // const buttonStyle = {
  //   backgroundColor: null
  // }
  // const classes = ['button']
  // if (cards.length < 3) classes.push('pink')
  // if (cards.length < 2) classes.push('red text');
  // const cardsMarkup = showCard && (
  //   cards.map((card, index) =>
  //     <Card
  //       name={card.name}
  //       phone={card.phone}
  //       key={card.id}
  //       onDelete={() => deleteCardHandler(index)}
  //       onChangeName={(event) => changeNameHandler(event, card.id)}
  //     />)
  // )

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <Card
          name={card.name}
          phone={card.phone}
          key={card.id}
          onChangeName={(event) => changeNameHandler(event, card.id)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;

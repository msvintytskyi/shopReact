import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from './components/Items'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Chair grey',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'tables',
          price: '149.00',
        },
        {
          id: 3,
          title: 'Coach',
          img: 'coach.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'coaches',
          price: '349.99',
        },
        {
          id: 4,
          title: 'Lamp',
          img: 'lamp.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'lamps',
          price: '29.99',
        },
        {
          id: 5,
          title: 'Chair white',
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
          category: 'chairs',
          price: '59.99',
        },
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
  
}

export default App;

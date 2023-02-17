import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageNumber: 0,
    total: 0,
    Head: 0,
    Tail: 0,
  }

  rotate = () => {
    const coin = Math.floor(Math.random() * 2)

    this.setState(prevState =>
      coin === 0
        ? {
            imageNumber: coin,
            Head: prevState.Head + 1,
            Tail: prevState.Tail,
            total: prevState.Head + prevState.Tail + 1,
          }
        : {
            imageNumber: coin,
            Head: prevState.Head,
            Tail: prevState.Tail + 1,
            total: prevState.Head + prevState.Tail + 1,
          },
    )
  }

  render() {
    const {imageNumber, total, Head, Tail} = this.state
    console.log(imageNumber)
    const CoinRandom = [
      'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    ]
    const image = CoinRandom[imageNumber]
    return (
      <div className="bgContainer">
        <div className="container">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} className="image" alt="toss result" />

          <button className="button" type="button" onClick={this.rotate}>
            Toss Coin
          </button>
          <div className="countContainer">
            <p className="para1">Total: {total}</p>
            <p className="para1">Heads: {Head}</p>
            <p className="para1">Tails: {Tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

import React from 'react'
import styled from 'styled-components'
import md5 from 'md5'
import MarvelList from './pages/MarvelList'

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
`

class App extends React.Component {
  state = {
    data: {},
  }

  componentDidMount(){
    const ts = `${Date.now()}`
    const apikey = "41d8b2187390c7255bd3cd8c034bf8c3"
    const privatekey = "4656fb7bbef9379ebd1c6d5851dadc379160a6e2"
    const hash = md5(ts + privatekey + apikey)
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`)
    .then(res => res.json())
    .then(resData => {
      this.setState({data: resData.data}, () => console.log(this.state.data))
    })
  }

  render(){
    return(
      <AppContainer>
        <MarvelList data={this.state.data.results} />
      </AppContainer>
    )
  }
}

export default App

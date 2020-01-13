import React from 'react'
import styled from 'styled-components'
import md5 from 'md5'
import { Router } from '@reach/router'
import MarvelList from './pages/MarvelList'
import HeroPage from './pages/HeroPage'

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 4em;
  background-color: #f2f2f2;
  overflow-x: hidden;
`

class App extends React.Component {
  state = {
    data: [],
    selectedElem: {
      name: '',
      description:'',
      imgUrl: '',
      comics: {},
      series: {}
    },
    offset: 0,
    loading: false,
  }

  componentDidMount(){
    const ts = `${Date.now()}`
    const apikey = "41d8b2187390c7255bd3cd8c034bf8c3"
    const privatekey = "4656fb7bbef9379ebd1c6d5851dadc379160a6e2"
    const hash = md5(ts + privatekey + apikey)
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`)
    .then(res => res.json())
    .then(resData => {
      this.setState({data: resData.data.results, offset: 20}, () => console.log(this.state.data))
    })
  }

  nextResult = e => {
    const ts = `${Date.now()}`
    const apikey = "41d8b2187390c7255bd3cd8c034bf8c3"
    const privatekey = "4656fb7bbef9379ebd1c6d5851dadc379160a6e2"
    const hash = md5(ts + privatekey + apikey)
    this.setState({ loading: true })
    fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&offset=${this.state.offset}`)
    .then(res => res.json())
    .then(resData => {
      this.setState(prevState => ({
        data: [...prevState.data, ...resData.data.results],
        offset: prevState.offset + 20,
        loading: false
      }))
    })
  }

  handleElemClick = (el) => {
    this.setState({ selectedElem: {
      name: el.name,
      description: el.description,
      imgUrl: el.imgUrl,
      comics: el.comics,
      series: el.series,
    }}, () => console.log(this.state.selectedElem))
  }

  render(){
    return(
      <AppContainer>
        <Router>
          <MarvelList data={this.state.data} handleClick={this.handleElemClick} next={this.nextResult} loading={this.state.loading} path="/" />
          <HeroPage path="characters/:id" selectedHero={this.state.selectedElem} />
        </Router>

      </AppContainer>
    )
  }
}

export default App

import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: white;
`

const Header = styled.div`
  background-color: white;
  width: 95%;
  margin: auto;
  padding: 1em;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  .img {
    background-image: ${props => props.img && `url(${props.img}/portrait_uncanny.jpg)`} ;
    width: 200px;
    height: 200px;
    background-image: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-shrink: 0;
    border-radius: 10px;
  }

  .details {
    padding: 2em;
    .title {
      font-size: 2em;
      letter-spacing: 2px;
    }

    .desc {
      padding: .5em;
      font-size: 1.1em;
    }
  }
`

const Title = styled.div`
  padding: 2em 2em 1em 2em;
  color: rgba(0,0,0, .8);
  font-size: 1.3em;
`

const ActivityContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 1.5em 1em;
`

const UniqEntry = styled.div`
  color: rgba(0,0,0, .7);
  width: 90%;
  margin: auto;
  padding: .3em 1em;
  word-spacing: 1px;
  :before {
    content: " · "
  }
`

const HeroPage = ({ selectedHero }) => {
  return (
    <HeroContainer>
      <Header img={selectedHero.imgUrl}>
        <div className="img" />
        <div className="details">
          <div className="title"> {selectedHero.name} </div>
          <div className="desc">{selectedHero.description}</div>
        </div>
      </Header>
      <ActivityContainer>
        <Title> Comics [{selectedHero.comics.available}] </Title>
        {selectedHero && selectedHero.comics.available > 1 ? (
          selectedHero.comics.items.map((comic, key) => {
            return (
              <UniqEntry key={key}> {comic.name} </UniqEntry>
            )
          })
        ): (
          <UniqEntry>{selectedHero && selectedHero.comics.items[0]}</UniqEntry>
        )}
        <Title> Series [{selectedHero.series.available}] </Title>
        {selectedHero && selectedHero.series.available > 1 ? (
          selectedHero.series.items.map((serie,key) => {
            return (
              <UniqEntry key={key}> {serie.name} </UniqEntry>
            )
          })
        ):(
          <UniqEntry>{selectedHero && selectedHero.series.items[0]}</UniqEntry>
        )}
      </ActivityContainer>

    </HeroContainer>
  )
}

export default HeroPage

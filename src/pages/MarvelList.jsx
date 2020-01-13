import React from 'react'
import styled from 'styled-components'
import MarvelCard from '../components/MarvelCard'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
`

const MarvelList = ({ data }) => {

  return (
    <ListContainer>
      {data && data.map(heroes => {
        return (
          <MarvelCard key={heroes.id} name={heroes.name} img={heroes.thumbnail.path}/>
        )
      })}
    </ListContainer>
  )
}

export default MarvelList

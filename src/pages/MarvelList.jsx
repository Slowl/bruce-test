import React from 'react'
import styled from 'styled-components'
import MarvelCard from '../components/MarvelCard'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
`

const MarvelList = ({ data, handleClick }) => {

  return (
    <ListContainer>
      {data && data.map(heroes => {
        return (
          <MarvelCard
            key={heroes.id}
            name={heroes.name}
            imgUrl={heroes.thumbnail.path}
            description={heroes.description}
            comics={heroes.comics}
            series={heroes.series}
            id={heroes.id}
            onClick={handleClick} />
        )
      })}
    </ListContainer>
  )
}

export default MarvelList

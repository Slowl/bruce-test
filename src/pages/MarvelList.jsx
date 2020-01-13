import React from 'react'
import styled from 'styled-components'
import MarvelCard from '../components/MarvelCard'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  padding-bottom: 2em;
`
const Next = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  margin-top: 8em;
  background-color: white;
  border-radius: 8px;
  text-align: center;
  letter-spacing: 1px;
  width: 20%;
  margin: auto;
  cursor: pointer;
  transition: .3s;

  :hover {
    background-color: #323232;
    color: #f4f4f4;
  }

  :after{
    display: inline-block;
    margin-left: 2em;
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50px;
    background-color: #6ef76f;
    opacity: 0;
    animation: ${props => props.loading ? ".3s linear 0s infinite alternate loader" : "0s linear 0s infinite alternate loader"};

    @keyframes loader {
      from {opacity: 1;}
      to {opacity: 0;}
    }
  }
`
const MarvelList = ({ data, handleClick, next, loading }) => {

  return (
    <div>
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
      <Next onClick={() => next()} loading={loading}>LOAD MORE</Next>
    </div>
  )
}

export default MarvelList

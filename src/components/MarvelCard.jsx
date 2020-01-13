import React from 'react'
import styled from 'styled-components'
import {Link} from '@reach/router'

const Card = styled(Link)`
  display: block;
  text-decoration: none;
  color: #1d1d1d;
  background-color: #ffffff;
  width: 280px;
  height: 250px;
  margin: 1.2em;
  border-radius: 10px;
  transition: .3s;
  outline: 0;

  :hover {
    box-shadow: 0px 2px 25px rgba(0,0,0, .1);
    transform: translateY(-5px);
  }

  .profile-pic {
    width: 100%;
    background-image: ${props => props.img ? `url(${props.img}/portrait_uncanny.jpg)` : 'url("https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")'} ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 60%;
    border-radius: 10px 10px 0px 0px;
  }

  .container-info {
    border: 1px solid rgba(0,0,0, .0);
    border-top: 0px;
    border-radius: 0px 0px 10px 10px;
  }

  .title {
    padding-top: 1em;
    font-size: 1.2em;
    letter-spacing: 1px;
    text-align: center;

    :after {
      display: block;
      content: '';
      background-color: rgba(0,0,0, .1);
      width: 80%;
      height: 1px;
      margin: .8em auto 0;
    }
  }

  .viewmore {
    text-align: center;
    padding: .7em;
    color: rgba(0,0,0, .45);
    letter-spacing: 1px;
    font-size: .9em;
  }
`

const MarvelCard = ({ name, imgUrl, id, onClick, description, comics, series }) => {
  return (
    <Card to={`characters/${id}`} img={imgUrl} onClick={() => onClick({ name, imgUrl, description, comics, series })} >
      <div className="profile-pic" />
      <div className="container-info">
        <div className="title"> {name} </div>
        <div className="viewmore"> view more </div>
      </div>
    </Card>
  )
}

export default MarvelCard

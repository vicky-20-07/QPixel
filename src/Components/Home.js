import React, { useEffect, useState } from 'react';
import HomeHeader from './HomeHeader';
import MainBoard from './MainBoard';
import Unsplash from '../api/Unsplash';
import Scroller from './Scroller';
import styled from 'styled-components';

function Home() {

  const [pins, setNewPins] = useState([]);

  const getImages = (e) => {
    return Unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: e
      }
    });
  };

  const onSearchSubmit = (e) => {
    getImages(e).then((res) => {
      let results = res.data.results;
      let newPins = [
        ...results,
        ...pins,
      ]

      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });
      setNewPins(newPins);
    });
  };

  const getNewPins = () => {
    let promises = [];
    let pinData = [];
    let pins = [];

    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);
          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      setNewPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
      <div className="app">
        <Wrapper />
        <HomeHeader onSubmit={onSearchSubmit} />
        <Scroller props={Array} />
        <MainBoard pins={pins} />
      </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: #100C08;
`

export default Home;

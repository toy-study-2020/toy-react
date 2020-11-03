import React from 'react';
import Gnb from '../../components/Main/Gnb';
import Store from '../../components/Main/Store';
import Best from '../../components/Main/Best';
import Event from '../../components/Main/Exhibition';
import Products from '../../components/Main/Products';
import { MainWrapStyles } from './MainContStyles';
import { useContext } from 'react';
import { MainContext } from './MainContainer';

const MainPresenter = () => {
  const {menu, mainStore, mainBest, mainEvent, mainProducts} = useContext(MainContext)
    
  return (
    <MainWrapStyles>
      <Gnb apis={menu}/>
      <Store apis={mainStore}/>
      <Best apis={mainBest}/>
      <Event apis={mainEvent}/>
      <Products apis={mainProducts}/>
    </MainWrapStyles>
  );
};

export default MainPresenter;
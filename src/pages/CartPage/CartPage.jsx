import React from 'react'
import { useContext } from 'react';
import AppContext from '../../context/context';
import { StyledCart } from './styles';

export default function CartPage() {

  const {status} = useContext(AppContext)
  return (
    <StyledCart>
      <div className="cart-container">
        <h1>{status}</h1>
      </div>
    </StyledCart>
  );
}

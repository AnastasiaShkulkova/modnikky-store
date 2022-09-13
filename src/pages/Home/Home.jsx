import React from 'react'
import { Categories } from '../../components/Categories/Categories';
import { ProductReview } from '../../components/ProductReview/ProductReview';
import Sales from '../../components/Sales/Sales';
import UpdateSubscription from "../../components/UpdateSubscription/UpdateSubscription";
import Header from './Header/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Categories />
        <Sales />
        <ProductReview />
        <UpdateSubscription />
      </div>
    </>
  );
}

import React, { Component, useEffect } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import './custom.css'
import { WishlistSection } from './TypeScript/Wishlist/WishlistSection';
import { DogFoodReviewList } from './TypeScript/DogFoodReviews/DogFoodReviewList';

export default function App () {

  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/wishlist' component={WishlistSection} />
      <Route exact path='/foodreviews' component={DogFoodReviewList} />
    </Layout>
  );
}

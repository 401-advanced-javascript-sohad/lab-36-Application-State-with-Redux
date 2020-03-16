/* eslint-disable no-unused-vars */
import React from 'react';
// import Header from '../src/modal/header.js';
// import Footer from './modal/footer.js';

import Status from '../src/components/status.js';
import ShowProduct from '../src/components/catagore-counter.js';

export default props => {
  console.log('propsssss', props);
  return (
    <>
      {/* <Header /> */}
      <ShowProduct />
      <Status />
      {/* <Footer /> */}
    </>
  );
};

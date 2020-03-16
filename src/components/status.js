/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { render, reset } from '../store/action.js';




const Status = props => {
  return (
    <article>
      {props.activeCategories}

      {<ul>
        {props.action.products.map((data, idx) => {
          return <li onClick={() => props.render(data.categoryAassociation)} key={idx}>
            {data.categoryAassociation},  {data.name},  {data.description}, {data.price}, {data.inventoryCount}
          </li>;
        })
        }
      </ul>}
      <button onClick={props.reset}>Show</button>
    </article>
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const mapStateToProps = state => ({
  action: state.action,
  activeCategories: state.action.activeCategories,
});

const mapDispatchToProps = { render, reset };
export default connect(mapStateToProps, mapDispatchToProps)(Status);
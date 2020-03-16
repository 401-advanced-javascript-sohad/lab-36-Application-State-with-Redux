// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { render, reset } from '../store/action.js';




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const ShowProduct = props => {
//   console.log('propsssssss',props);
  return (
    <article>

      <ul>
        {props.action.categories.map((data, idx) => {
          return <li onClick={() => props.render(data.displayName)} key={idx}>
            {data.displayName},  {data.normalizedName},  {data.description}
          </li>;
        })
        }

      </ul>


    </article>
  );
};




const mapStateToProps = state => ({
  action: state.action,
});

const mapDispatchToProps = { render, reset };
export default connect(mapStateToProps, mapDispatchToProps)(ShowProduct);
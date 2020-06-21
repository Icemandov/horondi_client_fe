import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import wrapper from '../../hoc/wrapper';

function Test() {
  const client = useApolloClient();
  const handler = () => {
    client
      .query({
        query: gql`
          {
            getAllCategories {
              _id
              categoryCode
              available
            }
          }
        `
      })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <button type='button' onClick={handler}>
        test
      </button>{' '}
    </div>
  );
}

export default wrapper(Test);

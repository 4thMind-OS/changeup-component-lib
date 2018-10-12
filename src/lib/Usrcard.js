import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const UserCard = () => (
    <Query
      query={gql`
        {
            user {
                first_name
                last_name
            }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Please hold</p>;
        if (error) return <p>Somethin didnt go right... whoops</p>;
        console.log(data);
        return(
          <div>
              first name: {data.user.first_name}
              last_name: {data.user.last_name}
          </div>
        );
      }}
    </Query>
  );
  
export default UserCard;

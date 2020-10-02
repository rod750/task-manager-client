import { gql } from "@apollo/client";

export const getTasks = gql`
  query GetTasks {
    TaskMany(sort: _ID_DESC) {
      _id
      name
      description
      duration
      order
      pausedAt
      finishedAt
      elapsedTime
      updatedAt
      createdAt
    }
  }
`;

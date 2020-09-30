import { gql } from "@apollo/client";

export const getTasks = gql`
  query GetTasks {
    TaskMany {
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

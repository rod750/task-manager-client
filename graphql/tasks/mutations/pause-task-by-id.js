import { gql } from "@apollo/client"

export const pauseTaskById = gql`
  mutation PauseTaskById($id: MongoID!) {
    TaskPauseById(_id: $id) {
      _id
      status
      elapsedTime
    }
  }
`;

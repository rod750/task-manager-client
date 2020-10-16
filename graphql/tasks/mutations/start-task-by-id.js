import { gql } from "@apollo/client"

export const startTaskById = gql`
  mutation StartTaskById($id: MongoID!) {
    TaskStartById(_id: $id) {
      _id
      status
      elapsedTime
    }
  }
`;

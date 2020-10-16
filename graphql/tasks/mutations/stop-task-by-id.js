import { gql } from "@apollo/client"

export const stopTaskById = gql`
  mutation stopTaskById($id: MongoID!) {
    TaskStopById(_id: $id) {
      _id
      status
      elapsedTime
    }
  }
`;

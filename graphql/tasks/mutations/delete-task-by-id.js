import { gql } from "@apollo/client"

export const deleteTaskById = gql`
  mutation DeleteTaskById($id: MongoID!) {
    TaskRemoveById(_id: $id) {
      recordId
    }
  }
`;

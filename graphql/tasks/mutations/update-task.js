import { gql } from "@apollo/client";

export const updateTask = gql`
  mutation TaskUpdateOne($record: UpdateOneTaskInput!) {
    recordId
  }
`

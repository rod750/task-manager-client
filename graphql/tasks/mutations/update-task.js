import { gql } from "@apollo/client";

export const updateTask = gql`
  mutation UpdateTask($record: UpdateByIdTaskInput!) {
    TaskUpdateById(record: $record) {
      recordId
    }
  }
`

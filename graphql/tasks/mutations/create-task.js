import { gql } from "@apollo/client";

export const createTask = gql`
  mutation CreateTask($record: CreateOneTaskInput!) {
    TaskCreateOne(record: $record) {
      recordId
    }
  }
`

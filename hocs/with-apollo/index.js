import { ApolloContextProvider } from "../../contexts/shared/apollo/provider"

export function withApollo(Component) {
  return function(props) {
    return (
      <ApolloContextProvider>
        <Component {...props} />
      </ApolloContextProvider>
    )
  }
}

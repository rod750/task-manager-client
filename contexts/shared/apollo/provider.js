import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloContext } from "./context"

export function ApolloContextProvider({ children }) {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache()
  })

  return (
    <ApolloContext.Provider value={{ client }}>
      {children}
    </ApolloContext.Provider>
  )
}

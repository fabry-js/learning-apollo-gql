import { gql } from "@apollo/client";

export const EXCHANGE_RATES = gql`
query GetRates {
  rates(currency: "USD") {
    currency
  }
}
`
import React from "react"
import { render } from "@testing-library/react"
import Index from "./index"
import { Keyword } from "@iaf/api"

test("renders finish card", () => {
  const { getByText } = render(
    <Index
      name="Scenario A"
      steps={[
        { id: "1", keyword: Keyword.Visit, value: "http://example.com/" },
      ]}
    />
  )
  const finishCardElement = getByText(/Finish/i)
  expect(finishCardElement).toBeInTheDocument()
})

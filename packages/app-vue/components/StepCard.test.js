import { render, screen } from "@testing-library/vue"
import { Keyword } from "@iaf/api"
import StepCard from "./StepCard.vue"

test("renders visit URL text", () => {
  const url = "http://example.com/"
  render(StepCard, {
    props: {
      step: {
        id: "1",
        keyword: Keyword.Visit,
        value: url,
      },
      stepNumber: 1,
    },
  })
  screen.getByText(`Visit "${url}"`)
})

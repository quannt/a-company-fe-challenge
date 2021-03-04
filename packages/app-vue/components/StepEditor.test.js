import { render, screen } from "@testing-library/vue"
import StepEditor from "./StepEditor.vue"

test("renders correctly.", () => {
  render(StepEditor)

  screen.getByTestId("step-editor-input")
  screen.getByTestId("step-editor-dropdown")
})

// test("emits event when input changes.", () => {
//   render(StepEditor)
//   const input = screen.getByTestId("step-editor-input")
//   fireEvent.change(input, { target: { value: "a" } })
// })

// test("emits event when input type changes.", () => {})

import { render, fireEvent, screen } from "@testing-library/vue"
import { rest } from "msw"
import { setupServer } from "msw/node"

import index from "./index.vue"

// declare which API requests to mock
const server = setupServer(
  // capture "GET /greeting" requests
  rest.get("http://localhost:8080/scenario", (res, ctx) => {
    // respond using a mocked JSON body
    return res(
      ctx.json({
        id: "sc1",
        name: "Scenario A",
        steps: [
          {
            id: "1",
            keyword: 0,
            value: "http://example.com/",
          },
          {
            id: "2",
            keyword: 1,
            value: "test",
          },
          {
            id: "3",
            keyword: 1,
            value: "test2",
          },
          {
            id: "4",
            keyword: 1,
            value: "test3",
          },
          {
            id: "5",
            keyword: 1,
            value: "test4",
          },
          {
            id: "6",
            keyword: 1,
            value: "test5",
          },
          {
            id: "7",
            keyword: 1,
            value: "test6",
          },
        ],
      })
    )
  }),

  rest.get("/email", (res, ctx) => {
    // respond using a mocked JSON body
    return res(
      ctx.json({
        id: `e1614845261945${Date.now()}_${Math.random()}`,
        address: `e1614845261945${Date.now()}_${Math.random()}@example.com`,
      })
    )
  })
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

test("renders correctly.", () => {
  render(index, {
    stubs: ["FontAwesomeIcon"],
  })
})

test("input change reflects to step.", async () => {
  render(index, {
    stubs: ["FontAwesomeIcon"],
  })

  const step = await screen.findByTestId("step-card")
  fireEvent.click(step)

  const editorInput = await screen.findByTestId("step-editor-input")
  fireEvent.change(editorInput, {
    target: { value: "this is input from jest." },
  })
  await screen.findByText("this is input from jest.")
})

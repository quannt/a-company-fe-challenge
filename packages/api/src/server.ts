import "make-promises-safe"
import fastify from "fastify"
import fastifyCors from "fastify-cors"
import { Email, Keyword, Scenario } from "./types"

const server = fastify({ logger: true })

server.register(fastifyCors, {})

server.get("/", async () => {
  return { hello: "world" }
})

server.get(
  "/scenario",
  async (): Promise<Scenario> => {
    return {
      id: "sc1",
      name: "Scenario A",
      steps: [
        {
          id: "1",
          keyword: Keyword.Visit,
          value: "http://example.com/",
        },
        { id: "2", keyword: Keyword.InputText, value: "test" },
        { id: "3", keyword: Keyword.InputText, value: "test2" },
        { id: "4", keyword: Keyword.InputText, value: "test3" },
        { id: "5", keyword: Keyword.InputText, value: "test4" },
        { id: "6", keyword: Keyword.InputText, value: "test5" },
        { id: "7", keyword: Keyword.InputText, value: "test6" },
      ],
    }
  }
)

server.get(
  "/email",
  async (): Promise<Email> => {
    return {
      id: `e${Date.now()}`,
      address: `e${Date.now()}@example.com`,
    }
  }
)

const start = async () => {
  try {
    await server.listen(8080)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()

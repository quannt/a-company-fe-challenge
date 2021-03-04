import { config } from "@vue/test-utils"

config.stubs["client-only"] = { templte: "<div><slot /></div>" }
// config.stubs["font-awesome-icon"] = { templte: "<div><slot /></div>" }
// config.stubs["v-popover"] = { templte: "<div><slot /></div>" }

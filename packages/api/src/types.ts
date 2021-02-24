export enum Keyword {
  Visit,
  InputText,
}
export type Step = { id: string; keyword: Keyword; value: string }
export type Scenario = {
  id: string
  name: string
  steps: Step[]
}
export type Email = {
  id: string
  address: string
}

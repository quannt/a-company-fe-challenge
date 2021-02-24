import styled from "styled-components"

export default function Arrow() {
  return (
    <Wrapper>
      <ArrowBody />
      <ArrowHead />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
const ArrowBody = styled.div`
  border: 0.0625rem dashed #d8d8dc;
  width: 100%;
`
export const ARROW_HEAD_WIDTH = "0.75rem"
const ArrowHead = styled.div`
  border-top: calc(${ARROW_HEAD_WIDTH} / 2) solid transparent;
  border-bottom: calc(${ARROW_HEAD_WIDTH} / 2) solid transparent;
  border-left: ${ARROW_HEAD_WIDTH} solid #d8d8dc;
  flex: none;
`

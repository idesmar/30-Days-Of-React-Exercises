import { useState } from 'react'
import { v4 as uuidv4, } from 'uuid'
import styled from 'styled-components'
import { em, rem } from '../utils/unitConvert'


const Wrapper = styled.div`
  padding: 1rem;
  max-width: ${rem(900)};
  width: 100%;
  display: flex;
  // align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const GenerateUUIDButton = styled.button`
  padding: ${rem(8)};
  background-color: #0000ff;
  border-radius: ${em(8)};
  height: fit-content;
`

const UUIDText = styled.textarea`
  outline: 1px solid #514848;
  padding: 0.5rem;
`

const UUIDEx = () => {
  const [uuid, setUuid] = useState('')

  const handleGenerateUUID = () => {
    setUuid(prev => uuidv4())
  }

  const handleChange = (e) => {
    const { value } = e.target
    setUuid(prev => prev + value )
  }

  return (
    <Wrapper>
      <GenerateUUIDButton
        onClick={handleGenerateUUID}
      >
        Generate UUID
      </GenerateUUIDButton>
      <UUIDText
        name='uuid'
        value={uuid}
        onChange={handleChange}
      />
    </Wrapper>
  )
}


export { UUIDEx }

import {useState} from 'react'

import {
  Appbgcontainer,
  Heading,
  HookText,
  ReactHookImg,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isReadMore, setReadmore] = useState(false)

  const getDescription = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const onShowDescription = () => {
    setReadmore(prevState => !prevState)
  }

  return (
    <Appbgcontainer>
      <Heading>React Hooks</Heading>
      <HookText>Hooks are a new addition to React</HookText>
      <ReactHookImg
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{getDescription}</Description>
      <Button type="button" onClick={onShowDescription}>
        {buttonText}
      </Button>
    </Appbgcontainer>
  )
}
export default ReadMore

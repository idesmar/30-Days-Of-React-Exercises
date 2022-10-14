import { useParams } from 'react-router-dom'

/* //NOTE:  useParams hook takes no parameters  */


const SomeContact = () => {
  const { contactId } = useParams()
  return (
    <h1>
      Contact with contactId: {contactId}
    </h1>
  )
}

const SomeOtherContact = () => {
  const { contactId } = useParams()
  return (
    <h1>
      Some other Contact with id: {contactId}
    </h1>
  )
}

const Contact = () => {
  return (
    <h1>Contact</h1>
  )
}


export { Contact, SomeContact, SomeOtherContact }

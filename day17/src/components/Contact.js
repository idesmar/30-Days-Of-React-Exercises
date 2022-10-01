import { useParams } from 'react-router-dom'

/* //NOTE:  useParams hook takes no parameters  */


const SomeContact = () => {
  const { contactId } = useParams()
  return (
    <div>
      Contact with contactId: {contactId}
    </div>
  )
}

const SomeOtherContact = () => {
  const { contactId } = useParams()
  return (
    <div>
      Some other Contact with id: {contactId}
    </div>
  )
}

const Contact = () => {
  return (
    <div>Contact</div>
  )
}


export { Contact, SomeContact, SomeOtherContact }

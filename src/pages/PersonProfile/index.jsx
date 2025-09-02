import { useState, useEffect } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile( { people, hiredPeople, hirePerson } ) {
  const [person, setPerson] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    try {
      setPerson(people[id]);
    } catch {
      return;
    }
  }, [id, people]);

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={hirePerson} />
    </article>
  )
}

export default PersonProfile

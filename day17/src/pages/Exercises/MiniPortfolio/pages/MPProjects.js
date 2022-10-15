import { useNavigate } from "react-router-dom"
import { colorMe } from "../../../../utils/colorFunc"


const flex = {
  padding: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '0.5rem',
}

const smallBox = {
  aspectRatio: '1/1',
  width: '10rem',
  cursor: 'pointer',
  position: 'relative',
}

const smallBoxTitle = {
  textAlign: 'center',
  position: 'absolute',
  bottom: '0',
  width: '100%',
  padding: '1rem',
}

const buttonStyle = {
  backgroundImage: 'linear-gradient(30deg, black, red)',
  border: '1px solid red',
  borderRadius: '100vw',
  padding: '0.5em 1.1em',
  margin: '0 auto',
  display: 'block',
}

const BOX_COUNT = 6

const arr = [...Array(BOX_COUNT).keys()]

const MPProjects = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Projects</h2>
      <div style={flex}>
        {
          arr.map(box => (
            <div
              key={'project' + box + 1}
              style={
                {
                  ...smallBox,
                  backgroundColor: colorMe('dark')
                }
              }
              onClick={() => navigate('./*', { state: 'Projects' })}
            >
              <h3 style={smallBoxTitle}>Project {box + 1}</h3>
            </div>
          ))
        }
      </div>
      <button
        style={buttonStyle}
        onClick={() => navigate('void')}
      >
        Visit the void?
      </button>
    </div>
  )
}


export { MPProjects }

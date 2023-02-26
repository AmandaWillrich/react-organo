import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {

    const cssStyles = { backgroundColor: props.secondColor }

    return (
        props.collaborators.length > 0 && <section className="team" style={cssStyles}>
            <h3 style={{ borderColor: props.firstColor }}>{props.name}</h3>
            <div className="card">
                {props.collaborators.map(collaborator => <Collaborator  backgroundColor={props.firstColor} key={collaborator.name} name={collaborator.name} role={collaborator.role} image={collaborator.image} />)}
            </div>
        </section>
    )
}

export default Team
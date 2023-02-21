import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {

    const cssStyles = {backgroundColor: props.secondColor}

    return (
        <section className="team" style={cssStyles}>
            <h3 style={{ borderColor: props.firstColor }}>
                {props.name}
            </h3>
            <Collaborator />
        </section>
    )
}

export default Team
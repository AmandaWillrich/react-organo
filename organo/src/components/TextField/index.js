import './TextField.css'

// pode ser com função declarada, como em Banner, ou em Arrow Function

const TextField = (props) => {
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default TextField;
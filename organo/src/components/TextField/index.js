import './TextField.css'

// pode ser com função declarada, como em Banner, ou em Arrow Function

const TextField = (props) => {


    const whenTyped = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyped} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField;
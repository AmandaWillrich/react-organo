import './DropdownList.css'

const DropdownList = (props) => {
    return (
        <div className='dropdown-list'>
            <label>{props.label}</label>
            <select value={props.value} onChange={event => props.onChange(event.target.value)} required={props.required}>
                <option value=""></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
};

export default DropdownList;
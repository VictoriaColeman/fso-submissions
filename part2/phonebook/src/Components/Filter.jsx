const Filter = ({ filter, eventHandler }) => {

    return (
        <div>
            filter for entries with name: <input value={filter} onChange={eventHandler} />
        </div>
    )
}

export default Filter

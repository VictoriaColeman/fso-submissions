const Form = ({ name, number, handleNameChange, handleNumChange, handleSubmit }) => (
        <>
            <h2>Add New Entry</h2>
            <form>
                <div>
                    name: <input value={name} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={number} onChange={handleNumChange} />
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>add</button>
                </div>
            </form>
        </>
    )


export default Form

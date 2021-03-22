
const AddReminders = (props) => {
    return (
        //
        <div>
            <div style={{ paddingTop: "5%", paddingRight: "40%", paddingLeft: "40%" }} >
                <h2 style={{ paddingLeft: "26%" }}>Add Reminder</h2>
                <form style={{ padding: "10px", backgroundColor: "rgba(255,255,255,0.6", borderRadius: "20px", }} onSubmit={props.propsi.addReminder}>
                    <div style={{ padding: "5px" }}>
                        Name: <input
                            style={{ width: "95%" }}
                            id="nameInput"
                            value={props.propsi.state.newReminder.newname}
                            onChange={props.propsi.handleNameChange} />
                    </div>
                    <div style={{ padding: "5px" }}>
                        At time: <input
                            style={{ width: "96%" }}
                            type="datetime-local"
                            id="dateInput"
                            value={props.propsi.state.newReminder.newtime}
                            onChange={props.propsi.handleTimeChange} />
                    </div>
                    <div style={{ padding: "6px" }}>
                        <button type="submit" style={{ padding: "10px", width: "20%", border: "none", borderRadius: "20px", backgroundColor: '#79D0F5' }}>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddReminders
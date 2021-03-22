import Reminder from './Reminder'

const Reminders = (props) => {
    return (

        <div style={{ paddingTop: "2%", paddingRight: "30%", paddingLeft: "30%" }}>
            <h2 style={{ textAlign: 'center' }}>Reminders:</h2>
            <div style={{ padding: "10px", backgroundColor: "rgba(255,255,255,0.6", borderRadius: "20px" }}>
                <div style={{ zIndex: "3" }}>
                    {props.propsi.state.reminders.map(entry => <Reminder key={entry.id} content={entry} refresh={props.propsi.refreshData} />)}
                </div>
            </div>
        </div>

    )
}

export default Reminders
import axios from 'axios'

//Reminder-komponentti
const Reminder = (props) => {

    return (
        <div style={{ paddingTop: "1px" }}>
            <table style={{ width: "100%" }}>
                <tbody style={{}}>
                    <tr>
                        <td style={{ width: "50%" }}>Topic: {props.content.name} </td>
                        <td style={{ width: "25%" }}>Date: {(new Date(props.content.timestamp)).toLocaleDateString()} {(new Date(props.content.timestamp)).toLocaleTimeString()}</td>
                        <td style={{ width: "5%" }}> <button style={{ padding: "8px", border: "none", borderRadius: "20px", backgroundColor: '#F58167' }} onClick={() => deleteReminder(props.content.id, props.refresh)}>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

//Poistaa objektin palvelimelta ja sen jälkeen päivittää clientin näkymän ajantasaiseksi
const deleteReminder = (id, refresh) => {
    if (window.confirm("Do you really want to delete this reminder?")) {
        axios.delete('https://boiling-ocean-43087.herokuapp.com/api/reminders/' + id).then(response => {
            refresh()
        })
    }
}

export default Reminder
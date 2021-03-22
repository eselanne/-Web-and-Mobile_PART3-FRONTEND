import axios from 'axios';
import React from 'react';
import AddReminders from './AddReminder';
import Reminders from './Reminders'

const baseUrl = '/api/reminders'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reminders: [],
            newReminder: []
        }
    }

    componentDidMount() {
        axios.get('https://boiling-ocean-43087.herokuapp.com/api/reminders/')
            .then(response => {
                this.setState({ reminders: response.data })
            })
    }

    // Lisää reminder
    addReminder = (event) => {

        event.preventDefault()
        console.log(this.state)

        //Check if reminder already exists
        const check = (element) => element.name === this.state.newname;
        if (this.state.reminders.some(check)) {
            alert("Error! Reminder already exists.")
            return;
        }

        const reminderObject = {
            name: this.state.newname,
            timestamp: this.state.newtime,
        }

        //POST
        axios.post('https://boiling-ocean-43087.herokuapp.com/api/reminders/', reminderObject)
            .then(response => {
                this.setState((prevState) => ({
                    reminders: [...prevState.reminders, response.data],
                }))
            }).catch(e => {
                console.log("Posti: " + e);
            })

        console.log(event.target)

        document.getElementById('nameInput').value = ''
        document.getElementById('dateInput').value = ''

    }

    //Handle name change
    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({ newname: event.target.value })
    }

    //Handle time change
    handleTimeChange = (event) => {
        console.log(event.target.value)
        this.setState({ newtime: event.target.value })
    }

    //lataa päivitetty JSON-tiedosto ja päivitetään (käytetään poiston yhteydessä)
    refreshData = (event) => {
        axios.get('https://boiling-ocean-43087.herokuapp.com/api/reminders/').then(response => {
            this.setState({
                reminders: response.data,
            })
        }).catch(e => {
            console.log(e)
        })
    }

    render() {
        return (
            <div>
                <AddReminders propsi={this} />
                <Reminders propsi={this} />
            </div>
        )
    }
}

export default App
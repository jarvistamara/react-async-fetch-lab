// create your App component here
import React, { Component } from 'react'

class App extends Component {
    state = {
        peopleCurrentlyInSpace: []
    }
    render() {
        return (
            <div>
                {this.state.peopleCurrentlyInSpace.map(person => person.name)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                peopleCurrentlyInSpace: data.people
            })
        })
    }
}
export default App
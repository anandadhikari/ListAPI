import React, {Component} from 'react';
import Lists from './components/Lists';

class App extends Component {
    state = {
        lists: []
    };
    componentDidMount() {
        fetch('https://5d11b2ce84e906001457646a.mockapi.io/testdata')
            .then(res => res.json())
            .then((data) => {
                this.setState({ lists: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Lists lists={this.state.lists} />
        )
    }
}

export default App;
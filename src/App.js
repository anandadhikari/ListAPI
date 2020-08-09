import React, {Component} from 'react';
import Lists from './components/Lists';
import axios from "axios";

class App extends Component {
    state = {
        lists: []
    };
    componentDidMount() {
            axios
            .get('https://5d11b2ce84e906001457646a.mockapi.io/testdata')
            .then((res) => {
               this.setState({ lists: res.data })
            })
            .catch((err) => {
              console.log(err)
            });
    }

    render() {
        return (
            <Lists lists={this.state.lists} />
        )
    }
}

export default App;
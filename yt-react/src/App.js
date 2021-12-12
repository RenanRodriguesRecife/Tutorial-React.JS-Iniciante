import './App.css';

import Repositories from "./containers/Repositories"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        data: []
    }
  }

  componentDidMount() {
    listRepositories().then(data => {
          this.setState({data})
      })
  }
  
 
  render(){
      const {data} = this.state
  console.log(this.stage)
  return (
    <div>
        <ul>
            {data.map(item => <Item key={item.id} {...item}/>)}
        </ul>

    </div>
  );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

const tasks = [
  {
      id: 1,
      text: 'learn react js',
      day : '03 04 2022',
      priority: true
  },
  {
      id: 2,
      text: 'learn react Native',
      day : '10 04 2022',
      priority: true
  },
  {
      id: 3,
      text: 'learn Angular',
      day : '01 05 2022',
      priority: false
  },
  {
      id: 4,
      text: 'learn Spring Boot',
      day : '03 08 2022',
      priority: true
  }
]

function App() {
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

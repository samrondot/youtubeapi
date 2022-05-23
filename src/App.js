
import './App.css';
import SearchBar from './Component/SearchBar';

const items = [

{
  title: 'What is React',
  content: 'React is a front end javascript framework'
},
{
  title: 'Why use React?',
  content: 'React is a favorite JS library among engineers',
},
{
  title: 'How do you use React?',
  content: 'You use React by creating components'
}
]

function App() {
  return (
    <>
    <SearchBar items = {items}/>
    </>
    
  );
}

export default App;

import './App.scss'

function App() {

  return (
    <Card name='Masoud Kargar'
          description='Full-stack web developer and teacher at
Udemy. When not coding or preparing a
course, I like to play board games, to
cook (and eat), or to just enjoy the
Portuguese sun at the beach.s'
          skills={
            [
              {name: 'HTML+CSS', color: '#1976d2', emoji: "💪"},
              {name: 'JavaScript', color: '#fdd835', emoji: "💪"},
              {name: 'Web Design', color: '#8bc34a', emoji: "💪"},
              {name: 'Git', color: '#e53935', emoji: "💪"},
              {name: 'React', color: '#29b6f6', emoji: "🔥"},
              {name: 'Svelte', color: '#ef6c00'},
            ]
          }/>
  )
}

function Card(props) {
  return (
    <main className='card'>
      <Avatar/>
      <div className='card-div'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <Skills datas={props.skills}/>
      </div>
    </main>
  )
}

function Skills(props) {
  return (
    props.datas.map((skill) => (
      <span className='skills'
            style={{
              "--skill-color": skill.color,
              "--emoji": `"${skill.emoji ?? "⭐"}"`
            }}
      >{skill.name}</span>
    ))
  );
}

function Avatar() {
  return <img className="Masoud Kargar" src='https://avatars.githubusercontent.com/u/75643194?v=4'/>;
}


export default App

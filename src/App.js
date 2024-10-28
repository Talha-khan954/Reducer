import React, { useReducer } from 'react';
import './App.css';

const counterReducer = (state, action) => {
  if (action.type === 'incrementLike') {
    return { ...state, likes: state.likes + 1 };
  } else if (action.type === 'incrementDislike') {
    return { 
      ...state, 
      dislikes: state.dislikes + 1,
      likes: state.likes > 0 ? state.likes - 1 : 0 
    };
  } else {
    return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(counterReducer, { likes: 0, dislikes: 0 });

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Feedback</h1>

      <div>
        <p>Likes: {state.likes}</p>
        <button onClick={() => dispatch({ type: 'incrementLike' })}>Like</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>Dislikes: {state.dislikes}</p>
        <button onClick={() => dispatch({ type: 'incrementDislike' })}>Dislike</button>
      </div>
    </div>
  );
}

export default App;

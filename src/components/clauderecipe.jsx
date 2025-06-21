import ReactMarkdown from 'react-markdown';

function ClaudeRecipe(props) {
  return (
    <section className="suggested-recipe-container">
      <h1>Chef Claude reccomends:</h1>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}

export default ClaudeRecipe;

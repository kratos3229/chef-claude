import Markdown from "react-markdown";

export default function ClaudeRecipe(props) {
  const recipeMarkdown = props.recipe;

  return (
    <section className="suggested-recipe-container">
      <Markdown>{recipeMarkdown}</Markdown>
    </section>
  );
}

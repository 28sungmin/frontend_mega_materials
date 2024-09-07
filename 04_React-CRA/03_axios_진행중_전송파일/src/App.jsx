import { useState } from "react";
import Categories from "./components/Categories";
import NewsLists from "./components/NewsLists";

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = (category) => setCategory(category);

  return (
    <div className="App">
      <Categories category={category} onSelect={onSelect} />
      <NewsLists category={category} />
    </div>
  );
}

export default App;

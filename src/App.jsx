import {
  CssModules,
  InlineStyle,
  StyledComponents,
  StyledJsx,
  Emotion
} from "./components";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}

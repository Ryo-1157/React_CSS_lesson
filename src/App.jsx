import {
  CssModules,
  InlineStyle,
  StyledComponents,
  StyledJsx
} from "./components";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}

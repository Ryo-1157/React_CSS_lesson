import {
  CssModules,
  InlineStyle,
  StyledComponents,
  StyledJsx,
  Emotion
} from "./components";
import "./styles.css";
import Data from "./text.json";

export default function App() {
  return (
    <div className="App">
      <StyledComponents />
      <InlineStyle />
      <CssModules
        text={Data.top.service.hotel.midashi}
        fightText={Data.top.service.hotel.button}
      />
      <StyledJsx />
      <Emotion />
    </div>
  );
}

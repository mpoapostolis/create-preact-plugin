import { h, Component } from "preact";
import { css } from "emotion";

const container = css`
  background: orange;
`;

export default class App extends Component {
  render() {
    return <h1 className={container}>Test</h1>;
  }
}

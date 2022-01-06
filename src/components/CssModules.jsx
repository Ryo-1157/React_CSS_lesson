import classes from "./CssModules.module.scss";

/**
 * importしたcssmoduleにしか対応していないので、
 * クラス名の重複を気にせず✖︎という点で利点がある。
 */
const CssModules = (props) => {
  const { text, fightText } = props;
  return (
    <div id="hoge" className={classes.container}>
      <p className={classes.title}>- {text} -</p>
      <button className={classes.button}>{fightText}</button>
    </div>
  );
};
export default CssModules;

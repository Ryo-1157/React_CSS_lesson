import classes from "./CssModules.module.scss";

/**
 * importしたcssmoduleにしか対応していないので、
 * クラス名の重複を気にせず✖︎という点で利点がある。
 */
const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
export default CssModules;

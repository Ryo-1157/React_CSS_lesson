const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!!</button>
      </div>
      {/* JSX記法ではhoverや擬似要素のようなものはデフォルトでは反映されない
      また、Next.jsには初めから組み込まれているためパッケージのインストールは不要 */}
      <style jsx={true}>{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
        }
      `}</style>
    </>
  );
};

export default StyledJsx;

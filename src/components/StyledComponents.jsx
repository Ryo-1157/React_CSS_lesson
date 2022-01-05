import styled from "styled-components";

const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- styled Components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};
export default StyledComponents;

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;
const SButton = styled.button`
    background: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s;
    &:hover{
      background-color: #46cdcf;
      color: #fff;
`;

import styled from "styled-components";

const transitionTime = "0.3s";

export const BlogContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: thin gray solid;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
  @media screen {
    transition: ${transitionTime};
  }
`;

export const Title = styled.div`
  font-size: 3rem;
  margin-left: 10px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10em;
  margin-right: 3rem;
`;

export const LinkStyled = styled.div<{align: string}>`
  margin-right: 15px;
  font-size: 1.2rem;
  text-align: ${props => props.align};
  width: 5rem;
  cursor: pointer;

  &:hover {
    color: gray;
    transform: scale(1.9, 1.9);
  }
  @media screen {
    transition: ${transitionTime};
  }
`;

export const Body = styled.div`
  margin-top: 3.5rem;
  background-color: #f2f2f2;
  min-width: 100%;
  min-height: 100%;
`;

export const PostContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 20px;
`;

export const Processing = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 50px;
  width: 100%;
  font-size: 3rem;
`;

export const Failed = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  top: 50px;
  width: 100%;
  font-size: 3rem;
  color: purple;
`;

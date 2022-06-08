import styled from 'styled-components'

export const CommentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: thin solid gray;
  border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 5px;
  background-color: rgba(255, 255, 255, 0.4);

  &:hover {
    box-shadow: 0 1px 5px gray;
    color: orange;
    border: thin solid orange;
  }
  @media screen {
    transition: 0.5s;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
`;

export const Email = styled.div`
`;

export const Body = styled.div`
`;

export const Content = styled.div`
`;
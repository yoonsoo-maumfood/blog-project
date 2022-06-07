import styled from 'styled-components';

export const PostContainer = styled.div`
  border: thin solid gray;
  border-radius: 10px;
  margin-bottom: 35px;
  display: flex;
  max-height: 15rem;
  max-width: 80%;
  height: auto;
  width: auto;
  overflow:  hidden;
  padding: 10px 20px;

  &:hover {
    max-height: 100rem; //최대 크기 제한 해제
    box-shadow: 0px 5px 5px 3px gray;
  }
  @media screen {
    transition: 0.5s;
  }
`;

export const PostContentContainer = styled.div`
  width: 50%;
  padding: 0 10px;

`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  max-height: 10rem;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const UserID = styled.div`
  color: gray;
`;

export const Content = styled.div`
`;

export const CommentBox = styled.div`
  width: 50%;
  padding: 0 10px;
`;
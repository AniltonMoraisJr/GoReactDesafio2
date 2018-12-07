import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: center;
`;

export const Repository = styled.div`
  display: flex;
  background: #fff;
  flex-direction: column;
  width: 250px;
  border-radius: 3px;
  margin: 0 20px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 64px;
    }
    strong {
      font-size: 24px;
      margin-top: 10px;
    }
    small {
      font-size: 14px;
      color: #666;
    }
  }
  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;

    button {
      border: 0;
      color: #fff;
      background: #f00;
      font-size: 24px;
      font-weight: bold;
      padding: 10px;
      margin: 0 auto;
      -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      height: 60px;
      width: 60px;

      &:hover {
        cursor: pointer;
        background: #ff6347;
        box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.3);
      }
    }
    .updateButton {
      border: 0;
      color: #000;
      background: #eee;
      font-size: 24px;
      font-weight: bold;
      padding: 10px;
      margin: 0 auto;
      -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      height: 60px;
      width: 60px;

      &:hover {
        cursor: pointer;
        background: #666;
        box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

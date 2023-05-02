import styled from 'styled-components';

export const StyledEditCommerceProfileModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;

  background-color: #ffffff;
  background: rgba(51, 51, 51, 0.5);
  box-shadow: 0px 9px 2px rgba(0, 0, 0, 0.25);

  div {
    display: flex;
    flex-direction: column;
    width: 22.5rem;
    background-color: #ffffff;
    border-radius: 1.5rem 0rem 1.5rem 1.5rem;
    padding: 0 1rem;
  }

  div > nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.5rem;
    background-color: #ffffff;
    gap: 1rem;
    padding-right: 0.5rem;
    margin-top: 0.5rem;
  }

  div > nav > img {
    object-fit: contain;
    width: 1.75rem;
    height: 1.75rem;
  }

  div > nav > button {
    background-color: ${({ theme }) => theme.colors.orangePrimary};
    border: 1px solid ${({ theme }) => theme.colors.orangePrimary};
    border-radius: 6px;
    width: 1.75rem;
    height: 1.625rem;
    color: #FFFFFF;
  }
  div > form {
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 1.5rem;
    background-color: #ffffff;
  }

  div > form > h3 {
    padding-left: 2rem;
    font-size: 1.125rem;
    font-weight: 600;
    width: 100%;
  }

  div> form > div{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
    background: transparent;
  }

  div> form > div> label {
    background-color: ${({ theme }) => theme.colors.white};
    height: 2px;
    position: absolute;
    padding: 3px;
    top: -0.3125rem;
    left: 1.25rem;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    color: #000000;
    transition: top 0.5s, left 0.3s ease-out;
  }

  div> form > div > input{
          height: 45px;

          font-size: 14px;
          border: 1px solid ${({ theme }) => theme.colors.gray300};
          color: #989898;
          background-color: ${({ theme }) => theme.colors.white};
          border-radius: 0.5rem;
          padding: 0;
  
          ::placeholder {
            height: 45px;
            color: ${({ theme }) => theme.colors.gray150};
            padding-left: 14px;
          }

          :focus{
            color: #000000;
            padding-left: 14px;
          }
        }
  }

  div> form > div > p{
    height: 1rem;
    margin: 0;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.greenPrimary}
  }

  div> form > button {
    border: 1px solid red;
    width: 90%;
    height: 45px;
    background-color: #056365;
    border: 1px solid #056365;
    border-radius: 0.9rem;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 600;

    padding: 0;
    margin: 1rem 0;

  }
  div > button {
    width: 90%;
    height: 45px;
    align-self: center;
    margin-bottom: 2rem;

    background-color: #71cb9f;
    border: 1px solid #71cb9f;
    border-radius: 0.9rem;
    color: #056365;
    font-size: 0.875rem;
    font-weight: 600;
    
  }

`;

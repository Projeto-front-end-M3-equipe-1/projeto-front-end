import styled from "styled-components";

export const StyledContainerUserDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  font-family: "Poppins";
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BackgroundLight};
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;

  footer {
    width: 100%;
  }

  @media (min-width: 768px) {
    padding-bottom: 150px;

    header {
      width: 80%;
      height: 10%;
    }

    footer {
      height: 10%;
    }
  }
`;

export const StyledMainContainerUserDashboard = styled.div`

  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    margin-top: 10rem;
    width: 80%;
    height: 80%;
  }
`;

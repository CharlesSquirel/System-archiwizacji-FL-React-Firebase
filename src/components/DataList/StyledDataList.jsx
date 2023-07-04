import styled from "styled-components";

export const StyledDataList = styled.main`
width: 80%;
border-radius: 10px;
.table {
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    background-color: ${({theme}) => theme.colors.gray};
}
.table-header-box{
    font-size: 20px;
    font-weight: 500;
    height: 36px;
}
.verse-box {
    height: 50px;
    font-size: 18px;
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    & th {
        font-weight: 400;
    }
}
.btn-edit, .btn-delete {
    width: 68px;
    height: 28px;
    font-weight: 600;
    font-size: 15px;
    padding: 5px;
}
.btn-delete {
    margin-left: 5px;
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 5px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
.btn-box{
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
}
`
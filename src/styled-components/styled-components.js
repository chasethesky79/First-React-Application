import styled, { createGlobalStyle } from 'styled-components';

export const ListWrapper = styled.ul`
list-style: none;
text-align: left;
padding: 0px;
`
export const ListItem = styled.li`
display: flex;
justify-content: space-between;
`
export const Label = styled.span`
 font-weight: bold;
`
export const ProfileWrapper = styled.div`
width: 50%;
margin: 10px auto;
`
export const ProfileImgWrapper = styled.img`
width: 150px;
`
export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`
export const TitleStyle = styled.h2`
 padding: 10px o;
 border-bottom: 1px solid lightgray
`
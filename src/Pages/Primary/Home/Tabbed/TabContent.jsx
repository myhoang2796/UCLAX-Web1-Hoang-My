import styled from 'styled-components';


/* Media Query ---------------------------*/
import { breakpoints } from '@/Common/useMediaQuery';


const Tabcontent = ({curTab}) => {
    return (
        <TabcontentStyled className='Tabcontent'>
<div className='column1'>
<img src={ curTab.image } alt={ curTab.title } />
</div>
<div className='column2'>
<h3>{ curTab.title }</h3>
<div dangerouslySetInnerHTML={ { __html: curTab.text } }/>
    </div>
        </TabcontentStyled>
    );
}

export default Tabcontent;

const TabcontentStyled = styled.div`
padding: 20px;
background-color: #4991d2;

@media ${ breakpoints.isMediumAndUp } {

display: grid;
grid-template-columns: 1fr 2fr;
gap: 1rem;

}

.column1 {
img {
    display: block;
    max-width: 100%;
    margin: 0px auto 15px;
    @media ${ breakpoints.isMediumAndUp } {
margin: 0px;
    }
}
}

.column2 {
h3 {
    font-size: 30px;
    color: white;
}
p {
    font-size: 18px;
    color: black;
margin-bottom: 20px;
line-height: 150%;
}
}
`;
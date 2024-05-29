import styled from 'styled-components'

const StyledBox = styled.div`
    position:relative;
  width: 100%;
  max-width: 1900px;
  margin: auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: justify-center;
  overflow: hidden;
  padding-bottom: 200px;
    
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 40px;
  }
`

export const BoxSplitSection = styled.div`
  flex:1;
  max-width: calc(50% - 2rem);
  position:relative;
  display:flex;
  align-items: center;
  justify-content:center;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    justify-content:center;
    align-items:start;
    flex:0;
  }

  & .box{
    transform: translateY(-5rem);
  }

  @media only screen and (max-width: 1500px) {
    & .box{
      transform: translateY(0);
    }
  }
`

const BoxSection = ({children,className,style,hero}:any) => {
  return (
    <StyledBox 
      className={`${hero ? '!md:pt-[20rem] pt-[0rem] !md:pt-[10rem] hero' : ''} ${className || ''}`}
    style={{
        minHeight: `max(110vh, 800px)`,
        background: hero ? 'linear-gradient(to bottom, #ebe0ce, #f8efdd)' : 'linear-gradient(to right, #faecdb, #f9efdd)',
        ...style || {}
    }}>{children}</StyledBox>
  )
}

export default BoxSection
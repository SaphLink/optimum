import Link from "next/link";
import styled from "styled-components";

interface Props {
  image: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
  imgposition?: "left" | "middle1" | "middle2" | "right";
  href?: string;
}

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  overflow: hidden;
  @media only screen and (max-width: 1500px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;
const Image = styled.img`
  position: absolute;
  object-fit: contain;
  bottom: 0;
  right: 0;
  height: 100%;
  z-index: 1;
  object-position: bottom;
`;
const Title = styled.h3`
  margin: 0;
  font-family: "Russo One", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  z-index: 2;
`;

const Description = styled.p`
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.2rem;
  font-weight: 400;
  z-index: 2;
`;

const ImageBox: React.FC<Props> = ({ image, href, title, description, style, imgposition }) => {
  
  const LinkWrapper = href ?  Link : ({children}:any)=>(<>{children}</>);
  
  return (
    <Box style={style}
      className="duration-300 hover:scale-[1.03]"
    >
      <LinkWrapper className="w-full h-full" href={href || ""}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Image src={image} alt={title} />
      </LinkWrapper>
    </Box>
  );
};

export default ImageBox;

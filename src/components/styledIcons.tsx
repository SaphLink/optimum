import styled from 'styled-components';

type FooterIconProps = {
    iconColor?: string;
    borderColor?: string;
    children: React.ReactNode;
};

export const Icons = styled.div<FooterIconProps>`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 3px solid ${props => props.borderColor || 'white'};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${props => props.iconColor || 'inherit'};
  }
`;

export const StyledIcons = ({iconColor, borderColor, children}: FooterIconProps) => {
    return (
        <Icons iconColor={iconColor} borderColor={borderColor}>
            {children}
        </Icons>
    )
}

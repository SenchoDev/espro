import styled from "styled-components";

interface CustomButtonProps {
  children?: React.ReactNode;
  variant: "outline" | "normal";
  inverse?: boolean;
}

const Button = styled.button<CustomButtonProps>`
  font-family: Josefin Sans;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  letter-spacing: 1.8px;
  border: ${(props) =>
    props.variant === "outline" &&
    `1px solid ${
      props.theme.colors.text[props.inverse ? "secondary" : "primary"]
    }`};
  color: ${(props) => props.theme.colors.text[props.inverse ? "secondary" : "primary"]};
  text-transform: uppercase;
  border-radius: 100px;
  background-color: ${(props) =>
    props.inverse ? "transparent" : props.theme.colors.bg.primary};
  padding: 2rem 3.7rem;
  position: relative;
  &:hover {
    transform: scale(1.1);
  }
`;

const CustomButton = ({ children, variant, inverse }: CustomButtonProps) => {
  console.log(inverse);
  return (
    <Button variant={variant} inverse={inverse}>
      {children}
    </Button>
  );
};

export default CustomButton;

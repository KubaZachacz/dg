import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const Title = styled.h2`
  font-family: 'Roboto Slab', serif;
  font-weight: 400;
  font-size: 2rem;
  color: ${({ color }) => color || 'inherit'};
  margin-top: 0;
`;

export const Paragraph = styled.p`
  line-height: 1.5;
`;
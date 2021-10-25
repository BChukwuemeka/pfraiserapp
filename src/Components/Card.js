import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Text, Image, Button, AmountRaised, ExpiryDate, Location, FundingGoal, FundingGoalTwo, LocationTwo,  AmountRaisedTwo, ExpiryDateTwo, ContainerTwo, BodyTwo, TitleTwo, TextTwo, ImageTwo } from './Styles/Styles';





export default function Card({ classes, children, ...restProps }) {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  );
}

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classNames('card__body', classes)} {...restProps}>
      {children}
    </Body>
  );
};


Card.Title = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classNames('card__title', classes)} {...restProps}>
      {children}
    </Title>
  );
};


Card.Text = function CardText({ classes, children, ...restProps }) {
  return (
    <Text className={classNames('card__text', classes)} {...restProps}>
      {children}
    </Text>
  );
};
Card.AmountRaised = function CardAmountRaised({ classes, children, ...restProps }) {
  return (
    <AmountRaised className={classNames('card__AmountRaised', classes)} {...restProps}>
      {children}
    </AmountRaised>
  );
};
Card.ExpiryDate = function CardExpiryDate({ classes, children, ...restProps }) {
  return (
    <ExpiryDate className={classNames('card__ExpiryDate', classes)} {...restProps}>
      {children}
    </ExpiryDate>
  );
};
Card.Location = function CardLocation({ classes, children, ...restProps }) {
  return (
    <Location className={classNames('card__text', classes)} {...restProps}>
      {children}
    </Location>
  );
};
Card.FundingGoal = function CardFundingGoal({ classes, children, ...restProps }) {
  return (
    <FundingGoal className={classNames('card__text', classes)} {...restProps}>
      {children}
    </FundingGoal>
  );
};






Card.Image = function CardImage({ src, alt, classes, ...restProps }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={classNames('card__image', classes)}
      {...restProps}
    />
  );
};


Card.Button = function CardButton({ classes, children, ...restProps }) {
  return (
    <Button
      type="button"
      className={classNames('card__button', classes)}
      {...restProps}
    >
      {children}
    </Button>
  );
};












export function CardTwo({ classes, children, ...restProps }) {



  return (
    <ContainerTwo className={classNames('cardTwo', classes)} {...restProps}>
      {children}
    </ContainerTwo>
  );
}

CardTwo.BodyTwo = function CardBodyTwo({ classes, children, ...restProps }) {



  return (
    <BodyTwo className={classNames('card__BodyTwo', classes)} {...restProps}>
      {children}
    </BodyTwo>
  );
};


CardTwo.TitleTwo = function CardTitleTwo({ classes, children, ...restProps }) {
  return (
    <TitleTwo className={classNames('card__titleTwo', classes)} {...restProps}>
      {children}
    </TitleTwo>
  );
};


CardTwo.TextTwo = function CardTextTwo({ classes, children, ...restProps }) {
  return (
    <TextTwo className={classNames('card__textTwo', classes)} {...restProps}>
      {children}
    </TextTwo>
  );
};


CardTwo.ImageTwo = function CardImageTwo({ src, alt, classes, ...restProps }) {
  return (
    <ImageTwo
      src={src}
      alt={alt}
      className={classNames('card__imageTwo', classes)}
      {...restProps}
    />
  );
};

CardTwo.AmountRaisedTwo = function CardAmountRaisedTwo({ classes, children, ...restProps }) {
  return (
    <AmountRaisedTwo className={classNames('card__AmountRaisedTwo', classes)} {...restProps}>
      {children}
    </AmountRaisedTwo>
  );
};
CardTwo.ExpiryDateTwo = function CardExpiryDateTwo({ classes, children, ...restProps }) {
  return (
    <ExpiryDateTwo className={classNames('card__ExpiryDateTwo', classes)} {...restProps}>
      {children}
    </ExpiryDateTwo>
  );
};
CardTwo.LocationTwo = function CardLocationTwo({ classes, children, ...restProps }) {
  return (
    <LocationTwo className={classNames('card__textTwo', classes)} {...restProps}>
      {children}
    </LocationTwo>
  );
};
CardTwo.FundingGoalTwo = function CardFundingGoalTwo({ classes, children, ...restProps }) {
  return (
    <FundingGoalTwo className={classNames('card__textTwo', classes)} {...restProps}>
      {children}
    </FundingGoalTwo>
  );
};

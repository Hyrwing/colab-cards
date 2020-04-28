import React, { FunctionComponent } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

type ArrowProps = {
  direction: string
}

const UP = 'up';
const DOWN = 'down';
const RIGHT = 'right';
const LEFT = 'left';

const Arrow: FunctionComponent<ArrowProps> = ({ direction = 'up' }) => {
  const getIcon = () => {
    switch (direction) {
      case UP: return faArrowUp;
      case DOWN: return faArrowDown;
      case RIGHT: return faArrowRight;
      case LEFT: return faArrowLeft;
      default: return faArrowUp;
    }
  }

  return (
    <Button variant="link">
      <FontAwesomeIcon icon={getIcon()} />
    </Button>
  )
}

export default Arrow;
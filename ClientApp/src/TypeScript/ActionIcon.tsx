import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Props
{
    data : any,
    icon : any,
    handleClick : (data: any) => void
}

export const ActionIcon : React.FC<Props> = (props : Props) =>
{
  function handleClick()
  {
      props.handleClick(props.data);
  }

  return <FontAwesomeIcon icon={props.icon} style={{cursor: "pointer"}} onClick={handleClick}/>;
}
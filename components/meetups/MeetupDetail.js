import { Fragment } from "react";
import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    <Fragment>
      <img
        src={props.image}
        alt={props.title}
        className={classes.img} 
      />
      <div className={classes.detail}> {/* Use curly braces to access the variable */}
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
    </Fragment>
  );
}

export default MeetupDetail;

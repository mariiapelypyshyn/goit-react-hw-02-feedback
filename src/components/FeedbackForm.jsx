import React, { Component } from "react";

import css from './FeedbackForm.module.css';

export default class FeedbackForm extends Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
}
};

render() {
    return (
   <h1>Please leave feedback</h1>
    );
  }
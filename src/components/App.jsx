import React, { Component } from 'react';
import {Section} from './Section/Section';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Statistics} from './Statistics/Statistics';
import {Notification} from './Notification/Notification';

export class App extends Component{
  state={
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleClick = (key)=>{
    this.setState((prevState) => ({[key]: prevState[key] + 1 }));
  }
  countTotal = ()=>{
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPotivePercentage = ()=>{
    const total = this.countTotal();
    return Math.round(this.state.good/total*100) + '%';
  }

  render(){
    const {good,bad ,neutral} = this.state;
    return(
    <>
    <Section title={"Please leave a feedback"}>
    <FeedbackOptions options = {this.state} onLeaveFeedback = {this.handleClick}/>
    {this.countTotal()===0
    ?(<Notification message="There is no feedback"></Notification>)
    :(<Section title={"Statistics"}><Statistics good={good} bad={bad} neutral={neutral} total={this.countTotal()} positivePercentage={this.countPotivePercentage()} /></Section>)}
    </Section>
  </>)
  }
};

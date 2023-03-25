import React, { useState  } from 'react';
import {Section} from './Section/Section';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Statistics} from './Statistics/Statistics';
import {Notification} from './Notification/Notification';






export const App =()=> {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  const handleClick = (key)=>{
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;
  
      case 'neutral':
        setNeutral(neutral + 1);
        break;
  
      case 'bad':
        setBad(bad + 1);
        break;
  
      default:
        break;
    }
   }
    const countTotal = ()=>{
    return good + bad + neutral;
    }
    const countPotivePercentage = ()=>{
    const total = countTotal();
    return Math.round(good/total*100) + '%';
    }
  
  



    return(
    <>
    <Section title={"Please leave a feedback"}>
    <FeedbackOptions options = {{good,neutral,bad}} onLeaveFeedback = {handleClick}/>
    {countTotal()===0
    ?(<Notification message="There is no feedback"></Notification>)
    :(<Section title={"Statistics"}><Statistics good={good} bad={bad} neutral={neutral} total={countTotal()} positivePercentage={countPotivePercentage()} /></Section>)}
    </Section>
  </>)
  
};

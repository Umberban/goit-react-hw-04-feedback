import PropTypes from 'prop-types';
import css from './Statistics.module.css'
export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
return(
    <div className={css.container}>
       <div className={css.mainReview}>
       <p className={css.countReview}>Good: {good}</p>
       <p className={css.countReview}>Neutral: {neutral}</p>
       <p className={css.countReview}>Bad: {bad}</p>
       </div>
       <div className={css.calculatedInfo}>
       <p className = {css.countReview}>Total: {total}</p>
       <p className = {css.countReview}>Positive: {positivePercentage}</p>
       </div>
    </div>
)
}
Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}
import { PropTypes } from 'prop-types';

const Quote = ({ quote, author }) => (
  <div className="calculator__quoteContainer">{`"${quote}" - ${author}`}</div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;

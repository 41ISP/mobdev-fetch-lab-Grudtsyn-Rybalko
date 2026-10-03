import './RatingBadge.css';

function RatingBadge({Source, Value}) {
  return (
    <div className="rating-badge">
      <span className="rating-badge__value">{Value}</span>
      <span className="rating-badge__source">{Source}</span>
    </div>
  );
}

export default RatingBadge;

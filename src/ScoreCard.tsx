import '../src/css/scoreCard.css';
export default function ScoreCard() {
  return (
    <div className="score-card">
      <h2>Your Result</h2>
      <div className="score">
        <p>
          76 <span id="score-of-total">of 100</span>
        </p>
      </div>
      <h2>Great</h2>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

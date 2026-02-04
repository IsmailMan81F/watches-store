import "./Slider.css";

export default function Slider(params) {
  const numbers = [1, 2, 3, 4, 5];
  const pages = numbers.map((number) => (
    <h3 className="page-number">{number}</h3>
  ));

  return (
    <div className="slider-section">
      <div className="slider-left">{pages}</div>
    </div>
  );
}

import "./SelfDrawingSquare.scss";
export const SelfDrawingSquare = () => {
  return (
    <div className="scene">
      <div className="cube">
        <div className="cube__front">
          <svg viewBox="-15.5 -5.5 21 21">
            <line x1="-15" y1="15" x2="-15" y2="-5" className="line_1" />
            <line x1="-15" y1="-5" x2="5" y2="-5" className="line_2" />
            <line x1="5" y1="-5" x2="5" y2="15" className="line_3" />
            <line x1="5" y1="15" x2="-15" y2="15" className="line_4" />
          </svg>
        </div>
        <div className="cube__back">
          <svg viewBox="-15.5 -5.5 21 21">
            <line x1="-15" y1="15" x2="-15" y2="-5" className="line_1" />
            <line x1="-15" y1="-5" x2="5" y2="-5" className="line_2" />
            <line x1="5" y1="-5" x2="5" y2="15" className="line_3" />
            <line x1="5" y1="15" x2="-15" y2="15" className="line_4" />
          </svg>
        </div>
        <div className="cube__left">
          <svg viewBox="-15.5 -5.5 21 21">
            <line x1="-15" y1="15" x2="-15" y2="-5" className="line_1" />
            <line x1="-15" y1="-5" x2="5" y2="-5" className="line_2" />
            <line x1="5" y1="-5" x2="5" y2="15" className="line_3" />
            <line x1="5" y1="15" x2="-15" y2="15" className="line_4" />
          </svg>
        </div>
        <div className="cube__right">
          <svg viewBox="-15.5 -5.5 21 21">
            <line x1="-15" y1="15" x2="-15" y2="-5" className="line_1" />
            <line x1="-15" y1="-5" x2="5" y2="-5" className="line_2" />
            <line x1="5" y1="-5" x2="5" y2="15" className="line_3" />
            <line x1="5" y1="15" x2="-15" y2="15" className="line_4" />
          </svg>
        </div>
        <div className="cube__top">
          <svg viewBox="-15.5 -5.5 21 21">
            <line x1="-15" y1="15" x2="-15" y2="-5" className="line_1" />
            <line x1="-15" y1="-5" x2="5" y2="-5" className="line_2" />
            <line x1="5" y1="-5" x2="5" y2="15" className="line_3" />
            <line x1="5" y1="15" x2="-15" y2="15" className="line_4" />
          </svg>
        </div>
        <div className="cube__bottom">
          <svg viewBox="-15.5 -5.5 21 21">
            <line x1="-15" y1="15" x2="-15" y2="-5" className="line_1" />
            <line x1="-15" y1="-5" x2="5" y2="-5" className="line_2" />
            <line x1="5" y1="-5" x2="5" y2="15" className="line_3" />
            <line x1="5" y1="15" x2="-15" y2="15" className="line_4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

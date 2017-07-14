import React from 'react';

function QuoteBox(props) {
  return (
    <div className="row">
      <div className="col-xs-8 col-xs-offset-2">
        <div className="jumbotron">
          <blockquote><p>{props.quote}</p></blockquote>
        </div>
      </div>
    </div>
  );
}
export default QuoteBox;

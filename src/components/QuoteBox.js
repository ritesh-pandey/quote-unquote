import React from 'react';

function QuoteBox(props) {
  return (
    <div className="row">
      <div className="col-xs-8 col-xs-offset-2">
        <div className="jumbotron">
          <blockquote>
            <p>{props.quote}</p>
          </blockquote>
          <button type="button" className="glyphicon glyphicon-refresh btn btn-default" aria-hidden="true" onClick={props.getQuote} title="Refresh"></button>
          <button className="glyphicon glyphicon-share btn btn-info" aria-hidden="true"></button>
        </div>
      </div>
    </div>
  );
}
export default QuoteBox;

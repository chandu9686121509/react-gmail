var React=require('react');
var ModalComponent=require('./ModalComponent');

var RightPanel=React.createClass({
  render:function(){
    var from='';
    var to='';
    var subject='';
    var date='';

    console.log("Messages--- " +this.props.fullMessages);
    var MessAr=this.props.fullMessages.map(function(messages,i){
      for(var i=0;i<messages.payload.headers.length;i++)
      {
        if(messages.payload.headers[i].name=="From"){
          from=messages.payload.headers[i].value;
        }
        if(messages.payload.headers[i].name=="To"){
          to=messages.payload.headers[i].value;
        }

        if(messages.payload.headers[i].name=="Subject"){
          subject=messages.payload.headers[i].value;
        }
        if(messages.payload.headers[i].name=="Date"){
          date=messages.payload.headers[i].value;
        }
      }
      body=messages.payload.body.data;

        return(
              <a className="list-group-item">
                  <div id="wrap">
                      <div className="row">
                          <div className="col-lg-4">
                             <h6>From:<span id="MyFile">{this.props.from}</span></h6>
                          </div>
                          <div className="col-lg-4">
                          <a id="anchor" href='#' className="list-group-item" data-toggle="modal" data-target="#myModal">    <h6>Subject:<span id="MyFile">{this.props.subject}</span></h6></a>
                          </div>
                          <div className="col-lg-4">
                              <h6>Date:<span id="MyFile">{this.props.date}</span></h6>
                          </div>
                      </div>
                          <GrantChild from={from} subject={subject} body={body} to={to} date={date} />
                  </div>
                  </a>
            );

        });

    return(
            <div className="panel panel-default">
            {MessAr }
            </div>
          );
      }
});
module.exports=RightPanel

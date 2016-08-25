var React=require('react');

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
        if(messages.payload.headers[i].name=="Subject"){
          subject=messages.payload.headers[i].value;
        }
        if(messages.payload.headers[i].name=="Date"){
          date=messages.payload.headers[i].value;
        }
      }

      return(
                  <div id="wrap">
                      <div className="row">
                          <div className="col-lg-4">
                             <h6>From:<span id="MyFile">{from}</span></h6>
                          </div>

                          <div className="col-lg-4">
                              <h6>Subject:<span id="MyFile">{subject}</span></h6>
                          </div>
                          <div className="col-lg-4">
                              <h6>Date:<span id="MyFile">{date}</span></h6>
                          </div>
                      </div>
                  </div>
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

var React= require('react');
var GrantChild=require('./GrantChild');
var ModalComponent=require('./ModalComponent');
var RightPanel= React.createClass({

    getHTMLPart: function(ar)
    {
      for(var y = 0; y < ar.length; y++)
      {
        if(typeof ar[y].parts === 'undefined')
        {
          if(ar[y].mimeType === 'text/html')
          {
            return ar[y].body.data;
          }
        }
        else
        {
          return this.getHTMLPart(ar[y].parts);
        }
      }
      return '';
    },


    render: function(){
        var from='';
        var to='';
        var subject='';
        var date='';
        var body='';
        var that=this;
        console.log("Messages--- "+this.props.fullMessages);

            var MessArr= this.props.fullMessages.map(function(messages,i){
                for(var i=0;i<messages.payload.headers.length;i++)
                {
                    if(messages.payload.headers[i].name==="From"){
                        from=messages.payload.headers[i].value;
                    }
                    if(messages.payload.headers[i].name==="Subject"){
                        subject=messages.payload.headers[i].value;
                    }
                    if(messages.payload.headers[i].name==="Date"){
                        date=messages.payload.headers[i].value;
                    }
                    if(messages.payload.headers[i].name==="To"){
                        to=messages.payload.headers[i].value;
                    }
                }
                if(typeof messages.payload.parts==="undefined")
                {
                    body= messages.payload.body.data;

                }
                else
                {

                    body=that.getHTMLPart(messages.payload);
                }
                console.log("Body"+body);
                return(
                    <div>
                        <GrantChild from={from} subject={subject} body={body} to={to} date={date} />
                    </div>
                );
        });
        return(
            <div>
                {MessArr}
            </div>

        );
    }
});
module.exports=RightPanel

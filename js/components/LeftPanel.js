var React= require('react');
var GrantChild=require('./GrantChild');
var LeftPanel= React.createClass({
  handleEvent:function(labelId)
  {
    this.props.getEmailByLabel(labelId);
  },

   render: function(){
      var carr =this.props.allLabelsData.map(function(message){
       return(
           <div>
               <GrantChild id={message.id} name={message.name} handleEvent={this.handleEvent}></GrantChild>
           </div>
       )
     },this);

       return(
         <div>
              {carr}
        </div>
       );
   }
   });
   module.exports=LeftPanel

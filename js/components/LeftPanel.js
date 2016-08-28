var React= require('react');
var GrantChild1=require('./GrantChild1');
var Compose=require('./Compose');
var LeftPanel= React.createClass({
  changeEvent: function(llabelId)
  {
    this.props.getEmailByLabel(llabelId);
  },

   render: function(){
      var carr =this.props.allLabelsData.map(function(message){
       return(
           <div>
               <GrantChild1 id={message.id} name={message.name} changeEvent={this.changeEvent}></GrantChild1>
           </div>
       )
     },this);

       return(
         <div>
         <div>
              {carr}
        </div>
        <div>
            <Compose extractMessages={this.extractMessages} to={this.props.to} sub={this.props.sub} body={this.props.body}/>
        </div>
        </div>

       );
   }
   });
   module.exports=LeftPanel

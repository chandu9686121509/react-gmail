var React=require('react');
var ModalComponent=require('./ModalComponent');
var GrantChild=require('./GrantChild');

var GrantChild=React.createClass({
  getInitialState: function()
  {
    return({myModal:false});
  },

 changeEvent: function()
  {
    this.props.handleEvent(this.props.id);
  },
  changeModal: function()
    {
      return({myModal:true});
    },

  render:function(){
    return(
      <div>
      <a onClick={this.changeModal} className="list-group-item" href="#">{this.props.name}</a>
      {this.state.myModal? <ModalComponent from={this.props.from} to={this.props.to} body={this.props.body}/>:null}
      </div>
      );
  }
});
module.exports=GrantChild

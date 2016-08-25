var React=require('react');

var GrantChild=React.createClass({
  changeEvent: function()
  {
    this.props.handleEvent(this.props.id);
  },
  render:function(){
    return(
      <div>
          <a onClick={this.changeEvent} className="list-group-item" href="#">{this.props.name}</a>
     </div>
      );
  }
});
module.exports=GrantChild

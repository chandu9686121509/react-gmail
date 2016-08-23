var React=require('react');
var ReactDom=require('react-dom');

var GrantChild=React.createClass({
  render:function(){
    return(
      <div>

    <h3>{this.props.data}</h3>
      </div>
      );
  }
})
module.exports=GrantChild;

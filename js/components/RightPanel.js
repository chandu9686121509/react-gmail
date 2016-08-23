var React=require('react');
var ReactDom=require('react-dom');

var RightPanel=React.createClass({
  render:function(){
    return(
            <div>
              <h1>{this.props.sdata}</h1>
              <p id="desc">{this.props.description}</p>
            </div>
        );
    }
});
module.exports=RightPanel;

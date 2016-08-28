var React = require('react');

var Compose= React.createClass({
        getInitialState:function()
        {
            return({To:'',Sub:'',Body:''});
        },
        To: function(action)
        {
            this.setState({To:action.target.value});
        },

        Sub: function(action)
        {
            this.setState({Sub:action.target.value});
        },

        Body: function(action)
        {
            this.setState({Body:action.target.value});
        },

        sentmessages: function(){
            this.props.extractMessages(this.state.To,this.state.Sub,this.state.Body);
        },

        render: function(){
        return(
            <div className="container">
            <div className="modal fade" id="ComposeModal" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;&nbsp;Compose Mail</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                To:<input type="text" onChange={this.To}/><br/>
                                Subject:<input type="text" onChange={this.Sub}/><br/>
                                Text your message:<input type="text" onChange={this.Body}/><br/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info pull-right" onClick={this.sentmessages} data-dismiss="modal">Sent</button>
                            <button type="button" className="btn btn-info pull-right" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
        );
    }

})
module.exports=Compose

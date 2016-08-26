var React = require('react');
var LeftPanel = require('./LeftPanel');
var RightPanel=require('./RightPanel');
var loadedData = false;
var GmailBox = React.createClass({
 getInitialState: function()
   {
     return({allLabelsData:[],fullMessages:[]});
   },
 gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
   var CLIENTID    =   '604779538617-tkrkbugedbdqocdci8ae3eav7ellhfvh.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');

   var pollTimer   =   window.setInterval(function()
   {

       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.allLabels();
 },


 allLabels: function()
 {
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyBZJ407yGDmT0-MdRE3Kj3Ea72FCnvd68w}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        this.setState({allLabelsData:data.labels});
        this.getEmailByLabel(accessToken);
        loadedData=true;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });
},

 getEmailByLabel: function(llabelId)
 {
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
    url: 'https://www.googleapis.com/gmail/v1/users/chandu.k15%40gmail.com/messages?includeSpamTrash=false&labelIds='+llabelId+'&maxResults=7&key={AIzaSyBZJ407yGDmT0-MdRE3Kj3Ea72FCnvd68w}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        var messag=[];
        for(var i=0;i<data.messages.length;i++)
        {
          messag.push(this.getMessages(data.messages[i].id));
        }
        console.log(messag);
      {/*  this.setState({allLabelsData:data.labels});*/}
        this.setState({fullMessages: messag});
        }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });
},

 getMessages: function(id)
 {
   var accessToken=localStorage.getItem('gToken');
  var c= $.ajax({
   url: 'https://www.googleapis.com/gmail/v1/users/chandu.k15%40gmail.com/messages/'+id+'?key={AIzaSyBZJ407yGDmT0-MdRE3Kj3Ea72FCnvd68w}',
     dataType: 'json',
     type: 'GET',
     async: false,
     beforeSend: function (request)
     {
       request.setRequestHeader("Authorization", "Bearer "+accessToken);
     },
     success: function(data){

     }.bind(this),
     error: function(xhr, status, err) {
       console.error(err.toString());
     }.bind(this)
  }).responseJSON;
   return c;
 },

render:function()
 {
   var leftPanel;
   var rightPanel;

   if(loadedData){
     leftPanel =  <LeftPanel allLabelsData={this.state.allLabelsData} getEmailByLabel={this.getEmailByLabel}/>
     rightPanel=  <RightPanel fullMessages={this.state.fullMessages}/>
   }

     return(
       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                    <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-danger pull-left">Sign In</button>
                </div>
                  <div className="col-lg-8 pull-right">
                    <h2>GMail</h2>
                  </div>
              </div>
               <div className="row">
                 <div className="col-lg-3">
                    {leftPanel}
                  </div>
                 <div className="col-lg-9">
                 {rightPanel}
                 </div>
               </div>
         </div>
     </div>
     );
 }
 });

module.exports = GmailBox

var React=require('react');
var ReactDOM=require('react-dom');
var ChildComponent=require('./components/ChildComponent');
var MyComponent=require('./components/MyComponent');
var LeftPanel=require('./components/LeftPanel');
var GmailBox=require('./components/GmailBox');

{/*var data={"labels": [
  {
   "id": "CATEGORY_PERSONAL",
   "name": "CATEGORY_PERSONAL",
   "type": "system"
  },
  {
   "id": "Label_1",
   "name": "Personal",
   "messageListVisibility": "show",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "CATEGORY_SOCIAL",
   "name": "CATEGORY_SOCIAL",
   "type": "system"
  },
  {
   "id": "CATEGORY_FORUMS",
   "name": "CATEGORY_FORUMS",
   "type": "system"
  },
  {
   "id": "Label_2",
   "name": "Receipts",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "Label_4",
   "name": "Work",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "user"
  },
  {
   "id": "IMPORTANT",
   "name": "IMPORTANT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "Label_3",
   "name": "Travel",
   "type": "user"
  },
  {
   "id": "CATEGORY_UPDATES",
   "name": "CATEGORY_UPDATES",
   "type": "system"
  },
  {
   "id": "CHAT",
   "name": "CHAT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SENT",
   "name": "SENT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "INBOX",
   "name": "INBOX",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "TRASH",
   "name": "TRASH",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "CATEGORY_PROMOTIONS",
   "name": "CATEGORY_PROMOTIONS",
   "type": "system"
  },
  {
   "id": "DRAFT",
   "name": "DRAFT",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "SPAM",
   "name": "SPAM",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelHide",
   "type": "system"
  },
  {
   "id": "STARRED",
   "name": "STARRED",
   "messageListVisibility": "hide",
   "labelListVisibility": "labelShow",
   "type": "system"
  },
  {
   "id": "UNREAD",
   "name": "UNREAD",
   "type": "system"
  }
]};
console.log(data);
var json = JSON.parse(data);*/}

var MainComponent=React.createClass({
  render:function(){
    console.log("This is a Parent");
    return(
      <div className="container" >
                <div className="row" >
                    <GmailBox/>
                </div>
      </div>
        );
    }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app'));

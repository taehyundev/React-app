import React, {Component} from 'react'; // 클래스로 변경할때 import에 Component 추가
import './App.css'; // Component가 로드됬을 때같이 로드됨
//이 디자인을 앱안에 넣는다고 할 수 있음
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";

class App extends Component { //초기에 Function 상태이면 class 로 변경
  constructor(props){
    super(props); //생성자로 값 초기화
    this.state = {
      mode:'read',
      subject:{title:'web', sub:'world!'},
      welcome:{title:'aaa', desc:'bcb'},
      contents:[
        {id:1, title:'HTML',desc:'html is hypertext'},
        {id:2, title:'CSS',desc:'css is hypertext'},
        {id:3, title:'JavaScript',desc:'java is hypertext'},
      ]
    }
  }
    render() {
      var _title = null;
      var _desc = null;
        if(this.state.mode === 'welcome'){
          _title = this.state.welcome.title;
          _desc = this.state.welcome.desc;
        }else if(this.state.mode === 'read'){
          _title = this.state.contents[0].title;
          _desc = this.state.contents[0].desc;
        }
    return(//꼭 필요한 부분 없으면 오류
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title ={_title} desc={_desc}></Content>
      </div>
    );//복잡도를 획기적으로 낮췄음
  }
}


export default App;
//이것은 자바스크립트가 아니라 유사 자바스크립트이다.
//태그를 쓸 수 있는 jsx이다. 페북에서 만듬
//Props는 사용자에게 중요한 정보
//사용자는 알면안되고 알 수 없는 정보를 State라고 한다.
//Props와 State 와 철저히 분리되어 있어야된다.

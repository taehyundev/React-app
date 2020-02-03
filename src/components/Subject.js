import React, {Component} from 'react';
class Subject extends Component {
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
      {this.props.sub}
      </header>
    );
    //항상 똑같은 값을 뱉어주는 아이였는데
   //App Component에서 Subject의 title과 sub를 설정하고
   //그 값을 this.pros.~으로 불러와서 유동적이게 값을
   //변화시킬 수 있다.
  }

}

export default Subject;

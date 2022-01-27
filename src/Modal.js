import { Modal, Button } from 'antd';
import { Select } from 'antd';
import React from 'react';
import './Modal.css';



export class S_modal extends React.Component {
  constructor(){
    super();
    this.State = { inputEmail : false};
    this.State = { inputPw : false};
    this.State = { checkpw : ''};
    this.State = { inputPwCk : false};
  }
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  

  render() {
    const { visible, loading } = this.state;
    const { Option } = Select;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          회원 가입 
        </Button>
        <Modal
          visible={visible}
          title="회원가입"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button htmlType="submit" loading={loading} onClick={
              this.handleOk
            }
            >
              가입하기
            </Button>,
          ]}
        >
          {
            //email input====================================================================================
          }
          <div>
            <input type="email" id="uemail" placeholder="대림 E-mail" required onChange={ (e)=>{ 
              var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
              // email 형식에 맞는 경우 true 리턴
              if(regExp.test(e.target.value) === false){
                console.log('false')
                this.setState({inputEmail:false})
              }else if(regExp.test(e.target.value) === true){
                console.log('true')
                this.setState({inputEmail:true})
              }
              } }></input>{
                this.state.inputEmail===false
                ?<p style={{color:'red'}}>Wrong Email</p>
                :<p style={{color:'green'}}>Good Email</p>
              }
          </div>
          {
            //password input====================================================================================
          }
          <div>
            <input type="password" id="upw" placeholder="비밀번호" required onChange={ (e)=>{
               var regExp =  /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
               // password 형시에 맞는 경우 true 리턴 8~10자 영문 숫자 혼용
               if(regExp.test(e.target.value) === false){
                console.log('false')
                this.setState({inputPw:false})
                }else if(regExp.test(e.target.value) === true){
                console.log('true')
                this.setState({inputPw:true})
                this.setState({checkpw:e.target.value})
                }
              }
            }></input>{
              this.state.inputPw===false
                ?<p style={{color:'red'}}>Wrong Password</p>
                :<p style={{color:'green'}}>Good Password</p>
            }
          </div>
          {
            //password check input===============================================================================
          }
          <div>
            <input type="password" id="upw" placeholder="비밀번호확인" required onChange={ (e)=>{
                if(e.target.value===this.state.checkpw){
                  this.setState({inputPwCk:true})
                }else if(e.target.value!==this.state.checkpw){
                  this.setState({inputPwCk:false})
                }
              }
            }>
            </input>{
                this.state.inputPwCk===false
                  ?<p style={{color:'red'}}>It's Not a Same</p>
                  :<p style={{color:'green'}}>Correctly Same</p>
              }
          </div>
          

          <Select defaultValue="학과를 선택해주세요" style={{ width: 200 }} onChange={handleChange} required>
            <Option value="컴퓨터정보학과">컴퓨터정보학과</Option>
            <Option value="다른학과">다른학과</Option>
          </Select>
          
        </Modal>
      </>
    );
  }
}
function handleChange(value) {
  console.log(`selected ${value}`);
}

export default S_modal;
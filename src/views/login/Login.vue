<template>
  <div class="background">
    <div class="login" >
      <div class="top-button">
        <button :class="{btn1: !isActive,btn2: isActive}" @click="change1">
        </button>
      </div>
      <h1 class="title">{{hello1}}</h1>
      <ul>
        <li><input type="text" placeholder="用户名" id="user" v-model="username"></li>
        <li><input type="password" placeholder="密码" id="psw" v-model="password"></li>
      </ul>
      <div class="btn3">
        <a href="#" class="btn" id="btn" @click="confirm">{{login}}</a>
        <a href="#" class="right">{{register}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: null,
        password: null,
        isActive: true,
        hello1: '您好用户！ 欢迎登录电影数据库平台',
        login: '登录',
        register: '马上注册',
      }
    },
    methods: {
        change1(){
          if (this.isActive === false){
            this.hello1 = '您好用户！ 欢迎登录电影数据库平台'
            this.isActive = !this.isActive
          }
          else {
            this.hello1 = '您好管理员！ 欢迎登录电影数据库平台'
            this.isActive = !this.isActive
          }
        },
        confirm(){
          if ((this.isActive === true && this.username === 'user' && this.password === '123456')
          ||(this.isActive === false && this.username === 'admin' && this.password === '1234567'))
          {
            this.$router.replace('/home')
          }else
          {
            alert("用户名或密码错误")
          }
        }
      }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  li  {
    list-style: none;
  }
  .background {
    background: url('img/login1.png') no-repeat;
    width:100%;
    height:100%;
    position: absolute;
    z-index:-1;
  }

  .login {
    float: right;
    background-color: white;
    border-radius: 20px;
    height: 500px;
    width: 500px;
    margin-top: 10%;
    margin-right: 15%;
    box-shadow: 5px 5px 5px rgba(10, 130, 255, 0.3);
  }

  .title {
    height: 50px;
    margin-left: 60px;
    margin-top: 20px;
    font-size: 23px;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  .login ul {
    margin-top: 35px;
    margin-left: 95px;
  }
  .login ul li {
    margin-bottom: 10px;
  }
  .login ul li input {
    width: 300px;
    height: 50px;
    border: none;
    padding-left: 20px;
    font-size: 16px;

    background-color: #f7f7f7;
  }
  input::placeholder {
    color: #c4c4c4;
  }
  .btn {
    display: block;
    margin-left: 95px;
    margin-top: 55px;
    background-image: linear-gradient(to right,#fb9740,#fbbd86);
    width: 320px;
    height: 40px;
    border-radius: 40px;
    line-height: 40px;
    text-align: center;
    box-shadow: 5px 5px 5px rgba(10, 130, 255, 0.3);
    font-size: 18px;
    color: white;
  }
  .btn1 {
    display: inline;
    border: none;
    margin-left: 440px;
    background-image: url('img/user.png') ;
    background-size: 100%;
    background-color: white;
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .btn2 {
    display: inline;
    border: none;
    margin-left: 440px;
    background-image: url('img/manager.png') ;
    background-size: 100%;
    background-color: white;
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .login a:hover {
    background-image: linear-gradient(to right,#fb9760,#fbbd99);
  }
  .right {
    display: block;
    margin-top: 10px;
    margin-left: 350px;
    width: 70px;
    color: #fb9740;
  }
  .btn2 {
    color: #f7f7f7;
  }


</style>

<style scoped lang="stylus">
  .login
    width 100%
    height 100%
    display flex
    flex-direction column
    align-items center
    .login-form
      flex 4
      display flex
      flex-direction column
      align-items center
      width 400px
      .containor
        border #cccccc 1px solid
        padding 20px 20px
        border-radius 5px
        .forget_password
          display flex
          justify-content space-between
        & > div
          margin-bottom 20px
        & > div > span, .forget_password
          text-align left
          font-size 16px
          font-weight bold
    .welcome
      flex 1
</style>

<style>
  .login .ivu-alert-close {
    top: 14px;
  }

  .login .ivu-alert-close .ivu-icon-ios-close {
    font-size: 28px;
    font-weight: bold;
  }
</style>

<template>
  <div class="login" :style="loginStyle" v-if="isShowLoginPage">
    <div class="welcome center">
      <h1>Welcome To EMS !</h1>
    </div>
    <div class="login-form">
      <Alert :class="{hide:!isError}" class="center" closable type="error"
             style="width: 340px;height: 50px;font-size: 14px;font-weight: bold">
        Incorrect username or password.
      </Alert>
      <div class="containor">
        <div class="username">
          <span>Username</span>
          <Input @on-enter="login" type="text" size="large" v-model="username" style="width: 300px"/>
        </div>
        <div class="password">
          <div class="forget_password">
            <span>Password</span>
            <span style="color: #0366d6">Forgot password?</span>
          </div>
          <Input @on-enter="login" type="password" size="large" v-model="password" style="width: 300px"/>
        </div>
        <Button type="primary" @click="login" style="width: 300px;height: 35px;font-size: 16px;font-weight: bold">Sign
          in
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
  import crypto from '@/util/crypto.js'
  import conf from '@/util/config.js'

  export default {
    name: 'login',
    mounted() {
      if (this.$getCookie('_un') && this.$getCookie('_pd')) {
        this.username = this.$getCookie('_un')
        this.password = this.$getCookie('_pd')
        this.isCrypto = true
        this.login()
      } else {
        this.isShowLoginPage = true
      }
    },
    data() {
      return {
        isShowLoginPage: false,
        isCrypto: false,
        isError: false,
        username: '',
        password: '',
        loginStyle: {
          width: '100%',
          height: '100%'
        }
      }
    },
    methods: {
      login() {
        this.$post({
          url: '/login',
          data: {
            username: this.username,
            password: this.isCrypto ? this.password : crypto(this.password)
          },
          success: (response) => {
            if (response.data.code === 200) {
              this.isError = false

              sessionStorage.setItem('accessToken', true)

              let data = response.data.user
              if (data.isadmin) {
                this.$router.push({path: '/manager'})
              } else {
                this.$router.push({path: '/employer'})
              }

              if (!this.isCrypto) {
                this.$setCookie('_un', this.username, conf.cookie_time)
                this.$setCookie('_pd', crypto(this.password), conf.cookie_time)
              }
            } else {
              this.isError = true
            }
          },
          fail: () => {
            this.$Notice.error({
              desc: '请求失败，请检查后台服务器是否正常运行'
            })
          }
        })
      }
    }
  }
</script>

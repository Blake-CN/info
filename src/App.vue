<template>
  <div id="info" class="wrap">
    <section>
      <h2 class="p-title">性别:</h2>
      <van-radio-group v-model="sex">
        <van-cell-group>
          <van-cell title="男" clickable @click="sex = 'male'">
            <van-radio name="male"/>
          </van-cell>
          <van-cell title="女" clickable @click="sex = 'female'">
            <van-radio name="female"/>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </section>
    <section>
      <h2 class="p-title">生活照:</h2>
      <div class="input-label">
        <!-- <van-icon v-if="!photo" name="photo"/> -->
        <img v-if="photo" :src="photo" class="photo-img">
      </div>
      <van-uploader
        class="input-label"
        :after-read="onRead"
        accept="image/png, image/jpeg"
        multiple
      >
        <van-icon class="font20" name="photograph"/>
      </van-uploader>
    </section>
    <section>
      <h2 class="p-title">自我特点介绍及基本情况:</h2>
      <van-field v-model="selfText" placeholder="请输入" type="textarea" autosize/>
    </section>
    <section>
      <h2 class="p-title">工作及受教育情况:</h2>
      <van-field v-model="workText" placeholder="请输入" type="textarea" autosize/>
    </section>
    <section>
      <h2 class="p-title">情感经历及分手原因:</h2>
      <van-field v-model="breakText" placeholder="请输入" type="textarea" autosize/>
    </section>
    <section>
      <h2 class="p-title">期望对方:</h2>
      <van-field v-model="expectText" placeholder="请输入" type="textarea" autosize/>
    </section>
    <section>
      <van-button
        type="default"
        :loading="loading"
        :disabled="loading"
        class="up-btn"
        @click="submit()"
      >提交</van-button>
    </section>
    <!-- <van-loading color="white" class="dia-loading"/> -->
  </div>
</template>

<script>
import {
  Cell,
  CellGroup,
  RadioGroup,
  Radio,
  Icon,
  Uploader,
  Field,
  Button,
  Loading,
  Dialog
} from 'vant';

export default {
  name: 'info',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Icon.name]: Icon,
    [Uploader.name]: Uploader,
    [Field.name]: Field,
    [Button.name]: Button,
    [Loading.name]: Loading,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      sex: 'male',
      photo: '',
      selfText: '',
      workText: '',
      breakText: '',
      expectText: '',
      loading: false
    };
  },
  methods: {
    onRead(file) {
      console.log(file);
      this.photo = file.content;
    },
    submit() {
      if (this.loading) {
        return;
      }
      this.loading = true;
      console.log('submit');
      // this.$ajax({
      //   method: 'post',
      //   url: '',
      //   params: {}
      // }).then(res => {
      //   console.log(res);
      // });
      this.$dialog.alert({
        message: '提交成功~'
      });
    }
  }
};
</script>

<style lang="less">
body {
  font-size: 16px;
  background-color: #fafafa;
  -webkit-font-smoothing: antialiased;
  color: #333;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.font20 {
  font-size: 20px;
}
.wrap {
  margin: 0 15px;
}
section {
  font-size: 16px;
}
.p-title {
  margin: 10px 0;
  font-weight: normal;
  font-size: 16px;
  color: rgba(69, 90, 100, 0.6);
}
.input-label {
  margin-left: 10px;
  margin-bottom: 10px;
}
.photo-img {
  max-width: 200px;
}
.up-btn {
  display: block;
  margin: 10px auto;
  width: 100px;
  color: #fff;
  background-color: #3385ff;
  border: 1px solid #3385ff;
}
.dia-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 10px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate3d(-50%, -50%, 0);
}
</style>

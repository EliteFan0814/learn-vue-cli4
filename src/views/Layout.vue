<template>
  <div class="layout">
    <input type="file" ref="imgUpload" name="pic" accept="image/*" @change="handleChange">
    <div>
      <el-button type="primary" size="mini" @click="handleUpload">选择图片</el-button>
      <span class="pic-name">{{imgName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileInfo: undefined,
      imgName:undefined,
      imgFile:undefined
    }
  },
  methods: {
    handleUpload() {
      this.$refs.imgUpload.click()
    },
    handleChange(event) {
      const file = event.target.files
      this.imgName = file[0].name
      this.imgFile = file
      console.log(event.target.files)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout{
input{
  display:none;
}
.pic-name{
  font-size: 14px;
  color: #999;
  padding-left: 10px;
}
}  
</style>
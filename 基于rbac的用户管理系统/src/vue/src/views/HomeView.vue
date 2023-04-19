<template>
  <div class="success-page">
    <el-container >
      <el-main>
        <div class="content">
          <h1>Login Successful!</h1>
          <p>Welcome, {{ name }}!</p>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { getInfo } from "@/api/login";

export default {
  name: "SuccessPage",
  data() {
    return {
      name: "",
    };
  },
  mounted() {
    getInfo().then((res) => {
      this.name = res.data.name;
    });
  },
};
</script>

<style scoped>
.success-page {
  height: 100%;
}

.content {
  margin: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
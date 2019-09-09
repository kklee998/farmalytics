<template>
  <div class="home" style="height: 100%;">
    <!-- <h1>!!UNDER CONSTRUCTION!!</h1>
    <p>COME BACK LATER</p>
    <img src='@/assets/reee.gif'>-->
    <el-container style="height: 100%;">
      <el-aside style="border-right: solid 1px #e6e6e6; height: 100%;" width="300px">
        <div style="width: 298px; height: 107px; border-bottom: solid 1px #e6e6e6;">
          <img src="@/assets/AWS Logo-01-01.png" style="max-width: 100%; max-height: 100%;" />
        </div>
        <el-menu
          style="text-align: left; border-right: none;"
          default-active="1-1"
          active-text-color="#0FBA2B"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <span class="farmTitle">Wheat Farm</span>
            </template>
            <el-menu-item class="farmSubtitle" index="1-1">
              <i class="el-icon-coordinate"></i>Fields
            </el-menu-item>
            <el-menu-item class="farmSubtitle" index="1-2">
              <i class="el-icon-date"></i>Cycles
            </el-menu-item>
            <el-menu-item class="farmSubtitle" index="1-3">
              <i class="el-icon-warning"></i>Alert
            </el-menu-item>
            <el-menu-item class="farmSubtitle" index="1-4">
              <i class="el-icon-setting"></i>Admins
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="padding: 0px;">
        <el-container style="height: 100%;">
          <el-aside style="border-right: solid 1px #e6e6e6; height: 100%;" width="280px">
            <div style="width: 298px; height: 107px; border-bottom: solid 1px #e6e6e6;">
              <el-row type="flex" justify="center" style="height: 100%;" :gutter="20">
                <el-col :span="5">
                  <div style="width: 47px; height: 35px; margin: 40px 0px 0px 0px; float: right;">
                    <img src="@/assets/Vector 2.png" style="max-width: 100%; max-height: 100%;" />
                  </div>
                </el-col>
                <el-col :span="12">
                  <div style="margin: 35px 0px 0px 0px; float: left; text-align: left;">
                    <span class="areaName">Taman Bunga</span>
                    <br />
                    <span class="areaSize">AREA: 560 ha</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <el-menu
              style="text-align: left; border-right: none; margin-top: 15px;"
              default-active="1"
              active-text-color="#0FBA2B"
            >
              <el-menu-item class="farmSubmenuItem" index="1">
                <i class="el-icon-info"></i>General Information
              </el-menu-item>
              <el-menu-item class="farmSubmenuItem" index="2">
                <i class="el-icon-lightning"></i>Weather
              </el-menu-item>
              <el-menu-item class="farmSubmenuItem" index="3">
                <i class="el-icon-data-line"></i>Soil Analysis
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main></el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.farmTitle {
  font-family: "Poppins";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
}

.farmSubtitle {
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 30px !important;
  color: #000000;
}

.farmSubmenuItem {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 30px;
  color: #000000;
}

.areaName {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
}

.areaSize {
  font-family: Poppins;
  font-style: normal;
  font-weight: 200;
  font-size: 11px;
  line-height: 16px;
  color: #000000;
}

.el-menu-item {
  height: 30px !important;
}
</style>

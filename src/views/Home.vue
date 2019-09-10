<template>
  <div class="home" style="height: 100%;">
    <!-- <h1>!!UNDER CONSTRUCTION!!</h1>
    <p>COME BACK LATER</p>
    <img src='@/assets/reee.gif'>-->
    <el-container style="height: 100%;">
      <el-aside
        style="border-right: solid 1px #e6e6e6; height: 100%; overflow: hidden;"
        :width="mainMenuAsideWidth"
      >
        <div style="width: 298px; height: 107px; border-bottom: solid 1px #e6e6e6;"
          v-if="!isMainMenuCollapse"
        >
          <img src="@/assets/AWS Logo-01-01.png" style="max-width: 100%; max-height: 100%;" />
        </div>
        <div style="width: 64px; height: 64px; border-bottom: solid 1px #e6e6e6;" v-else>
          <img src="@/assets/AWS Logo SM v2.png" style="max-width: 100%; max-height: 100%;" />
        </div>
        <el-collapse-transition>
        <el-menu
          style="text-align: left; border-right: none;"
          default-active="1-1"
          active-text-color="#0FBA2B"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isMainMenuCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-house"></i>
              <span class="farmTitle">Wheat Farm</span>
            </template>
            <el-menu-item class="farmSubtitle" index="1-1">
              <i class="el-icon-coordinate"></i>Fields
            </el-menu-item>
            <el-menu-item class="farmSubtitle" index="1-2" disabled>
              <i class="el-icon-date"></i>Cycles
            </el-menu-item>
            <el-menu-item class="farmSubtitle" index="1-3" disabled>
              <i class="el-icon-warning"></i>Alert
            </el-menu-item>
            <el-menu-item class="farmSubtitle" index="1-4" disabled>
              <i class="el-icon-setting"></i>Admins
            </el-menu-item>
          </el-submenu>
        </el-menu>
        </el-collapse-transition>
        <br/>
        <el-button icon="el-icon-caret-right" circle @click="expandMainMenu"
          v-if="isMainMenuCollapse"
        >
        </el-button>
        <el-button icon="el-icon-caret-left" circle @click="collapseMainMenu" v-else></el-button>
      </el-aside>
      <el-main style="padding: 0px;">
        <el-container style="height: 100%;">
          <el-aside
            style="border-right: solid 1px #e6e6e6; height: 100%; overflow: hidden;"
            :width="subMenuAsideWidth"
            v-if="true"
          >
            <div
              style="width: 298px; height: 107px; border-bottom: solid 1px #e6e6e6;"
              v-if="!isSubMenuCollapse"
            >
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
            <div style="width: 64px; height: 64px; border-bottom: solid 1px #e6e6e6;" v-else>
              <img
                src="@/assets/Vector 2 v2.png"
                style="max-width: 100%; max-height: 100%;"
              />
            </div>
            <el-collapse-transition>
            <el-menu
              style="text-align: left; border-right: none; margin-top: 15px;"
              default-active="1"
              active-text-color="#0FBA2B"
              :collapse=isSubMenuCollapse
            >
              <el-menu-item class="farmSubmenuItem" index="1">
                <i class="el-icon-info"></i>
                <span v-if="!isSubMenuCollapse">General Information</span>
              </el-menu-item>
              <el-menu-item class="farmSubmenuItem" index="2" disabled>
                <i class="el-icon-lightning"></i>
                <span v-if="!isSubMenuCollapse">Weather</span>
              </el-menu-item>
              <el-menu-item class="farmSubmenuItem" index="3" disabled>
                <i class="el-icon-data-line"></i>
                <span v-if="!isSubMenuCollapse">Soil Analysis</span>
              </el-menu-item>
            </el-menu>
            </el-collapse-transition>
            <br/>
            <el-button icon="el-icon-caret-right" circle @click="expandSubMenu"
              v-if="isSubMenuCollapse"
            >
            </el-button>
            <el-button icon="el-icon-caret-left" circle @click="collapseSubMenu" v-else></el-button>
          </el-aside>
          <el-main style="padding: 0px;">
            <div
              style="width: 100%; height: 107px; border-bottom: solid 1px #e6e6e6;"
              :class="ifCollapse"
            >
            </div>
            <el-card class="box-card" style="margin: 20px;">
              <div style="max-width: 1000px; margin: 0px auto; min-height: 420px">
                <h2 style="float: left;">Temperature</h2>
                <apexchart
                  type="bar"
                  height="350"
                  :options="chartOptionsTemp"
                  :series="seriesTemp"
                />
              </div>
            </el-card>
            <el-card class="box-card" style="margin: 20px;">
              <div style="max-width: 1000px; margin: 0px auto; min-height: 420px">
                <h2 style="float: left;">Humidity</h2>
                <apexchart
                  type="bar"
                  height="350"
                  :options="chartOptionsHumidity"
                  :series="seriesHumidity"
                />
              </div>
            </el-card>
            <el-card class="box-card" style="margin: 20px;">
              <div style="max-width: 1000px; margin: 0px auto; min-height: 420px">
                <h2 style="float: left;">Sunlight</h2>
                <apexchart
                  type="bar"
                  height="350"
                  :options="chartOptionsSunlight"
                  :series="seriesSunlight"
                />
              </div>
            </el-card>
            <el-card class="box-card" style="margin: 20px;">
              <div style="max-width: 1000px; margin: 0px auto; min-height: 420px">
                <h2 style="float: left;">Water Level</h2>
                <apexchart
                  type="bar"
                  height="350"
                  :options="chartOptionsWater"
                  :series="seriesWater"
                />
              </div>
            </el-card>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
const AWS = require('aws-sdk');

export default {
  name: 'home',
  data() {
    return {
      isMainMenuCollapse: true,
      isSubMenuCollapse: true,
      seriesTemp: [
        {
          name: 'Temperature',
          data: [30, 40, 25, 30, 40, 36, 32, 23, 24, 38, 25, 42],
        },
      ],
      chartOptionsTemp: {
        chart: {
          height: 350,
          type: 'bar',
        },
        theme: {
          monochrome: {
            enabled: true,
            color: '#255aee',
            shadeTo: 'light',
            shadeIntensity: 0.65,
          },
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter(val) {
            return `${val}°C`;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },
        xaxis: {
          categories: [
            'Jan 19',
            'Feb 19',
            'Mar 19',
            'Apr 19',
            'May 19',
            'Jun 19',
            'Jul 19',
            'Aug 19',
            'Sep 19',
            'Oct 19',
            'Nov 19',
            'Dec 19',
          ],
          // type: "datetime",
          position: 'top',
          labels: {
            offsetY: -18,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
            offsetY: -35,
          },
        },
        fill: {
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100],
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter(val) {
              return `${val}°C`;
            },
          },
        },
        title: {
          text: 'Monthly Temperature in Taman Bunga, 2019',
          floating: true,
          offsetY: 320,
          align: 'center',
          style: {
            color: '#444',
          },
        },
      },
      seriesHumidity: [
        {
          name: 'Humidity',
          data: [30, 40, 25, 30, 40, 36, 32, 23, 24, 38, 25, 42],
        },
      ],
      chartOptionsHumidity: {
        chart: {
          height: 350,
          type: 'bar',
        },
        theme: {
          monochrome: {
            enabled: true,
            color: '#78ffd6',
            shadeTo: 'light',
            shadeIntensity: 0.65,
          },
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter(val) {
            return `${val}%`;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },
        xaxis: {
          categories: [
            'Jan 19',
            'Feb 19',
            'Mar 19',
            'Apr 19',
            'May 19',
            'Jun 19',
            'Jul 19',
            'Aug 19',
            'Sep 19',
            'Oct 19',
            'Nov 19',
            'Dec 19',
          ],
          position: 'top',
          labels: {
            offsetY: -18,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#a8ff78',
                colorTo: '#78ffd6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
            offsetY: -35,
          },
        },
        fill: {
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100],
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter(val) {
              return `${val}%`;
            },
          },
        },
        title: {
          text: 'Monthly Humidity in Taman Bunga, 2019',
          floating: true,
          offsetY: 320,
          align: 'center',
          style: {
            color: '#444',
          },
        },
      },
      seriesSunlight: [
        {
          name: 'Sunlight Candela',
          data: [30, 40, 25, 30, 40, 36, 32, 23, 24, 38, 25, 42],
        },
      ],
      chartOptionsSunlight: {
        chart: {
          height: 350,
          type: 'bar',
        },
        theme: {
          monochrome: {
            enabled: true,
            color: '#f12711',
            shadeTo: 'light',
            shadeIntensity: 0.65,
          },
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter(val) {
            return `${val}cd`;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },
        xaxis: {
          categories: [
            'Jan 19',
            'Feb 19',
            'Mar 19',
            'Apr 19',
            'May 19',
            'Jun 19',
            'Jul 19',
            'Aug 19',
            'Sep 19',
            'Oct 19',
            'Nov 19',
            'Dec 19',
          ],
          position: 'top',
          labels: {
            offsetY: -18,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#f12711',
                colorTo: '#f5af19',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
            offsetY: -35,
          },
        },
        fill: {
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100],
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter(val) {
              return `${val}cd`;
            },
          },
        },
        title: {
          text: 'Monthly Sunlight Candela in Taman Bunga, 2019',
          floating: true,
          offsetY: 320,
          align: 'center',
          style: {
            color: '#444',
          },
        },
      },
      seriesWater: [
        {
          name: 'Water Level',
          data: [30, 40, 25, 30, 40, 36, 32, 23, 24, 38, 25, 42],
        },
      ],
      chartOptionsWater: {
        chart: {
          height: 350,
          type: 'bar',
        },
        theme: {
          monochrome: {
            enabled: true,
            color: '#00B4DB',
            shadeTo: 'light',
            shadeIntensity: 0.65,
          },
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter(val) {
            return `${val}m`;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },
        xaxis: {
          categories: [
            'Jan 19',
            'Feb 19',
            'Mar 19',
            'Apr 19',
            'May 19',
            'Jun 19',
            'Jul 19',
            'Aug 19',
            'Sep 19',
            'Oct 19',
            'Nov 19',
            'Dec 19',
          ],
          position: 'top',
          labels: {
            offsetY: -18,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#00B4DB',
                colorTo: '#0083B0',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
            offsetY: -35,
          },
        },
        fill: {
          gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100],
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter(val) {
              return `${val}m`;
            },
          },
        },
        title: {
          text: 'Monthly Water Level in Taman Bunga, 2019',
          floating: true,
          offsetY: 320,
          align: 'center',
          style: {
            color: '#444',
          },
        },
      },
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    expandMainMenu() {
      this.isMainMenuCollapse = false;
    },
    collapseMainMenu() {
      this.isMainMenuCollapse = true;
    },
    expandSubMenu() {
      this.isSubMenuCollapse = false;
    },
    collapseSubMenu() {
      this.isSubMenuCollapse = true;
    },
  },
  computed: {
    mainMenuAsideWidth() {
      if (this.isMainMenuCollapse) {
        return '60px';
      }
      return '300px';
    },
    subMenuAsideWidth() {
      if (this.isSubMenuCollapse) {
        return '60px';
      }
      return '280px';
    },
    ifCollapse() {
      if (this.isSubMenuCollapse) {
        return 'collapseDiv';
      }
      return 'expandDiv';
    },
  },
  mounted() {
    console.log(AWS);
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      sessionToken: process.env.AWS_SESSION_TOKEN,
      region: process.env.AWS_REGION,
    });
    const sqs = new AWS.SQS();

    const params = {
      QueueUrl: 'STRING_VALUE', /* required */
      AttributeNames: [
        'All',
      ],
      MaxNumberOfMessages: '10',
      VisibilityTimeout: '0',
      WaitTimeSeconds: '0',
    };
    sqs.receiveMessage(params, (err, data) => {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
    });
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

.collapseDiv {
  height: 64px !important;
}

.expandDiv {
  height: 107px !important;
}

.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>

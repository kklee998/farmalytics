<template>
  <div class="home" style="height: 100%;">
    <el-container style="height: 100%;">
      <el-aside
        style="border-right: solid 1px #e6e6e6; height: 100%; overflow: hidden;"
        :width="mainMenuAsideWidth"
      >
        <div
          style="width: 298px; height: 107px; border-bottom: solid 1px #e6e6e6;"
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
            @select="handleSelect"
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
              <el-menu-item class="farmSubtitle" index="1-2">
                <i class="el-icon-date"></i>Cycles
              </el-menu-item>
              <el-menu-item class="farmSubtitle" index="1-3">
                <i class="el-icon-warning"></i>Suggestions
              </el-menu-item>
              <el-menu-item class="farmSubtitle" index="1-4">
                <i class="el-icon-setting"></i>Admins
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-collapse-transition>
        <br />
        <el-button
          icon="el-icon-caret-right"
          circle
          @click="expandMainMenu"
          v-if="isMainMenuCollapse"
        ></el-button>
        <el-button icon="el-icon-caret-left" circle @click="collapseMainMenu" v-else></el-button>
      </el-aside>
      <el-main style="padding: 0px;">
        <el-container style="height: 100%;" v-if="this.selectedMenu === '1-1'">
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
              <img src="@/assets/Vector 2 v2.png" style="max-width: 100%; max-height: 100%;" />
            </div>
            <el-collapse-transition>
              <el-menu
                style="text-align: left; border-right: none; margin-top: 15px;"
                default-active="1"
                active-text-color="#0FBA2B"
                @select="handleSelectSub"
                :collapse="isSubMenuCollapse"
              >
                <el-menu-item class="farmSubmenuItem" index="1">
                  <i class="el-icon-info"></i>
                  <span v-if="!isSubMenuCollapse">General Information</span>
                </el-menu-item>
                <el-menu-item class="farmSubmenuItem" index="2">
                  <i class="el-icon-lightning"></i>
                  <span v-if="!isSubMenuCollapse">Weather</span>
                </el-menu-item>
                <el-menu-item class="farmSubmenuItem" index="3">
                  <i class="el-icon-data-line"></i>
                  <span v-if="!isSubMenuCollapse">Soil Analysis</span>
                </el-menu-item>
              </el-menu>
            </el-collapse-transition>
            <br />
            <el-button
              icon="el-icon-caret-right"
              circle
              @click="expandSubMenu"
              v-if="isSubMenuCollapse"
            ></el-button>
            <el-button icon="el-icon-caret-left" circle @click="collapseSubMenu" v-else></el-button>
          </el-aside>
          <el-main style="padding: 0px;" v-if="this.subSelectedMenu === '1'">
            <div
              style="width: 100%; height: 107px; border-bottom: solid 1px #e6e6e6;"
              :class="ifCollapse"
            >
              <h2 style="margin: 0px; padding-top: 10px;">Taman Bunga Real Time</h2>
            </div>
            <el-card class="box-card" style="margin: 20px;">
              <div style="max-width: 1000px; margin: 0px auto; min-height: 420px">
                <h2 style="float: left;">Temperature</h2>
                <apexchart
                  type="area"
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
                  type="area"
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
                  type="area"
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
                  type="area"
                  height="350"
                  :options="chartOptionsWater"
                  :series="seriesWater"
                />
              </div>
            </el-card>
          </el-main>
          <el-main style="padding: 0px; overflow: auto;" v-if="this.subSelectedMenu === '3'">
            <div
              style="width: 100%; height: 107px; border-bottom: solid 1px #e6e6e6;"
              :class="ifCollapse"
            >
              <h2 style="margin: 0px; padding-top: 10px;">Taman Bunga Soil Analysis</h2>
            </div>
            <el-row type="flex" justify="center" :gutter="20">
              <el-col :span="8">
                <el-card class="box-card" style="margin: 20px;">
                  <h3>Water Used Today (L)</h3>
                  <h4>69L</h4>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="box-card" style="margin: 20px;">
                  <h3>Soil Acid Level Today (pH)</h3>
                  <h4>6.90</h4>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="box-card" style="margin: 20px;">
                  <h3>Fertilizer Used Today (kg)</h3>
                  <h4>4.20</h4>
                </el-card>
              </el-col>
            </el-row>
            <el-card class="box-card" style="margin: 20px;">
              <div style="max-width: 1000px; margin: 0px auto; min-height: 420px">
                <h2 style="float: left;">Soil Analysis</h2>
                <apexchart
                  type="pie"
                  height="350"
                  :options="chartOptionSoil"
                  :series="seriesSoil"
                />
              </div>
            </el-card>
            <el-card class="box-card" style="margin: 20px;">
              <h2>Soil Gallery</h2>
              <el-carousel :interval="4000" type="card" height="400px">
                <el-carousel-item>
                  <img style="max-width:100%; max-height:100%;" src="@/assets/dancing1.gif" />
                </el-carousel-item>
                <el-carousel-item>
                  <img style="max-width:100%; max-height:100%;" src="@/assets/dancing2.gif" />
                </el-carousel-item>
                <el-carousel-item>
                  <img style="max-width:100%; max-height:100%;" src="@/assets/dancing3.gif" />
                </el-carousel-item>
              </el-carousel>
            </el-card>
          </el-main>
          <el-main style="padding: 0px; overflow: hidden;" v-if="this.subSelectedMenu === '2'">
            <MdConstructIcon
              w="500px"
              h="500px"
              animate="rotate"
              style="margin: 150px auto 0px auto;"
            />
            <h1 style="font-size: 30px;">Under Construction</h1>
          </el-main>
        </el-container>
        <div v-else-if="this.selectedMenu === '1-2'">
          <div
            style="width: 100%; height: 107px; border-bottom: solid 1px #e6e6e6;"
            :class="ifCollapse"
          >
            <h2 style="margin: 0px; padding-top: 10px;">Taman Bunga Historical Data</h2>
          </div>
          <el-card class="box-card" style="margin: 20px;">
            <div style="max-width: 1000px; margin: 0px auto; min-height: 420px">
              <h2 style="float: left;">Temperature</h2>
              <apexchart
                type="area"
                height="350"
                :options="chartOptionsTempHis"
                :series="seriesTempHis"
              />
            </div>
          </el-card>
          <el-card class="box-card" style="margin: 20px;">
            <div style="max-width: 1000px; margin: 0px auto; min-height: 420px">
              <h2 style="float: left;">Humidity</h2>
              <apexchart
                type="area"
                height="350"
                :options="chartOptionsHumidityHis"
                :series="seriesHumidityHis"
              />
            </div>
          </el-card>
          <el-card class="box-card" style="margin: 20px;">
            <div style="max-width: 1000px; margin: 0px auto; min-height: 420px">
              <h2 style="float: left;">Sunlight</h2>
              <apexchart
                type="area"
                height="350"
                :options="chartOptionsSunlightHis"
                :series="seriesSunlightHis"
              />
            </div>
          </el-card>
          <el-card class="box-card" style="margin: 20px;">
            <div style="max-width: 1000px; margin: 0px auto; min-height: 420px">
              <h2 style="float: left;">Water Level</h2>
              <apexchart
                type="area"
                height="350"
                :options="chartOptionsWaterHis"
                :series="seriesWaterHis"
              />
            </div>
          </el-card>
        </div>
        <div v-else-if="this.selectedMenu === '1-3'">
          <div
            style="width: 100%; height: 107px; border-bottom: solid 1px #e6e6e6;"
            :class="ifCollapse"
          >
            <h2 style="margin: 0px; padding-top: 10px;">Taman Bunga Suggestion</h2>
          </div>
            <el-alert
              title="Warning"
              type="warning"
              description="You seem to be using more water than last month."
              center
              style="margin: 30px auto; box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); max-width: 70vw;"
            >
            </el-alert>
        </div>
        <div v-else>
          <MdConstructIcon
            w="600px"
            h="600px"
            animate="rotate"
            style="margin: 150px auto 0px auto;"
          />
          <h1 style="font-size: 30px;">Under Construction</h1>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MdConstructIcon from 'vue-ionicons/dist/md-construct.vue';

const AWS = require('aws-sdk');
const config = require('@/config.json');

AWS.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  sessionToken: config.sessionToken,
  region: config.region,
});
const sqs = new AWS.SQS();

const params = {
  QueueUrl:
    'https://sqs.us-east-1.amazonaws.com/312352681771/farmalytics_sqs' /* required */,
  AttributeNames: ['All'],
  MaxNumberOfMessages: '10',
  VisibilityTimeout: '3',
  WaitTimeSeconds: '0',
};

export default {
  name: 'home',
  components: {
    MdConstructIcon,
  },
  data() {
    return {
      isMainMenuCollapse: true,
      isSubMenuCollapse: true,
      selectedMenu: '1-1',
      subSelectedMenu: '1',
      seriesTemp: [
        {
          name: 'Temperature',
          data: [],
        },
      ],
      chartOptionsTemp: {
        chart: {
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
          },
          toolbar: {
            autoSelected: 'zoom',
          },
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          },
        },
        dataLabels: {
          enabled: false,
        },

        markers: {
          size: 0,
          style: 'full',
        },
        // colors: ['#0165fc'],
        title: {
          text: '',
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          min: 0,
          max: 40,
          labels: {
            formatter(val) {
              return `${val}°C`;
            },
          },
          title: {
            text: 'Temp °C',
          },
        },
        xaxis: {
          type: 'datetime',
        },

        tooltip: {
          shared: false,
          y: {
            formatter(val) {
              return `${val}°C`;
            },
          },
        },
      },
      seriesHumidity: [
        {
          name: 'Humidity',
          data: [],
        },
      ],
      chartOptionsHumidity: {
        chart: {
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
          },
          toolbar: {
            autoSelected: 'zoom',
          },
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          },
        },
        dataLabels: {
          enabled: false,
        },

        markers: {
          size: 0,
          style: 'full',
        },
        colors: ['#78ffd6'],
        title: {
          text: '',
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          min: 0,
          max: 100,
          labels: {
            formatter(val) {
              return `${val}%`;
            },
          },
          title: {
            text: 'Humidity %',
          },
        },
        xaxis: {
          type: 'datetime',
        },

        tooltip: {
          shared: false,
          y: {
            formatter(val) {
              return `${val}%`;
            },
          },
        },
      },
      seriesSunlight: [
        {
          name: 'Sunlight',
          data: [],
        },
      ],
      chartOptionsSunlight: {
        chart: {
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
          },
          toolbar: {
            autoSelected: 'zoom',
          },
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          },
        },
        dataLabels: {
          enabled: false,
        },

        markers: {
          size: 0,
          style: 'full',
        },
        colors: ['#f12711'],
        title: {
          text: '',
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          min: 100,
          max: 400,
          labels: {
            formatter(val) {
              return `${val}cd`;
            },
          },
          title: {
            text: 'Sunlight cd',
          },
        },
        xaxis: {
          type: 'datetime',
        },

        tooltip: {
          shared: false,
          y: {
            formatter(val) {
              return `${val}cd`;
            },
          },
        },
      },
      seriesWater: [
        {
          name: 'Water Level',
          data: [],
        },
      ],
      chartOptionsWater: {
        chart: {
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
          },
          toolbar: {
            autoSelected: 'zoom',
          },
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          },
        },
        dataLabels: {
          enabled: false,
        },

        markers: {
          size: 0,
          style: 'full',
        },
        colors: ['#00B4DB'],
        title: {
          text: '',
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          min: 0,
          max: 40,
          labels: {
            formatter(val) {
              return `${val}mm`;
            },
          },
          title: {
            text: 'Water Level mm',
          },
        },
        xaxis: {
          type: 'datetime',
        },

        tooltip: {
          shared: false,
          y: {
            formatter(val) {
              return `${val}mm`;
            },
          },
        },
      },
      seriesTempHis: [
        {
          name: 'Temperature',
          data: [
            '24',
            '25',
            '23',
            '26',
            '25',
            '24',
            '25',
            '23',
            '26',
            '25',
            '24',
            '25',
            '23',
            '26',
            '25',
            '24',
            '25',
            '23',
            '26',
            '25',
            '24',
            '25',
            '23',
            '26',
            '25',
            '24',
            '25',
            '23',
            '26',
            '25',
            '23',
          ],
        },
      ],
      chartOptionsTempHis: {
        chart: {
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
          },
          toolbar: {
            autoSelected: 'zoom',
          },
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          },
        },
        dataLabels: {
          enabled: false,
        },

        markers: {
          size: 0,
          style: 'full',
        },
        // colors: ['#0165fc'],
        title: {
          text: '',
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          min: 0,
          max: 40,
          labels: {
            formatter(val) {
              return `${val}°C`;
            },
          },
          title: {
            text: 'Temp °C',
          },
        },
        xaxis: {
          categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
          ],
          title: {
            text: 'August',
          },
        },
        tooltip: {
          shared: false,
          y: {
            formatter(val) {
              return `${val}°C`;
            },
          },
        },
      },
      seriesHumidityHis: [
        {
          name: 'Humidity',
          data: [
            '76',
            '75',
            '73',
            '78',
            '75',
            '74',
            '73',
            '70',
            '69',
            '72',
            '72',
            '74',
            '76',
            '75',
            '73',
            '78',
            '75',
            '74',
            '73',
            '70',
            '69',
            '72',
            '72',
            '74',
            '74',
            '73',
            '70',
            '69',
            '72',
            '72',
            '74',
          ],
        },
      ],
      chartOptionsHumidityHis: {
        chart: {
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
          },
          toolbar: {
            autoSelected: 'zoom',
          },
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          },
        },
        dataLabels: {
          enabled: false,
        },

        markers: {
          size: 0,
          style: 'full',
        },
        colors: ['#78ffd6'],
        title: {
          text: '',
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          min: 0,
          max: 100,
          labels: {
            formatter(val) {
              return `${val}%`;
            },
          },
          title: {
            text: 'Humidity %',
          },
        },
        xaxis: {
          categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
          ],
          title: {
            text: 'August',
          },
        },
        tooltip: {
          shared: false,
          y: {
            formatter(val) {
              return `${val}%`;
            },
          },
        },
      },
      seriesSunlightHis: [
        {
          name: 'Sunlight',
          data: [
            '240',
            '250',
            '230',
            '260',
            '250',
            '240',
            '250',
            '230',
            '260',
            '250',
            '240',
            '250',
            '230',
            '260',
            '250',
            '240',
            '250',
            '230',
            '260',
            '250',
            '240',
            '250',
            '230',
            '260',
            '250',
            '240',
            '250',
            '230',
            '260',
            '250',
            '230',
          ],
        },
      ],
      chartOptionsSunlightHis: {
        chart: {
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
          },
          toolbar: {
            autoSelected: 'zoom',
          },
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          },
        },
        dataLabels: {
          enabled: false,
        },

        markers: {
          size: 0,
          style: 'full',
        },
        colors: ['#f12711'],
        title: {
          text: '',
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          min: 0,
          max: 300,
          labels: {
            formatter(val) {
              return `${val}cd`;
            },
          },
          title: {
            text: 'Sunlight cd',
          },
        },
        xaxis: {
          categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
          ],
          title: {
            text: 'August',
          },
        },
        tooltip: {
          shared: false,
          y: {
            formatter(val) {
              return `${val}cd`;
            },
          },
        },
      },
      seriesWaterHis: [
        {
          name: 'Water Level',
          data: [
            '24',
            '25',
            '23',
            '26',
            '25',
            '24',
            '25',
            '23',
            '26',
            '25',
            '24',
            '25',
            '23',
            '26',
            '25',
            '24',
            '25',
            '23',
            '26',
            '25',
            '24',
            '25',
            '23',
            '26',
            '25',
            '24',
            '25',
            '23',
            '26',
            '25',
            '23',
          ],
        },
      ],
      chartOptionsWaterHis: {
        chart: {
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
          },
          toolbar: {
            autoSelected: 'zoom',
          },
        },
        plotOptions: {
          line: {
            curve: 'smooth',
          },
        },
        dataLabels: {
          enabled: false,
        },

        markers: {
          size: 0,
          style: 'full',
        },
        colors: ['#00B4DB'],
        title: {
          text: '',
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          min: 0,
          max: 50,
          labels: {
            formatter(val) {
              return `${val}mm`;
            },
          },
          title: {
            text: 'Water Level mm',
          },
        },
        xaxis: {
          categories: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
            '24',
            '25',
            '26',
            '27',
            '28',
            '29',
            '30',
            '31',
          ],
          title: {
            text: 'August',
          },
        },
        tooltip: {
          shared: false,
          y: {
            formatter(val) {
              return `${val}mm`;
            },
          },
        },
      },
      seriesSoil: [70, 20, 5, 3, 1.1, 0.9],
      chartOptionSoil: {
        labels: [
          'Calcium',
          'Magnesium',
          'Potassium',
          'Boron',
          'Cobalt',
          'Iron',
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    handleSelect(key) {
      this.selectedMenu = key;
    },
    handleSelectSub(key) {
      this.subSelectedMenu = key;
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
    getData() {
      sqs.receiveMessage(params, (err, data) => {
        if (err) console.log(err, err.stack);
        // an error occurred
        else {
          const newDataTemp = this.seriesTemp[0].data;
          const newDataHumidity = this.seriesHumidity[0].data;
          const newDataSunlight = this.seriesSunlight[0].data;
          const newDataWater = this.seriesWater[0].data;
          data.Messages.forEach((item) => {
            newDataTemp.push([
              JSON.parse(item.Body).data[1].timestamp,
              JSON.parse(item.Body).data[1].value,
            ]);
            newDataHumidity.push([
              JSON.parse(item.Body).data[2].timestamp,
              JSON.parse(item.Body).data[2].value,
            ]);
            newDataSunlight.push([
              JSON.parse(item.Body).data[3].timestamp,
              JSON.parse(item.Body).data[3].value,
            ]);
            newDataWater.push([
              JSON.parse(item.Body).data[4].timestamp,
              JSON.parse(item.Body).data[4].value,
            ]);
          });
          newDataTemp.sort((x, y) => x[0] - y[0]);
          newDataHumidity.sort((x, y) => x[0] - y[0]);
          newDataSunlight.sort((x, y) => x[0] - y[0]);
          newDataWater.sort((x, y) => x[0] - y[0]);
          this.seriesTemp = [
            {
              name: 'Temperature',
              data: newDataTemp,
            },
          ];
          this.seriesHumidity = [
            {
              name: 'Humidity',
              data: newDataHumidity,
            },
          ];
          this.seriesSunlight = [
            {
              name: 'Sunlight',
              data: newDataSunlight,
            },
          ];
          this.seriesWater = [
            {
              name: 'Water Level',
              data: newDataWater,
            },
          ];
        }
      });
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
    this.getData();
    setInterval(() => {
      this.getData();
    }, 10000);
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
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>

/**
 * Day 12
 * 
 */
'use strict';

import React,{ Component } from 'react';
import { Image,StyleSheet,Text,TouchableHighlight,View,ScrollView } from 'react-native';
import Util from './utils';
// import RNChart from 'react-native-chart';

const chartData1 = [
  {
    name: 'BarChart',
    type: 'bar',
    color:'#fed291',
    widthPercent: 0.6,
    data: [30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30],
  },
];

const chartData2 = [
  {
    name: 'LineChart',
    color: 'gray',
    lineWidth: 2,
    highlightIndices: [1, 2], 
    highlightColor: 'orange',
    showDataPoint: true,
    data: [10, 12, 14, 25, 31, 52, 41, 31, 52, 66, 22, 11],
  },
];

const chartData3 = [
  {
    name: 'pieChart',
    type: 'pie',
    color:'#875483',
    widthPercent: 0.6,
    data: [30, 10, 31, 52, 63],
    sliceColors: ["#fff691","#90ebfe","#fd8f9d","#c6fd92","#f667fc"]
  },
];

const xLabels = ['0','1','2','3','4','5','6','7','8','9','10','11'];

export default class extends Component{
  render() {
    return(
      <ScrollView style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.title}>Bar chart</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 63
  },
  centerContainer:{
    flex:1,
    alignItems:"center"
  },
  title:{
    paddingTop:10,
    paddingBottom:10,
    textAlign:"center",
    fontWeight:"500",
    fontSize:16
  },
  chart: {
      height:200,
      width:Util.size.width-20,
  },
});

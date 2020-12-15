document.addEventListener('DOMContentLoaded', function () {
    var vertical_bar = Highcharts.chart('bar_chart_id', {
        chart: {
            backgroundColor: '',
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['India', 'America', 'Japan']
        },
        colors: ["  #009688"," #2e294e"],
        series: [{
            name: 'Bronze',
            data: [1, 10, 4]
        }, {
            name: 'Silver',
            data: [5, 7, 3]
        }]
    });

    var piechart = Highcharts.chart('piechart_id', {
        chart: {
            backgroundColor: '',
            type: 'pie'
        },
        title: {
            text: ''
        },
    
        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },
    
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    distance: -60,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
            ,
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                // dataLabels: {
                //     enabled: false
                // },
                showInLegend: true
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        colors: ["  #009688"," #2e294e"],
        series: [
            {
                name: "Financial Growth",
                colorByPoint: true,
                data: [
                    {
                        name: "Market",
                        y: 60
                    },
                    {
                        name: "Others",
                        y: 40
                    }
                ]
            }
        ]
    });
   
    var area = Highcharts.chart('area_id', {
        chart: {
            backgroundColor: '',
            type: 'area'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['1750', '1800','2020'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' millions'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        colors: ["  #009688"," #2e294e"],
        series: [{
            name: 'China',
            data: [502, 635, 1009]
        }, {
            name: 'India',
            data: [106, 107, 1011]
        }]
    });
    
});
function myFunction (){    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Activities Impact'
        },
        subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['No Unexcused Absences', 'Never Skipped Classes', 'GPA of 3.0 or Above', 'Highest Quartile Composite Math & Reading Assesment', 'Expect to Earn Bachelor Degree'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Participants',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: 'percentage'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Participants',
            data: [50.4, 50.7, 30.6, 29.8, 68.2]
        }, {
            name: 'Nonparticipants',
            data: [36.2, 42.3, 10.8, 14.2, 48.2]
        }, ]
    });
});
function mostra(){
$(function () {
        $('#grafico').highcharts({
            credits: {
				enabled: false
			},
			chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Desempenho Geral '+ username
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            	percentageDecimals: 1,
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function() {
                            return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Desempenho',
                data: [
					{
                        name: 'Acertos',
                        y: acertou,
						color: '#009900'						
                    },
					
                    {
                        name: 'Erros',
                        y: errou,
						color: '#FF0000'
                    },
                ]
            }]
        });
    });
	//var div = document.getElementById("grafico");
	//div.style.visibility='visible';
}

function removeGraficos(){
	//var div = document.getElementById("grafico");
	//div.style.visibility='hidden';
}
var addressInit = function(_cmbProvince, _cmbCity, _cmbArea, defaultProvince, defaultCity, defaultArea)
{
    var cmbProvince = document.getElementById(_cmbProvince);//省份选择id
    var cmbCity = document.getElementById(_cmbCity);//城市选择id
    var cmbArea = document.getElementById(_cmbArea);//地区选择id
     
     //默认选择
    function cmbSelect(cmb, str)
    {
        for(var i=0; i<cmb.options.length; i++)
        {
            if(cmb.options[i].value == str)
            {
                cmb.selectedIndex = i;
                return;
            }
        }
    }
    //动态添加地址
    function cmbAddOption(cmb, str, obj)
    {
        var option = document.createElement("OPTION");
        cmb.options.add(option);
        option.innerHTML = str;
        option.value = str;
        option.obj = obj;
    }
    //改变省份
     function changeProvince()
    {
        cmbCity.options.length = 0;
        cmbCity.onchange = null;
        if(cmbProvince.selectedIndex == -1)return;
        var item = cmbProvince.options[cmbProvince.selectedIndex].obj;
        for(var i=0; i<item.cityList.length; i++)
        {
            cmbAddOption(cmbCity, item.cityList[i].name, item.cityList[i]);
        }
        cmbSelect(cmbCity, defaultCity);
        changeCity();
        cmbCity.onchange = changeCity;
    }
     //改变城市
    function changeCity()
    {
        cmbArea.options.length = 0;
        if(cmbCity.selectedIndex == -1)return;
        var item = cmbCity.options[cmbCity.selectedIndex].obj;
        for(var i=0; i<item.areaList.length; i++)
        {
            cmbAddOption(cmbArea, item.areaList[i], null);
        }
        cmbSelect(cmbArea, defaultArea);
    }
     
    for(var i=0; i<provinceList.length; i++)
    {
        cmbAddOption(cmbProvince, provinceList[i].name, provinceList[i]);
    }
    cmbSelect(cmbProvince, defaultProvince);
    changeProvince();
    cmbProvince.onchange = changeProvince;
}
 
var provinceList = [
{name:'北京', cityList:[         
{name:'市辖区', areaList:['东城区','西城区','崇文区','宣武区','朝阳区','丰台区','石景山区','海淀区','门头沟区','房山区','通州区','顺义区','昌平区','大兴区','怀柔区','平谷区']},
{name:'县', areaList:['密云县','延庆县']}
]},
{name:'上海', cityList:[         
{name:'市辖区', areaList:['黄浦区','卢湾区','徐汇区','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','金山区','松江区','青浦区','南汇区','奉贤区']},   
{name:'县', areaList:['崇明县']}
]},
{name:'广东省', cityList:[         
{name:'深圳市', areaList:['南山区','福田区','宝安区',"龙岗区","罗湖区","盐田区"]}, 
{name:'广州市', areaList:['海珠区','荔湾区','番禺区','黄埔区','天河区',"越秀区","白云区","花都区","南沙区","萝岗区","增城市","从化市"]},  
{name:'韶关市', areaList:['武江区','浈江区','曲江区','始兴县','仁化县',"翁源县","乳源","新丰县","乐昌市","南雄市"]},
{name:'珠海市', areaList:["香洲区","斗门区","金湾区"]},
{name:'汕头市', areaList:["龙湖区","金平区","濠江区","潮阳区","潮南区","澄海区","南澳县"]},
{name:'佛山市', areaList:["禅城区","南海区","顺德区","三水区","高明区"]},
{name:'江门市', areaList:["蓬江区","江海区","新会区","台山市","开平市","鹤山市","恩平市"]},
{name:'湛江市', areaList:["赤坎区","霞山区","坡头区","麻章区","遂溪县","徐闻县","廉江市","雷州市","吴川市"]},
{name:'茂名市', areaList:["茂南区","茂港区","电白县","高州市","化州市","信宜市"]},
{name:'肇庆市', areaList:["端州区","鼎湖区","广宁县","怀集县","封开县","德庆县","高要市","四会市"]},
{name:'惠州市', areaList:["惠城区","惠阳区","博罗县","惠东县","龙门县"]},
{name:'梅州市', areaList:["梅江区","梅县","大埔县","丰顺县","五华县","平远县","蕉岭县","兴宁市"]},
{name:'汕尾市', areaList:["城区","海丰县","陆河县","陆丰市"]},
{name:'河源市', areaList:["源城区","紫金县","龙川县","连平县","和平县","东源县"]},
{name:'阳江市', areaList:["江城区","阳西县","阳东县","阳春市"]},
{name:'清远市', areaList:["清城区","佛冈县","阳山县","连山","连南","清新县","英德市","连州市"]},
{name:'东莞市', areaList:["莞城","南城","东城","万江"]},
{name:'中山市', areaList:['石岐区','东区','西区','南区','五桂山']},
{name:'潮州市', areaList:["枫溪区","湘桥区","潮安县","饶平县"]},
{name:'揭阳市', areaList:["榕城区","揭东县","揭西县","惠来县","普宁市"]},
{name:'云浮市', areaList:["云城区","新兴县","郁南县","云安县","罗定市"]},
]}
];
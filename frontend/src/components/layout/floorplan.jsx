import {useEffect} from 'react'
import imageMapResize from 'image-map-resizer'

const FloorPlan = () => {

useEffect(() => {
imageMapResize()
}, [])


    return (
        <div className='w-200 h-200'>
<img src="/assets/floorplan.jpg" useMap="#image-map" style={{width:"100%", height:"auto"}}/>

<map name="image-map">
    <area target="" alt="Fitness Area 2" title="Fitness Area 2" href="#Fit2" coords="180,1458,228,1380,417,1303,548,1260,677,1246,731,1249,788,1292,797,1535,217,1538,188,1500" shape="poly"/>
    <area target="" alt="Fitness Area 2" title="Fitness Area 2" href="#Fit2" coords="911,1529,911,1300,989,1235,1111,1189,1231,1135,1351,1063,1448,986,1528,912,1597,830,1639,856,1639,1527,1223,1527" shape="poly"/>
    <area target="" alt="Cardio Zone 3" title="Cardio Zone 3" href="#Cardio3" coords="1657,817,1620,803,1765,507,1825,482,2014,476,2005,1524,1682,1517,1677,852,1620,803" shape="poly"/>
    <area target="" alt="Fitness Area 1" title="Fitness Area 1" href="#Fit1" coords="908,744,920,1073,957,1110,1086,1082,1203,1019,1311,959,1382,882,1471,787,1522,716,1565,633,1605,579,1617,522,1545,567,1391,636,1300,681,1220,707,1100,730,1025,744" shape="poly"/>
    <area target="" alt="Fitness Area 1" title="Fitness Area 1" href="#Fit1" coords="163,1297,283,1242,380,1205,477,1168,557,1160,685,1140,745,1137,797,1080,797,747,631,730,469,696,315,638,200,593,92,530,18,476,9,1151,74,1180,117,1222" shape="poly"/>
    <area target="" alt="Reception" title="Reception" href="#Reception" coords="77,1536,134,1450,120,1321,80,1264,17,1218,0,1290,9,1518,20,1527" shape="poly"/>
    <area target="" alt="Cardio Zone 1" title="Cardio Zone 1" href="#Cardio1" coords="800,713,780,510,791,350,505,307,494,96,69,93,66,56,9,53,0,136,3,433,109,504,240,578,400,636,557,681" shape="poly"/>
    <area target="" alt="Cardio Zone 2" title="Cardio Zone 2" href="#Cardio2" coords="903,365,923,490,906,585,903,702,1063,702,1132,688,1206,668,1283,645,1375,605,1477,562,1569,510,1626,488,1666,393,1669,319,1677,265,1677,125,1617,96,1186,102,1186,305,1106,342" shape="poly"/>
    <area target="" alt="Rock Wall" title="Rock Wall" href="#Rockwall" coords="537,22,532,288,794,333,903,333,1154,285,1151,28,1040,25,894,25,706,22,614,22,580,22" shape="poly"/>
</map>

        </div>
    )
}

export default FloorPlan
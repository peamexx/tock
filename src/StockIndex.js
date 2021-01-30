import { Line } from 'react-chartjs-2';

function StockIndexKospi() {
    return (
        <div className="kospi">
            <h4><a href="#">코스피지수</a></h4>
            <span className="num">
                <strong className="price pos">2,820.51</strong>
                <p className="changePrice pos">11.91</p>
                <p className="changeRatio pos">0.42%</p>
            </span>
            <Line data={dataKospi} options={options} />
            <dl className="txt">
                <dt>개인</dt>
                <dd className="pos">21,969억</dd>
                <dt>기관</dt>
                <dd className="nag">-19,734억</dd>
                <dt>외국인</dt>
                <dd className="nag">-3,106억</dd>
            </dl>
        </div>
    );
}

function StockIndexKosdaq() {
    return (
        <div className="kosdaq">
            <h4><a href="#">코스닥지수</a></h4>
            <span className="num">
                <strong className="price pos">957.41</strong>
                <p className="changePrice pos">30.41</p>
                <p className="changeRatio pos">3.28%</p>
            </span>
            <Line data={dataKosdaq} options={options} />
            <dl className="txt">
                <dt>개인</dt>
                <dd className="pos">2,724억</dd>
                <dt>기관</dt>
                <dd className="nag">-3,265억</dd>
                <dt>외국인</dt>
                <dd className="pos">1,116억</dd>
            </dl>
        </div>
    );
}

function StockIndexSp500() {
    return (
        <div className="sp500">
            <h4><a href="#">S&amp;P지수</a></h4>
            <span className="num">
                <strong className="price nag">3,727.04</strong>
                <p className="changePrice nag">-43.96</p>
                <p className="changeRatio nag">-0.22%</p>
            </span>
            <Line data={dataSp500} options={options} />
        </div>
    );
}

function StockIndexNasdaq() {
    return (
        <div className="nasdaq">
            <h4><a href="#">나스닥지수</a></h4>
            <span className="num">
                <strong className="price nag">12,850.22</strong>
                <p className="changePrice nag">-49.2</p>
                <p className="changeRatio nag">-0.38%</p>
            </span>
            <Line data={dataNasdaq} options={options} />
        </div>
    );
}

// 코스피 차트
const dataKospi = {
    labels: [
        "06/29",
        "06/30",
        "07/01",
        "07/02",
        "07/03",
        "07/06",
        "07/07",
        "07/08",
        "07/09",
        "07/10",
        "07/13",
        "07/14",
        "07/15",
        "07/16",
        "07/17",
        "07/20",
        "07/21",
        "07/22",
        "07/23",
        "07/24",
        "07/27",
        "07/28",
        "07/29",
        "07/30",
        "07/31",
        "08/03",
        "08/04",
        "08/05",
        "08/06",
        "08/07",
        "08/10",
        "08/11",
        "08/12",
        "08/13",
        "08/14",
        "08/18",
        "08/19",
        "08/20",
        "08/21",
        "08/24",
        "08/25",
        "08/26",
        "08/27",
        "08/28",
        "08/31",
        "09/01",
        "09/02",
        "09/03",
        "09/04",
        "09/07",
        "09/08",
        "09/09",
        "09/10",
        "09/11",
        "09/14",
        "09/15",
        "09/16",
        "09/17",
        "09/18",
        "09/21",
        "09/22",
        "09/23",
        "09/24",
        "09/25",
        "09/28",
        "09/29",
        "10/05",
        "10/06",
        "10/07",
        "10/08",
        "10/12",
        "10/13",
        "10/14",
        "10/15",
        "10/16",
        "10/19",
        "10/20",
        "10/21",
        "10/22",
        "10/23",
        "10/26",
        "10/27",
        "10/28",
        "10/29",
        "10/30",
        "11/02",
        "11/03",
        "11/04",
        "11/05",
        "11/06",
        "11/09",
        "11/10",
        "11/11",
        "11/12",
        "11/13",
        "11/16",
        "11/17",
        "11/18",
        "11/19",
        "11/20",
        "11/23",
        "11/24",
        "11/25",
        "11/26",
        "11/27",
        "11/30",
        "12/01",
        "12/02",
        "12/03",
        "12/04",
        "12/07",
        "12/08",
        "12/09",
        "12/10",
        "12/11",
        "12/14",
        "12/15",
        "12/16",
        "12/17",
        "12/18",
        "12/21",
        "12/22",
        "12/23",
        "12/24",
        "12/28",
        "12/29"
      ],
    datasets: [
      {
        data: [
            2093.48,
            2108.33,
            2106.7,
            2135.37,
            2152.41,
            2187.93,
            2164.17,
            2158.88,
            2167.9,
            2150.25,
            2186.06,
            2183.61,
            2201.88,
            2183.76,
            2201.19,
            2198.2,
            2228.83,
            2228.66,
            2216.19,
            2200.44,
            2217.86,
            2256.99,
            2263.16,
            2267.01,
            2249.37,
            2251.04,
            2279.97,
            2311.86,
            2342.61,
            2351.67,
            2386.38,
            2418.67,
            2432.35,
            2437.53,
            2407.49,
            2348.24,
            2360.54,
            2274.22,
            2304.59,
            2329.83,
            2366.73,
            2369.32,
            2344.45,
            2353.8,
            2326.17,
            2349.55,
            2364.37,
            2395.9,
            2368.25,
            2384.22,
            2401.91,
            2375.81,
            2396.48,
            2396.69,
            2427.91,
            2443.58,
            2435.92,
            2406.17,
            2412.4,
            2389.39,
            2332.59,
            2333.24,
            2272.7,
            2278.79,
            2308.08,
            2327.89,
            2358,
            2365.9,
            2386.94,
            2391.96,
            2403.73,
            2403.15,
            2380.48,
            2361.21,
            2341.53,
            2346.74,
            2358.41,
            2370.86,
            2355.05,
            2360.81,
            2343.91,
            2330.84,
            2345.26,
            2326.67,
            2267.15,
            2300.16,
            2343.31,
            2357.32,
            2413.79,
            2416.5,
            2447.2,
            2452.83,
            2485.87,
            2475.62,
            2493.87,
            2543.03,
            2539.15,
            2545.64,
            2547.42,
            2553.5,
            2602.59,
            2617.76,
            2601.54,
            2625.91,
            2633.45,
            2591.34,
            2634.25,
            2675.9,
            2696.22,
            2731.45,
            2745.44,
            2700.93,
            2755.47,
            2746.46,
            2770.06,
            2762.2,
            2756.82,
            2771.79,
            2770.43,
            2772.18,
            2778.65,
            2733.68,
            2759.82,
            2806.86,
            2808.6,
            2820.51
          ],
        fill: true,
        backgroundColor: 'rgba(100, 27, 27, 0.7)',
        borderColor: '#ff4444',
        pointRadius: 0,
      },
    ],
}

// 코스닥 차트
const dataKosdaq = {
    labels: [
        "06/29",
        "06/30",
        "07/01",
        "07/02",
        "07/03",
        "07/06",
        "07/07",
        "07/08",
        "07/09",
        "07/10",
        "07/13",
        "07/14",
        "07/15",
        "07/16",
        "07/17",
        "07/20",
        "07/21",
        "07/22",
        "07/23",
        "07/24",
        "07/27",
        "07/28",
        "07/29",
        "07/30",
        "07/31",
        "08/03",
        "08/04",
        "08/05",
        "08/06",
        "08/07",
        "08/10",
        "08/11",
        "08/12",
        "08/13",
        "08/14",
        "08/18",
        "08/19",
        "08/20",
        "08/21",
        "08/24",
        "08/25",
        "08/26",
        "08/27",
        "08/28",
        "08/31",
        "09/01",
        "09/02",
        "09/03",
        "09/04",
        "09/07",
        "09/08",
        "09/09",
        "09/10",
        "09/11",
        "09/14",
        "09/15",
        "09/16",
        "09/17",
        "09/18",
        "09/21",
        "09/22",
        "09/23",
        "09/24",
        "09/25",
        "09/28",
        "09/29",
        "10/05",
        "10/06",
        "10/07",
        "10/08",
        "10/12",
        "10/13",
        "10/14",
        "10/15",
        "10/16",
        "10/19",
        "10/20",
        "10/21",
        "10/22",
        "10/23",
        "10/26",
        "10/27",
        "10/28",
        "10/29",
        "10/30",
        "11/02",
        "11/03",
        "11/04",
        "11/05",
        "11/06",
        "11/09",
        "11/10",
        "11/11",
        "11/12",
        "11/13",
        "11/16",
        "11/17",
        "11/18",
        "11/19",
        "11/20",
        "11/23",
        "11/24",
        "11/25",
        "11/26",
        "11/27",
        "11/30",
        "12/01",
        "12/02",
        "12/03",
        "12/04",
        "12/07",
        "12/08",
        "12/09",
        "12/10",
        "12/11",
        "12/14",
        "12/15",
        "12/16",
        "12/17",
        "12/18",
        "12/21",
        "12/22",
        "12/23",
        "12/24",
        "12/28",
        "12/29"
      ],
    datasets: [
      {
        data: [
            734.69,
            737.97,
            727.58,
            742.55,
            752.18,
            759.9,
            759.16,
            765.96,
            772.9,
            772.81,
            781.19,
            778.39,
            781.29,
            775.07,
            783.22,
            781.96,
            790.58,
            794.99,
            801.69,
            794.8,
            801.23,
            807.85,
            808.59,
            814.19,
            815.3,
            827.57,
            835.35,
            847.28,
            854.12,
            857.63,
            862.76,
            860.23,
            845.6,
            854.77,
            835.03,
            800.22,
            818.74,
            791.14,
            796.01,
            815.74,
            836.31,
            841.35,
            836.4,
            841.3,
            848.24,
            853.37,
            866.74,
            874.13,
            866.04,
            878.88,
            878.29,
            869.47,
            884.3,
            888.44,
            894.17,
            899.46,
            896.28,
            885.18,
            888.88,
            866.99,
            842.72,
            843.45,
            806.95,
            808.28,
            835.91,
            848.15,
            858.39,
            862.58,
            869.66,
            871.62,
            873.5,
            871.92,
            861.48,
            844.44,
            833.84,
            822.25,
            824.65,
            830.67,
            812.7,
            807.98,
            778.02,
            783.73,
            806.2,
            813.93,
            792.65,
            802.95,
            818.46,
            826.97,
            844.8,
            836.78,
            851.21,
            840.79,
            839.9,
            840.08,
            839.14,
            847.33,
            839.47,
            851.74,
            859.94,
            870.18,
            873.29,
            872.1,
            865.12,
            874.53,
            885.56,
            886.11,
            891.29,
            899.34,
            907.61,
            913.76,
            926.88,
            906.84,
            913.81,
            921.7,
            928.44,
            929.54,
            931.27,
            939.65,
            944.04,
            947.24,
            953.58,
            928.73,
            923.17,
            928.68,
            927,
            957.41
          ],
        fill: true,
        backgroundColor: 'rgba(100, 27, 27, 0.7)',
        borderColor: '#ff4444',
        pointRadius: 0,
      },
    ],
}

// s&p 차트
const dataSp500 = {
    labels: [
        "06/29",
        "06/30",
        "07/01",
        "07/02",
        "07/06",
        "07/07",
        "07/08",
        "07/09",
        "07/10",
        "07/13",
        "07/14",
        "07/15",
        "07/16",
        "07/17",
        "07/20",
        "07/21",
        "07/22",
        "07/23",
        "07/24",
        "07/27",
        "07/28",
        "07/29",
        "07/30",
        "07/31",
        "08/03",
        "08/04",
        "08/05",
        "08/06",
        "08/07",
        "08/10",
        "08/11",
        "08/12",
        "08/13",
        "08/14",
        "08/17",
        "08/18",
        "08/19",
        "08/20",
        "08/21",
        "08/24",
        "08/25",
        "08/26",
        "08/27",
        "08/28",
        "08/31",
        "09/01",
        "09/02",
        "09/03",
        "09/04",
        "09/08",
        "09/09",
        "09/10",
        "09/11",
        "09/14",
        "09/15",
        "09/16",
        "09/17",
        "09/18",
        "09/21",
        "09/22",
        "09/23",
        "09/24",
        "09/25",
        "09/28",
        "09/29",
        "09/30",
        "10/01",
        "10/02",
        "10/05",
        "10/06",
        "10/07",
        "10/08",
        "10/09",
        "10/12",
        "10/13",
        "10/14",
        "10/15",
        "10/16",
        "10/19",
        "10/20",
        "10/21",
        "10/22",
        "10/23",
        "10/26",
        "10/27",
        "10/28",
        "10/29",
        "10/30",
        "11/02",
        "11/03",
        "11/04",
        "11/05",
        "11/06",
        "11/09",
        "11/10",
        "11/11",
        "11/12",
        "11/13",
        "11/16",
        "11/17",
        "11/18",
        "11/19",
        "11/20",
        "11/23",
        "11/24",
        "11/25",
        "11/27",
        "11/30",
        "12/01",
        "12/02",
        "12/03",
        "12/04",
        "12/07",
        "12/08",
        "12/09",
        "12/10",
        "12/11",
        "12/14",
        "12/15",
        "12/16",
        "12/17",
        "12/18",
        "12/21",
        "12/22",
        "12/23",
        "12/24",
        "12/28",
        "12/29"
      ],
    datasets: [
      {
        data: [
            3053.24,
            3100.29,
            3115.86,
            3130.01,
            3179.72,
            3145.32,
            3169.94,
            3152.05,
            3185.04,
            3155.22,
            3197.52,
            3226.56,
            3215.57,
            3224.73,
            3251.84,
            3257.3,
            3276.02,
            3235.66,
            3215.63,
            3239.41,
            3218.44,
            3258.44,
            3246.22,
            3271.12,
            3294.61,
            3306.51,
            3327.77,
            3349.16,
            3351.28,
            3360.47,
            3333.69,
            3380.35,
            3373.43,
            3372.85,
            3381.99,
            3389.78,
            3374.85,
            3385.51,
            3397.16,
            3431.28,
            3443.62,
            3478.73,
            3484.55,
            3508.01,
            3500.31,
            3526.65,
            3580.84,
            3455.06,
            3426.96,
            3331.84,
            3398.96,
            3339.19,
            3340.97,
            3383.54,
            3401.2,
            3385.49,
            3357.01,
            3319.47,
            3281.06,
            3315.57,
            3236.92,
            3246.59,
            3298.46,
            3351.6,
            3335.47,
            3363,
            3380.8,
            3348.44,
            3408.63,
            3360.95,
            3419.45,
            3446.83,
            3477.13,
            3534.22,
            3511.93,
            3488.67,
            3483.34,
            3483.81,
            3426.92,
            3443.12,
            3435.56,
            3453.49,
            3465.39,
            3400.97,
            3390.68,
            3271.03,
            3310.11,
            3269.96,
            3310.24,
            3369.16,
            3443.44,
            3510.45,
            3509.44,
            3550.5,
            3545.53,
            3572.66,
            3537.01,
            3585.15,
            3626.91,
            3609.53,
            3567.79,
            3581.87,
            3557.54,
            3577.59,
            3635.41,
            3629.65,
            3638.35,
            3621.63,
            3662.45,
            3669.01,
            3666.72,
            3699.12,
            3691.96,
            3702.25,
            3672.82,
            3668.1,
            3663.46,
            3647.49,
            3694.62,
            3701.17,
            3722.48,
            3709.41,
            3694.92,
            3687.26,
            3690.01,
            3703.06,
            3735.36,
            3727.04
          ],
        fill: true,
        backgroundColor: 'rgba(23, 166, 255, 0.7)',
        borderColor: '#17a6ff',
        pointRadius: 0,
      },
    ],
}

// 나스닥 차트
const dataNasdaq = {
    labels: [
        "06/29",
        "06/30",
        "07/01",
        "07/02",
        "07/06",
        "07/07",
        "07/08",
        "07/09",
        "07/10",
        "07/13",
        "07/14",
        "07/15",
        "07/16",
        "07/17",
        "07/20",
        "07/21",
        "07/22",
        "07/23",
        "07/24",
        "07/27",
        "07/28",
        "07/29",
        "07/30",
        "07/31",
        "08/03",
        "08/04",
        "08/05",
        "08/06",
        "08/07",
        "08/10",
        "08/11",
        "08/12",
        "08/13",
        "08/14",
        "08/17",
        "08/18",
        "08/19",
        "08/20",
        "08/21",
        "08/24",
        "08/25",
        "08/26",
        "08/27",
        "08/28",
        "08/31",
        "09/01",
        "09/02",
        "09/03",
        "09/04",
        "09/08",
        "09/09",
        "09/10",
        "09/11",
        "09/14",
        "09/15",
        "09/16",
        "09/17",
        "09/18",
        "09/21",
        "09/22",
        "09/23",
        "09/24",
        "09/25",
        "09/28",
        "09/29",
        "09/30",
        "10/01",
        "10/02",
        "10/05",
        "10/06",
        "10/07",
        "10/08",
        "10/09",
        "10/12",
        "10/13",
        "10/14",
        "10/15",
        "10/16",
        "10/19",
        "10/20",
        "10/21",
        "10/22",
        "10/23",
        "10/26",
        "10/27",
        "10/28",
        "10/29",
        "10/30",
        "11/02",
        "11/03",
        "11/04",
        "11/05",
        "11/06",
        "11/09",
        "11/10",
        "11/11",
        "11/12",
        "11/13",
        "11/16",
        "11/17",
        "11/18",
        "11/19",
        "11/20",
        "11/23",
        "11/24",
        "11/25",
        "11/27",
        "11/30",
        "12/01",
        "12/02",
        "12/03",
        "12/04",
        "12/07",
        "12/08",
        "12/09",
        "12/10",
        "12/11",
        "12/14",
        "12/15",
        "12/16",
        "12/17",
        "12/18",
        "12/21",
        "12/22",
        "12/23",
        "12/24",
        "12/28",
        "12/29"
      ],
    datasets: [
      {
        data: [
            9874.15,
            10058.76,
            10154.63,
            10207.63,
            10433.65,
            10343.89,
            10492.5,
            10547.75,
            10617.44,
            10390.84,
            10488.58,
            10550.49,
            10473.83,
            10503.19,
            10767.09,
            10680.36,
            10706.13,
            10461.42,
            10363.18,
            10536.27,
            10402.09,
            10542.94,
            10587.81,
            10745.27,
            10902.8,
            10941.17,
            10998.4,
            11108.07,
            11010.98,
            10968.36,
            10782.82,
            11012.24,
            11042.5,
            11019.3,
            11129.73,
            11210.84,
            11146.46,
            11264.95,
            11311.8,
            11379.72,
            11466.47,
            11665.06,
            11625.34,
            11695.63,
            11775.46,
            11939.67,
            12056.44,
            11458.1,
            11313.13,
            10847.69,
            11141.56,
            10919.59,
            10853.55,
            11056.65,
            11190.32,
            11050.47,
            10910.28,
            10793.28,
            10778.8,
            10963.64,
            10632.99,
            10672.27,
            10913.56,
            11117.52,
            11085.25,
            11167.51,
            11326.51,
            11075.02,
            11332.49,
            11154.6,
            11364.6,
            11420.98,
            11579.94,
            11876.26,
            11863.9,
            11768.73,
            11713.87,
            11671.56,
            11478.88,
            11516.49,
            11484.69,
            11506.01,
            11548.28,
            11358.94,
            11431.35,
            11004.87,
            11185.59,
            10911.59,
            10957.61,
            11160.57,
            11590.78,
            11890.93,
            11895.23,
            11713.78,
            11553.86,
            11786.43,
            11709.59,
            11829.29,
            11924.13,
            11899.34,
            11801.6,
            11904.71,
            11854.97,
            11880.63,
            12037.33,
            12094.4,
            12205.85,
            12198.74,
            12355.11,
            12349.37,
            12377.18,
            12464.23,
            12519.95,
            12582.77,
            12338.95,
            12405.81,
            12377.87,
            12440.04,
            12595.06,
            12658.19,
            12764.75,
            12755.64,
            12742.52,
            12807.92,
            12771.11,
            12804.73,
            12899.42,
            12850.22
          ],
        fill: true,
        backgroundColor: 'rgba(23, 166, 255, 0.7)',
        borderColor: '#17a6ff',
        pointRadius: 0,
      },
    ],
}

// 공통 옵션
const options = {
    scales: {
      xAxes: [
          {
            gridLines:{ // 뒷배경 세로선
                lineWidth: 0,
              },
          }
      ],
      yAxes: [
        {
          position: 'right',
        },
      ],
    },
    legend: { // 캡션
        display: false
    },
}

export { StockIndexKospi, StockIndexKosdaq, StockIndexSp500, StockIndexNasdaq };
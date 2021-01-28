import { Line } from 'react-chartjs-2';

function Home() {
  return (
    <div className="home">
        <div className="notice">
            <div className="inner">
                <h3>국내/해외지수</h3>
                <div className="domestic">
                    <div className="kospi">
                        <h4><a href="#">코스피지수</a></h4>
                        <span className="num">
                            <strong className="price nag">3,069.05</strong>
                            <p className="changePrice nag">53.51</p>
                            <p className="changeRatio nag">-1.71%</p>
                        </span>
                        <Line data={data} options={options} />
                        <dl className="txt">
                            <dt>개인</dt>
                            <dd className="pos">19,414억</dd>
                            <dt>기관</dt>
                            <dd className="pos">6,52억</dd>
                            <dt>외국인</dt>
                            <dd className="nag">-15,501억</dd>
                        </dl>
                    </div>
                    <div className="kosdaq">
                        <h4><a href="#">코스닥지수</a></h4>
                        <span className="num">
                            <strong className="price nag">3,069.05</strong>
                            <p className="changePrice nag">53.51</p>
                            <p className="changeRatio nag">-1.71%</p>
                        </span>
                        <Line data={data} options={options} />
                        <dl className="txt">
                            <dt>개인</dt>
                            <dd className="pos">19,414억</dd>
                            <dt>기관</dt>
                            <dd className="pos">6,52억</dd>
                            <dt>외국인</dt>
                            <dd className="nag">-15,501억</dd>
                        </dl>
                    </div>
                </div>
                <div className="usa">
                    <div className="sp500">
                        <h4><a href="#">S&amp;P지수</a></h4>
                        <span className="num">
                            <strong className="price nag">3,069.05</strong>
                            <p className="changePrice nag">53.51</p>
                            <p className="changeRatio nag">-1.71%</p>
                        </span>
                        <Line data={data} options={options} />
                        <dl className="txt">
                            <dt>개인</dt>
                            <dd className="pos">19,414억</dd>
                            <dt>기관</dt>
                            <dd className="pos">6,52억</dd>
                            <dt>외국인</dt>
                            <dd className="nag">-15,501억</dd>
                        </dl>
                    </div>
                    <div className="nasdaq">
                        <h4><a href="#">나스닥지수</a></h4>
                        <span className="num">
                            <strong className="price nag">3,069.05</strong>
                            <p className="changePrice nag">53.51</p>
                            <p className="changeRatio nag">-1.71%</p>
                        </span>
                        <Line data={data} options={options} />
                        <dl className="txt">
                            <dt>개인</dt>
                            <dd className="pos">19,414억</dd>
                            <dt>기관</dt>
                            <dd className="pos">6,52억</dd>
                            <dt>외국인</dt>
                            <dd className="nag">-15,501억</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

export default Home;

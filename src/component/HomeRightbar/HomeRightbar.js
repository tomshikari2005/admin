import React from 'react'
import './HomeRightbar.css'
import Navbar from '../Navbar'
import { AreaChart, Area, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, } from 'recharts';

function HomeRightbar() {
  // Progrress Chart
  const data = [
    {
      "name": "Page A",
      "pv": 2400,
    },
    {
      "name": "Page B",
      "pv": 1398,
    },
    {
      "name": "Page C",
      "pv": 3800,
    },
    {
      "name": "Page D",
      "pv": 2908,
    },
    {
      "name": "Page E",
      "pv": 4800,
    },
    {
      "name": "Page F",
      "pv": 3800,
    },
    {
      "name": "Page G",
      "pv": 4300,

    },
    {
      "name": "Page H",
      "pv": 2400,
    },
    {
      "name": "Page I",
      "pv": 1398,
    },
    {
      "name": "Page J",
      "pv": 9800,
    },
    {
      "name": "Page K",
      "pv": 3908,
    },
    {
      "name": "Page L",
      "pv": 4800,
    },
    {
      "name": "Page M",
      "pv": 2300,
    },
    {
      "name": "Page N",
      "pv": 4300,

    }
  ]

  // Task Chart
  const data2 = [
    {
      "name": "Jan",
      "Task_pending": 7000,
      "Task_completed": 5600,
      "amt": 2400
    },
    {
      "name": "Feb",
      "Task_pending": 3000,
      "Task_completed": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "Task_pending": 7000,
      "Task_completed": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "Task_pending": 4580,
      "Task_completed": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "Task_pending": 4090,
      "Task_completed": 7800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "Task_pending": 2390,
      "Task_completed": 3800,
      "amt": 2500
    },
    {
      "name": "Jul",
      "Task_pending": 7890,
      "Task_completed": 4300,
      "amt": 2100
    },
    {
      "name": "Aug",
      "Task_pending": 2000,
      "Task_completed": 1800,
      "amt": 2290
    },
    {
      "name": "Sep",
      "Task_pending": 4580,
      "Task_completed": 3908,
      "amt": 2000
    },
    {
      "name": "Oct",
      "Task_pending": 4090,
      "Task_completed": 7800,
      "amt": 2181
    },
    {
      "name": "Nov",
      "Task_pending": 2390,
      "Task_completed": 3800,
      "amt": 2500
    },
    {
      "name": "Dec",
      "Task_pending": 7890,
      "Task_completed": 4300,
      "amt": 2100
    }
  ]

  //Attendance Overview

  const data3 = [
    {
      name: 'Jan',
      Gain: 855,
      Loss: 1500,
      amt: 2355,
    },
    {
      name: 'Feb',
      Gain: 3000,
      Loss: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      Gain: 9800,
      Loss: 2000,
      amt: 2290,
    },
    {
      name: 'Apr',
      Gain: 3908,
      Loss: 2805,
      amt: 2000,
    },
    {
      name: 'May',
      Gain: 4800,
      Loss: 2550,
      amt: 2181,
    },
    {
      name: 'Jun',
      Gain: 2390,
      Loss: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      Gain: 4930,
      Loss: 2000,
      amt: 2100,
    },
    {
      name: 'Aug',
      Gain: 9800,
      Loss: 2000,
      amt: 2290,
    },
    {
      name: 'Sep',
      Gain: 3780,
      Loss: 3908,
      amt: 2000,
    },
    {
      name: 'Oct',
      Gain: 4890,
      Loss: 800,
      amt: 2181,
    },
    {
      name: 'Nov',
      Gain: 600,
      Loss: 2800,
      amt: 2355,
    },
    {
      name: 'Dec',
      Gain: 100,
      Loss: 2255,
      amt: 2355,
    },
  ];
  // pie Chart
  const data5 = [
    {
      subject: 'AI',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Sales',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'EV',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Marketting',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Research',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Purchasing',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  // pie chart end


  return (
    <div className='mainHomeRightbar'>
      <Navbar />

      <div className='container'>
        <div className='row mt-5'>
          <div className='col-12 col-md-4 m-0 p-0'>
            <div className='itemsContainer1'>
              <div className='items'>
                <div className='itemContainerIcon'>
                  <i class="bi bi-person-circle fs-3"></i>
                </div>
                <div>
                  <h4 className='taskCounter' >2355</h4>
                  <p className='totalEmployee'>Total Employees</p>
                </div>
              </div>
              <div className='itemsRight'>
                <div className='areaChartContainer'>
                  <AreaChart width={182} height={70} data={data}
                  >
                    <defs>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0e984a" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#167839" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                  </AreaChart>
                </div>
                <div className='growth'>
                  <div className='growthItem'>
                    <p>36.6%</p>
                    <i class="bi bi-box-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4 m-0 p-0'>
            <div className='itemsContainer1'>
              <div className='items'>
                <div className='itemContainerIcon'>
                  <i class="bi bi-coin fs-3"></i>
                </div>
                <div>
                  <h4 className='taskCounter' >110 CR</h4>
                  <p className='totalEmployee pe-3'>Gross Salary</p>
                </div>
              </div>
              <div className='itemsRight'>
                <div className='areaChartContainer'>
                  <AreaChart width={182} height={70} data={data}
                  >
                    <defs>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0e984a" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#167839" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                  </AreaChart>
                </div>
                <div className='growth'>
                  <div className='growthItem'>
                    <p>24.6%</p>
                    <i class="bi bi-box-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-4 m-0 p-0'>
            <div className='itemsContainer1'>
              <div className='items'>
                <div className='itemContainerIcon'>
                  <i class="bi bi-universal-access-circle fs-3"></i>
                </div>
                <div>
                  <h4 className='taskCounter' >2.7K</h4>
                  <p className='totalEmployee'>Job Application</p>
                </div>
              </div>
              <div className='itemsRight'>
                <div className='areaChartContainer'>
                  <AreaChart width={182} height={70} data={data}
                  >
                    <defs>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0e984a" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#167839" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Tooltip />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                  </AreaChart>
                </div>
                <div className='growth'>
                  <div className='growthItem'>
                    <p>2.8%</p>
                    <i class="bi bi-box-arrow-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-12'>
            <div className='itemsContainer2'>
              <div className='itemsTitle'>
                <h4 >Task Pending vs Task Completed 2023</h4>
              </div>
              <LineChart width={1280} height={188} data={data2}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Task_pending" stroke="#f14f4c" />
                <Line type="monotone" dataKey="Task_completed" stroke="#f16e16" />
              </LineChart>
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-12 col-sm-8'>
            <div className='itemContainer3 monthlyEarning'>
              <div className='seitemsTitle'>
                <h5>Monthly Earning Performance</h5>
              </div>
              <ResponsiveContainer width="100%" height="86%">
                <BarChart
                  width={200}
                  height={400}
                  data={data3}
                  margin={{
                    top: 2,
                    right: 30,
                    left: 5,
                    bottom: 6,
                  }}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Gain" stackId="a" fill="#f16e16" />
                  <Bar dataKey="Loss" stackId="a" fill="#f56262" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='col-12 col-sm-4'>
            <div className='itemContainer3 taskchart'>
              <div className='seitemsTitle'>
                <h5>Team Performance This Week</h5>
              </div>
              <ResponsiveContainer width="100%" height="90%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data5}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <Radar name="Mike" dataKey="A" stroke="#f56262" fill="#f16e16" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="itemContainer4">
              <div className='seitemsTitle'>
                <h5>Top Performance Employees</h5>
              </div>
              <div className="itemContainerList">
                <div className="itemContainerListItem">
                  <img src="img/1.jpg" alt="" />
                  <h5>Ajae Sno</h5>
                  <p>90%</p>
                </div>
                <div className="itemContainerListItem">
                  <img src="img/2.jpg" alt="" />
                  <h5>Arya Stark</h5>
                  <p>82%</p>
                </div>
                <div className="itemContainerListItem">
                  <img src="img/3.jpg" alt="" />
                  <h5>Robert Aj</h5>
                  <p>80%</p>
                </div>
                <div className="itemContainerListItem">
                  <img src="img/4.jpg" alt="" />
                  <h5>Bolton Ramy</h5>
                  <p>79%</p>
                </div>
                <div className="itemContainerListItem">
                  <img src="img/5.jpg" alt="" />
                  <h5>Catty Tuly</h5>
                  <p>73%</p>
                </div>
                <div className="itemContainerListItem">
                  <img src="img/6.jpg" alt="" />
                  <h5>Jorah Mok</h5>
                  <p>71%</p>
                </div>
                <div className="itemContainerListItem">
                  <img src="img/7.jpg" alt="" />
                  <h5>Olena Gray</h5>
                  <p>67%</p>
                </div>
                <div className="itemContainerListItem">
                  <img src="img/8.jpg" alt="" />
                  <h5>Zara Leo</h5>
                  <p>90%</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRightbar
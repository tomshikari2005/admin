import React from 'react'
import './Report.css'
import Navbar from './Navbar'
import DataTable from 'react-data-table-component'



function Report() {
     const columns = [
        {
            name:'ID',
            selector: row => row.id
        },
        {
            name: 'Leader',
            selector: row => row.leader
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name:'Project Name',
            selector: row => row.projectname
        },
        {
            name:'Date',
            selector: row => row.date
        },
        {
            name:'Status',
            selector: row => row.status
        }
     ];
     const data = [
        {
        id:'1',
        leader:'Jon Snow',
        email:'jonsnow11@gmail.com',
        projectname:'DataPulse Platform',
        date:'20/2/2024',
        status:'Ongoing',
        },
        {
            id:'2',
            leader:'Arya Stark',
            email:'aryastark@gmail.com',
            projectname:'CyberSphere Solutions',
            date:'12/2/2024',
            status:'Ongoing',
            },
            {
                id:'3',
                leader:'Ramsay Bolton',
                email:'ramsaybolton@gmail.com',
                projectname:'VirtuSync Solutions',
                date:'25/2/2024',
                status:'Ongoing',
            },
     ];
     const data2 = [
        {
        id:'1',
        leader:'Robin Arryn',
        email:'robinarryn11@gmail.com',
        projectname:'TechTrailblaze Hub',
        date:'20/3/2024',
        status:'Upcoming',
        },
        {
            id:'2',
            leader:'Sandor Clegane',
            email:'sandorclegane@gmail.com',
            projectname:'InfinitiSync Solutions',
            date:'25/3/2024',
            status:'Upcoming',
            },
            {
                id:'3',
                leader:'Theon Greyjoy',
                email:'theongreyjoy@gmail.com',
                projectname:'CogniCraft Innovations',
                date:'27/3/2024',
                status:'Upcoming',
                },
            


     ];
     const data3 = [
        {
        id:'1',
        leader:'Jon Snow',
        email:'jonsnow11@gmail.com',
        projectname:'DataPulse Platform',
        date:'22/1/2024',
        status:'Completed',
        },
        {
            id:'2',
            leader:'Tyrion Lannister',
            email:'tyrionlannister@gmail.com',
            projectname:'PixelFusion Dynamics',
            date:'12/1/2024',
            status:'Completed',
            },
            {
                id:'3',
                leader:'Samwell Tarly',
                email:'samwelltarly@gmail.com',
                projectname:'NexGen CyberHub',
                date:'20/12/2023',
                status:'Completed',
                },
            


     ];
    return (
            <div className='main'>
            <Navbar/>
                <div className='container'>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="card1">
                            <div className='title'>
                                <h3 className='text-center'>Ongoing Projects</h3>

                            </div>
                            <DataTable
                            columns={columns}
                            data={data}
                            >
                            </DataTable>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="card1">
                            <div className='title'>
                                <h3 className='text-center'>Upcoming Projects</h3>

                            </div>
                            <DataTable
                            columns={columns}
                            data={data2}
                            >
                            </DataTable>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="card1">
                            <div className='title'>
                                <h3 className='text-center'>Completed Projects</h3>

                            </div>
                            <DataTable
                            columns={columns}
                            data={data3}
                            >
                            </DataTable>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Report
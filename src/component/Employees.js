import React from 'react'
import './Employees.css'
import Navbar from './Navbar'
import { DataGrid } from '@mui/x-data-grid';


function Employees() {


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 120 },
    { field: 'lastName', headerName: 'Last name', width: 120 },
    { field: 'job', headerName: 'Job', width: 100 },
    { field: 'skill', headerName: 'Skill', width: 190 },
    { field: 'dob', headerName: 'Dob', width:100},
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'add', headerName: 'Add', width:130},
    {
      field: 'action',
      headerName: 'ACtive',
      width: 100,
      renderCell:(params) =>{
        return(
          <button className='btn btn-secondary userListEdit'>Edit</button>
        )
      }
    },
  ];

  const rows = [
    {
      "id": 1,
      "lastName": "Snow",
      "firstName": "Jon",
      "age": 35,
      "job": "Developer",
      "skill": "React",
      "dob": "12/04/2003",
      "add": "Kolkata"
    },
    {
      "id": 2,
      "lastName": "Stark",
      "firstName": "Arya",
      "age": 28,
      "job": "Designer",
      "skill": "UI/UX Design",
      "dob": "09/30/1996",
      "add": "Mumbai"
    },
    {
      "id": 3,
      "lastName": "Lannister",
      "firstName": "Tyrion",
      "age": 45,
      "job": "Developer",
      "skill": "Python",
      "dob": "11/22/1979",
      "add": "Delhi"
    },
    {
      "id": 4,
      "lastName": "Targaryen",
      "firstName": "Daenerys",
      "age": 32,
      "job": "Developer",
      "skill": "Java",
      "dob": "05/12/1992",
      "add": "Chennai"
    },
    {
      "id": 5,
      "lastName": "Baratheon",
      "firstName": "Robert",
      "age": 27,
      "job": "Marketing",
      "skill": "Digital Marketing",
      "dob": "08/17/1997",
      "add": "Bangalore"
    },
    {
      "id": 6,
      "lastName": "Greyjoy",
      "firstName": "Theon",
      "age": 34,
      "job": "HR",
      "skill": "Recruitment",
      "dob": "03/11/1990",
      "add": "Hyderabad"
    },
    {
      "id": 7,
      "lastName": "Martell",
      "firstName": "Ellaria",
      "age": 39,
      "job": "Backend",
      "skill": "Node.js",
      "dob": "07/08/1985",
      "add": "Pune"
    },
    {
      "id": 8,
      "lastName": "Tyrell",
      "firstName": "Margaery",
      "age": 50,
      "job": "Tester",
      "skill": "Manual Testing",
      "dob": "04/15/1974",
      "add": "Jaipur"
    },
    {
      "id": 9,
      "lastName": "Bolton",
      "firstName": "Ramsay",
      "age": 26,
      "job": "Developer",
      "skill": "C#",
      "dob": "01/25/1998",
      "add": "Lucknow"
    },
    {
      "id": 10,
      "lastName": "Arryn",
      "firstName": "Robin",
      "age": 31,
      "job": "Developer",
      "skill": "Angular",
      "dob": "06/05/1993",
      "add": "Ahmedabad"
    },
    {
      "id": 11,
      "lastName": "Clegane",
      "firstName": "Sandor",
      "age": 42,
      "job": "Developer",
      "skill": "JavaScript",
      "dob": "08/20/1982",
      "add": "Mysore"
    },
    {
      "id": 12,
      "lastName": "Tully",
      "firstName": "Catelyn",
      "age": 38,
      "job": "Designer",
      "skill": "Graphic Design",
      "dob": "03/27/1986",
      "add": "Chandigarh"
    },
    {
      "id": 13,
      "lastName": "Tarly",
      "firstName": "Samwell",
      "age": 29,
      "job": "Developer",
      "skill": "Ruby on Rails",
      "dob": "11/14/1995",
      "add": "Coimbatore"
    },
    {
      "id": 14,
      "lastName": "Mormont",
      "firstName": "Jorah",
      "age": 48,
      "job": "Marketing",
      "skill": "Content Marketing",
      "dob": "06/01/1976",
      "add": "Visakhapatnam"
    },
    {
      "id": 15,
      "lastName": "Seaworth",
      "firstName": "Davos",
      "age": 36,
      "job": "HR",
      "skill": "Employee Relations",
      "dob": "10/05/1988",
      "add": "Guwahati"
    },
    {
      "id": 16,
      "lastName": "Redwyne",
      "firstName": "Olenna",
      "age": 55,
      "job": "Marketing",
      "skill": "Social Media Management",
      "dob": "02/12/1969",
      "add": "Kochi"
    },
    {
      "id": 17,
      "lastName": "Greyjoy",
      "firstName": "Yara",
      "age": 29,
      "job": "Developer",
      "skill": "PHP",
      "dob": "09/23/1995",
      "add": "Nagpur"
    },
    {
      "id": 18,
      "lastName": "Tully",
      "firstName": "Edmure",
      "age": 33,
      "job": "Backend",
      "skill": "Django",
      "dob": "07/17/1991",
      "add": "Patna"
    },
    {
      "id": 19,
      "lastName": "Clegane",
      "firstName": "Gregor",
      "age": 47,
      "job": "Developer",
      "skill": "Ruby",
      "dob": "04/26/1977",
      "add": "Surat"
    },
    {
      "id": 20,
      "lastName": "Baelish",
      "firstName": "Petyr",
      "age": 40,
      "job": "Tester",
      "skill": "Automated Testing",
      "dob": "12/03/1984",
      "add": "Varanasi"
    },
    {
      "id": 21,
      "lastName": "Stark",
      "firstName": "Robb",
      "age": 30,
      "job": "Developer",
      "skill": "SQL",
      "dob": "05/25/1994",
      "add": "Jaipur"
    },
    {
      "id": 22,
      "lastName": "Martell",
      "firstName": "Doran",
      "age": 41,
      "job": "Designer",
      "skill": "Illustration",
      "dob": "08/15/1983",
      "add": "Kanpur"
    },
    {
      "id": 23,
      "lastName": "Tarly",
      "firstName": "Dickon",
      "age": 27,
      "job": "Developer",
      "skill": "Vue.js",
      "dob": "02/19/1997",
      "add": "Thiruvananthapuram"
    },
    {
      "id": 24,
      "lastName": "Baratheon",
      "firstName": "Stannis",
      "age": 44,
      "job": "HR",
      "skill": "Training and Development",
      "dob": "10/10/1980",
      "add": "Ranchi"
    },
    {
      "id": 25,
      "lastName": "Lannister",
      "firstName": "Jaime",
      "age": 39,
      "job": "Backend",
      "skill": "ASP.NET",
      "dob": "09/30/1985",
      "add": "Lucknow"
    },
    {
      "id": 26,
      "lastName": "Greyjoy",
      "firstName": "Euron",
      "age": 38,
      "job": "Marketing",
      "skill": "Brand Management",
      "dob": "07/03/1986",
      "add": "Guwahati"
    },
    {
      "id": 27,
      "lastName": "Tyrell",
      "firstName": "Loras",
      "age": 34,
      "job": "HR",
      "skill": "Performance Management",
      "dob": "04/08/1990",
      "add": "Kolkata"
    },
    {
      "id": 28,
      "lastName": "Bolton",
      "firstName": "Roose",
      "age": 48,
      "job": "Backend",
      "skill": "Spring Boot",
      "dob": "11/17/1976",
      "add": "Visakhapatnam"
    },
    {
      "id": 29,
      "lastName": "Arryn",
      "firstName": "Lysa",
      "age": 29,
      "job": "Developer",
      "skill": "Swift",
      "dob": "03/28/1995",
      "add": "Mumbai"
    },
    {
      "id": 30,
      "lastName": "Targaryen",
      "firstName": "Viserys",
      "age": 37,
      "job": "Tester",
      "skill": "Selenium",
      "dob": "08/06/1987",
      "add": "Chennai"
    },
    {
      "id": 31,
      "lastName": "Stark",
      "firstName": "Sansa",
      "age": 26,
      "job": "Developer",
      "skill": "Docker",
      "dob": "09/15/1998",
      "add": "Pune"
    },
    {
      "id": 32,
      "lastName": "Martell",
      "firstName": "Oberyn",
      "age": 45,
      "job": "Designer",
      "skill": "3D Modeling",
      "dob": "06/30/1979",
      "add": "Hyderabad"
    },
    {
      "id": 33,
      "lastName": "Tully",
      "firstName": "Brynden",
      "age": 35,
      "job": "Developer",
      "skill": "Laravel",
      "dob": "01/02/1989",
      "add": "Ahmedabad"
    },
    {
      "id": 34,
      "lastName": "Baratheon",
      "firstName": "Renly",
      "age": 32,
      "job": "Marketing",
      "skill": "SEO",
      "dob": "04/05/1992",
      "add": "Bangalore"
    },
    {
      "id": 35,
      "lastName": "Lannister",
      "firstName": "Cersei",
      "age": 37,
      "job": "HR",
      "skill": "Conflict Resolution",
      "dob": "11/17/1987",
      "add": "Jaipur"
    },
    {
      "id": 36,
      "lastName": "Greyjoy",
      "firstName": "Victarion",
      "age": 39,
      "job": "Developer",
      "skill": "Ruby on Rails",
      "dob": "03/21/1985",
      "add": "Kochi"
    },
    {
      "id": 37,
      "lastName": "Tyrell",
      "firstName": "Mace",
      "age": 48,
      "job": "Backend",
      "skill": "Spring",
      "dob": "06/13/1976",
      "add": "Guwahati"
    },
    {
      "id": 38,
      "lastName": "Bolton",
      "firstName": "Walder",
      "age": 31,
      "job": "Tester",
      "skill": "Load Testing",
      "dob": "02/28/1993",
      "add": "Lucknow"
    },
    {
      "id": 39,
      "lastName": "Arryn",
      "firstName": "Robert",
      "age": 34,
      "job": "Developer",
      "skill": "Go",
      "dob": "09/09/1990",
      "add": "Chennai"
    },
    {
      "id": 40,
      "lastName": "Targaryen",
      "firstName": "Rhaegar",
      "age": 27,
      "job": "Marketing",
      "skill": "Email Marketing",
      "dob": "12/27/1997",
      "add": "Kolkata"
    },
    {
      "id": 41,
      "lastName": "Stark",
      "firstName": "Rickon",
      "age": 29,
      "job": "Developer",
      "skill": "MongoDB",
      "dob": "10/15/1995",
      "add": "Mumbai"
    },
    {
      "id": 42,
      "lastName": "Martell",
      "firstName": "Trystane",
      "age": 36,
      "job": "Designer",
      "skill": "Motion Graphics",
      "dob": "07/23/1988",
      "add": "Delhi"
    },
    {
      "id": 43,
      "lastName": "Tully",
      "firstName": "Hoster",
      "age": 50,
      "job": "Developer",
      "skill": "Scala",
      "dob": "04/10/1974",
      "add": "Chandigarh"
    },
    {
      "id": 44,
      "lastName": "Baratheon",
      "firstName": "Joffrey",
      "age": 25,
      "job": "Marketing",
      "skill": "PPC Advertising",
      "dob": "11/29/1999",
      "add": "Jaipur"
    },
    {
      "id": 45,
      "lastName": "Lannister",
      "firstName": "Tyrion",
      "age": 38,
      "job": "HR",
      "skill": "Employee Engagement",
      "dob": "05/22/1986",
      "add": "Ahmedabad"
    },
    {
      "id": 46,
      "lastName": "Greyjoy",
      "firstName": "Aeron",
      "age": 33,
      "job": "Developer",
      "skill": "Ruby",
      "dob": "08/08/1991",
      "add": "Lucknow"
    },
    {
      "id": 47,
      "lastName": "Tyrell",
      "firstName": "Willas",
      "age": 28,
      "job": "Backend",
      "skill": "Flask",
      "dob": "03/14/1996",
      "add": "Bangalore"
    },
    {
      "id": 48,
      "lastName": "Bolton",
      "firstName": "Domeric",
      "age": 30,
      "job": "Tester",
      "skill": "API Testing",
      "dob": "12/19/1994",
      "add": "Chennai"
    },
    {
      "id": 49,
      "lastName": "Arryn",
      "firstName": "Jon",
      "age": 39,
      "job": "Developer",
      "skill": "Vue.js",
      "dob": "10/09/1985",
      "add": "Kolkata"
    },
    {
      "id": 50,
      "lastName": "Targaryen",
      "firstName": "Aegon",
      "age": 34,
      "job": "Marketing",
      "skill": "Influencer Marketing",
      "dob": "07/07/1990",
      "add": "Pune"
    },
    {
      "id": 51,
      "lastName": "Stark",
      "firstName": "Bran",
      "age": 27,
      "job": "Developer",
      "skill": "GraphQL",
      "dob": "09/03/1997",
      "add": "Mysore"
    },
    {
      "id": 52,
      "lastName": "Martell",
      "firstName": "Elia",
      "age": 42,
      "job": "Designer",
      "skill": "Typography",
      "dob": "04/20/1982",
      "add": "Jaipur"
    },
    {
      "id": 53,
      "lastName": "Tully",
      "firstName": "Lysa",
      "age": 32,
      "job": "Developer",
      "skill": "React Native",
      "dob": "11/05/1992",
      "add": "Chennai"
    },
    {
      "id": 54,
      "lastName": "Baratheon",
      "firstName": "Myrcella",
      "age": 29,
      "job": "Marketing",
      "skill": "Social Media Advertising",
      "dob": "02/14/1995",
      "add": "Delhi"
    },
    {
      "id": 55,
      "lastName": "Lannister",
      "firstName": "Tywin",
      "age": 48,
      "job": "HR",
      "skill": "Leadership Development",
      "dob": "06/30/1976",
      "add": "Mumbai"
    },
    {
      "id": 56,
      "lastName": "Greyjoy",
      "firstName": "Balon",
      "age": 44,
      "job": "Developer",
      "skill": "Express.js",
      "dob": "03/12/1980",
      "add": "Hyderabad"
    },
    {
      "id": 57,
      "lastName": "Tyrell",
      "firstName": "Garlan",
      "age": 36,
      "job": "Backend",
      "skill": "ASP.NET Core",
      "dob": "10/18/1988",
      "add": "Kolkata"
    },
    {
      "id": 58,
      "lastName": "Bolton",
      "firstName": "Bethany",
      "age": 29,
      "job": "Tester",
      "skill": "Performance Testing",
      "dob": "05/07/1995",
      "add": "Pune"
    },
    {
      "id": 59,
      "lastName": "Arryn",
      "firstName": "Alayne",
      "age": 31,
      "job": "Developer",
      "skill": "Django",
      "dob": "08/29/1993",
      "add": "Chandigarh"
    },
    {
      "id": 60,
      "lastName": "Targaryen",
      "firstName": "Rhaella",
      "age": 35,
      "job": "Marketing",
      "skill": "Content Creation",
      "dob": "01/21/1989",
      "add": "Jaipur"
    },
    {
      "id": 61,
      "lastName": "Stark",
      "firstName": "Lyanna",
      "age": 33,
      "job": "Developer",
      "skill": "AngularJS",
      "dob": "06/02/1991",
      "add": "Bangalore"
    },
    {
      "id": 62,
      "lastName": "Martell",
      "firstName": "Obara",
      "age": 30,
      "job": "Designer",
      "skill": "User Interface Design",
      "dob": "09/10/1994",
      "add": "Delhi"
    },
    {
      "id": 63,
      "lastName": "Tully",
      "firstName": "Brynden",
      "age": 29,
      "job": "Developer",
      "skill": "Spring Boot",
      "dob": "12/28/1995",
      "add": "Mumbai"
    },
    {
      "id": 64,
      "lastName": "Baratheon",
      "firstName": "Shireen",
      "age": 28,
      "job": "Marketing",
      "skill": "Copywriting",
      "dob": "07/11/1996",
      "add": "Chennai"
    },
    {
      "id": 65,
      "lastName": "Lannister",
      "firstName": "Kevan",
      "age": 32,
      "job": "HR",
      "skill": "Talent Acquisition",
      "dob": "04/05/1992",
      "add": "Pune"
    },
    {
      "id": 66,
      "lastName": "Greyjoy",
      "firstName": "Asha",
      "age": 29,
      "job": "Developer",
      "skill": "Flutter",
      "dob": "11/17/1995",
      "add": "Hyderabad"
    },
    {
      "id": 67,
      "lastName": "Tyrell",
      "firstName": "Margaery",
      "age": 34,
      "job": "Backend",
      "skill": "Django",
      "dob": "08/28/1990",
      "add": "Mumbai"
    },
    {
      "id": 68,
      "lastName": "Bolton",
      "firstName": "Domeric",
      "age": 37,
      "job": "Tester",
      "skill": "Jenkins",
      "dob": "05/09/1987",
      "add": "Delhi"
    },
    {
      "id": 69,
      "lastName": "Arryn",
      "firstName": "Yohn",
      "age": 41,
      "job": "Developer",
      "skill": "Ruby",
      "dob": "02/14/1983",
      "add": "Bangalore"
    },
    {
      "id": 70,
      "lastName": "Targaryen",
      "firstName": "Rhaegar",
      "age": 38,
      "job": "Marketing",
      "skill": "Google Ads",
      "dob": "03/29/1986",
      "add": "Chennai"
    },
    {
      "id": 71,
      "lastName": "Stark",
      "firstName": "Benjen",
      "age": 36,
      "job": "Developer",
      "skill": "Ruby on Rails",
      "dob": "09/19/1988",
      "add": "Jaipur"
    },
    {
      "id": 72,
      "lastName": "Martell",
      "firstName": "Nymeria",
      "age": 31,
      "job": "Designer",
      "skill": "Motion Design",
      "dob": "04/14/1993",
      "add": "Pune"
    },
    {
      "id": 73,
      "lastName": "Tully",
      "firstName": "Catelyn",
      "age": 45,
      "job": "Developer",
      "skill": "React Native",
      "dob": "12/03/1979",
      "add": "Hyderabad"
    },
    {
      "id": 74,
      "lastName": "Baratheon",
      "firstName": "Tommen",
      "age": 33,
      "job": "Marketing",
      "skill": "Social Media Management",
      "dob": "07/19/1991",
      "add": "Delhi"
    },
    {
      "id": 75,
      "lastName": "Lannister",
      "firstName": "Cersei",
      "age": 40,
      "job": "HR",
      "skill": "Employee Relations",
      "dob": "05/22/1984",
      "add": "Mumbai"
    },
    {
      "id": 76,
      "lastName": "Greyjoy",
      "firstName": "Euron",
      "age": 37,
      "job": "Developer",
      "skill": "Node.js",
      "dob": "08/05/1987",
      "add": "Chennai"
    },
    {
      "id": 77,
      "lastName": "Tyrell",
      "firstName": "Loras",
      "age": 29,
      "job": "Backend",
      "skill": "MongoDB",
      "dob": "06/02/1995",
      "add": "Delhi"
    },
    {
      "id": 78,
      "lastName": "Bolton",
      "firstName": "Ramsay",
      "age": 32,
      "job": "Tester",
      "skill": "Selenium",
      "dob": "10/20/1992",
      "add": "Mumbai"
    },
    {
      "id": 79,
      "lastName": "Arryn",
      "firstName": "Jon",
      "age": 38,
      "job": "Developer",
      "skill": "React",
      "dob": "04/16/1986",
      "add": "Kolkata"
    },
    {
      "id": 80,
      "lastName": "Targaryen",
      "firstName": "Viserys",
      "age": 40,
      "job": "Marketing",
      "skill": "Email Marketing",
      "dob": "12/25/1984",
      "add": "Pune"
    },
    {
      "id": 81,
      "lastName": "Stark",
      "firstName": "Rickon",
      "age": 26,
      "job": "Developer",
      "skill": "Vue.js",
      "dob": "09/01/1998",
      "add": "Chennai"
    },
    {
      "id": 82,
      "lastName": "Martell",
      "firstName": "Arianne",
      "age": 29,
      "job": "Designer",
      "skill": "Graphic Design",
      "dob": "05/30/1995",
      "add": "Mumbai"
    },
    {
      "id": 83,
      "lastName": "Tully",
      "firstName": "Edmure",
      "age": 34,
      "job": "Developer",
      "skill": "Python",
      "dob": "02/17/1990",
      "add": "Bangalore"
    },
    {
      "id": 84,
      "lastName": "Baratheon",
      "firstName": "Stannis",
      "age": 31,
      "job": "Marketing",
      "skill": "Content Creation",
      "dob": "07/12/1993",
      "add": "Kolkata"
    },
    {
      "id": 85,
      "lastName": "Lannister",
      "firstName": "Jaime",
      "age": 35,
      "job": "HR",
      "skill": "Training and Development",
      "dob": "11/25/1989",
      "add": "Delhi"
    },
    {
      "id": 86,
      "lastName": "Greyjoy",
      "firstName": "Aeron",
      "age": 28,
      "job": "Developer",
      "skill": "React Native",
      "dob": "10/14/1996",
      "add": "Hyderabad"
    },
    {
      "id": 87,
      "lastName": "Tyrell",
      "firstName": "Olenna",
      "age": 42,
      "job": "Backend",
      "skill": "Node.js",
      "dob": "05/07/1982",
      "add": "Pune"
    },
    {
      "id": 88,
      "lastName": "Bolton",
      "firstName": "Walda",
      "age": 33,
      "job": "Tester",
      "skill": "Automated Testing",
      "dob": "08/18/1991",
      "add": "Chandigarh"
    },
    {
      "id": 89,
      "lastName": "Arryn",
      "firstName": "Robin",
      "age": 30,
      "job": "Developer",
      "skill": "Java",
      "dob": "11/05/1994",
      "add": "Mumbai"
    },
    {
      "id": 90,
      "lastName": "Targaryen",
      "firstName": "Daenerys",
      "age": 27,
      "job": "Marketing",
      "skill": "Social Media Marketing",
      "dob": "07/31/1997",
      "add": "Delhi"
    },
    {
      "id": 91,
      "lastName": "Stark",
      "firstName": "Arya",
      "age": 29,
      "job": "Developer",
      "skill": "Angular",
      "dob": "03/27/1993",
      "add": "Chennai"
    },
    {
      "id": 92,
      "lastName": "Martell",
      "firstName": "Doran",
      "age": 44,
      "job": "Designer",
      "skill": "UX/UI Design",
      "dob": "12/06/1980",
      "add": "Mumbai"
    },
    {
      "id": 93,
      "lastName": "Tully",
      "firstName": "Brynden",
      "age": 35,
      "job": "Developer",
      "skill": "Spring Boot",
      "dob": "09/12/1989",
      "add": "Bangalore"
    },
    {
      "id": 94,
      "lastName": "Baratheon",
      "firstName": "Renly",
      "age": 32,
      "job": "Marketing",
      "skill": "SEO",
      "dob": "06/19/1992",
      "add": "Kolkata"
    },
    {
      "id": 95,
      "lastName": "Lannister",
      "firstName": "Tyrion",
      "age": 38,
      "job": "HR",
      "skill": "Employee Relations",
      "dob": "01/11/1986",
      "add": "Delhi"
    },
    {
      "id": 96,
      "lastName": "Greyjoy",
      "firstName": "Theon",
      "age": 31,
      "job": "Developer",
      "skill": "Vue.js",
      "dob": "08/21/1993",
      "add": "Mumbai"
    },
    {
      "id": 97,
      "lastName": "Tyrell",
      "firstName": "Mace",
      "age": 46,
      "job": "Backend",
      "skill": "Java",
      "dob": "05/04/1978",
      "add": "Bangalore"
    },
    {
      "id": 98,
      "lastName": "Bolton",
      "firstName": "Roose",
      "age": 40,
      "job": "Tester",
      "skill": "Load Testing",
      "dob": "10/11/1984",
      "add": "Chennai"
    },
    {
      "id": 99,
      "lastName": "Arryn",
      "firstName": "Yohn",
      "age": 39,
      "job": "Developer",
      "skill": "Python",
      "dob": "04/05/1985",
      "add": "Kolkata"
    },
    {
      "id": 100,
      "lastName": "Targaryen",
      "firstName": "Aegon",
      "age": 35,
      "job": "Marketing",
      "skill": "Content Marketing",
      "dob": "11/22/1989",
      "add": "Delhi"
    },
    {
      "id": 101,
      "lastName": "Stark",
      "firstName": "Ned",
      "age": 50,
      "job": "Developer",
      "skill": "Java",
      "dob": "03/15/1974",
      "add": "Chandigarh"
    },
    {
      "id": 102,
      "lastName": "Martell",
      "firstName": "Oberyn",
      "age": 39,
      "job": "Designer",
      "skill": "Illustrator",
      "dob": "09/27/1985",
      "add": "Mumbai"
    },
    {
      "id": 103,
      "lastName": "Tully",
      "firstName": "Brynden",
      "age": 28,
      "job": "Developer",
      "skill": "React",
      "dob": "07/01/1996",
      "add": "Bangalore"
    },
    {
      "id": 104,
      "lastName": "Baratheon",
      "firstName": "Myrcella",
      "age": 33,
      "job": "Marketing",
      "skill": "Digital Advertising",
      "dob": "05/12/1991",
      "add": "Kolkata"
    },
    {
      "id": 105,
      "lastName": "Lannister",
      "firstName": "Cersei",
      "age": 36,
      "job": "HR",
      "skill": "Conflict Resolution",
      "dob": "10/20/1988",
      "add": "Delhi"
    },
    {
      "id": 106,
      "lastName": "Greyjoy",
      "firstName": "Asha",
      "age": 34,
      "job": "Developer",
      "skill": "JavaScript",
      "dob": "12/02/1990",
      "add": "Pune"
    },
    {
      "id": 107,
      "lastName": "Tyrell",
      "firstName": "Loras",
      "age": 32,
      "job": "Backend",
      "skill": "Django",
      "dob": "11/18/1992",
      "add": "Mumbai"
    },
    {
      "id": 108,
      "lastName": "Bolton",
      "firstName": "Ramsay",
      "age": 29,
      "job": "Tester",
      "skill": "API Testing",
      "dob": "08/25/1995",
      "add": "Bangalore"
    },
    {
      "id": 109,
      "lastName": "Arryn",
      "firstName": "Robert",
      "age": 30,
      "job": "Developer",
      "skill": "Angular",
      "dob": "06/09/1994",
      "add": "Delhi"
    },
    {
      "id": 110,
      "lastName": "Targaryen",
      "firstName": "Viserys",
      "age": 37,
      "job": "Marketing",
      "skill": "SEO",
      "dob": "04/23/1987",
      "add": "Chennai"
    },
    {
      "id": 111,
      "lastName": "Stark",
      "firstName": "Robb",
      "age": 28,
      "job": "Developer",
      "skill": "React",
      "dob": "02/10/1996",
      "add": "Jaipur"
    },
    {
      "id": 112,
      "lastName": "Martell",
      "firstName": "Ellaria",
      "age": 37,
      "job": "Designer",
      "skill": "Photoshop",
      "dob": "09/08/1987",
      "add": "Mumbai"
    },
    {
      "id": 113,
      "lastName": "Tully",
      "firstName": "Catelyn",
      "age": 45,
      "job": "Developer",
      "skill": "Python",
      "dob": "06/05/1979",
      "add": "Chennai"
    },
    {
      "id": 114,
      "lastName": "Baratheon",
      "firstName": "Shireen",
      "age": 32,
      "job": "Marketing",
      "skill": "Email Marketing",
      "dob": "03/17/1992",
      "add": "Kolkata"
    },
    {
      "id": 115,
      "lastName": "Lannister",
      "firstName": "Tywin",
      "age": 39,
      "job": "HR",
      "skill": "Leadership",
      "dob": "12/02/1985",
      "add": "Delhi"
    },
    {
      "id": 116,
      "lastName": "Greyjoy",
      "firstName": "Victarion",
      "age": 33,
      "job": "Developer",
      "skill": "Node.js",
      "dob": "08/14/1991",
      "add": "Hyderabad"
    },
    {
      "id": 117,
      "lastName": "Tyrell",
      "firstName": "Margaery",
      "age": 31,
      "job": "Backend",
      "skill": "Spring Boot",
      "dob": "05/22/1993",
      "add": "Mumbai"
    },
    {
      "id": 118,
      "lastName": "Bolton",
      "firstName": "Ramsay",
      "age": 29,
      "job": "Tester",
      "skill": "Performance Testing",
      "dob": "11/30/1995",
      "add": "Bangalore"
    },
    {
      "id": 119,
      "lastName": "Arryn",
      "firstName": "Jon",
      "age": 36,
      "job": "Developer",
      "skill": "React",
      "dob": "04/07/1988",
      "add": "Chennai"
    },
    {
      "id": 120,
      "lastName": "Targaryen",
      "firstName": "Daenerys",
      "age": 35,
      "job": "Marketing",
      "skill": "Content Marketing",
      "dob": "10/23/1989",
      "add": "Kolkata"
    },
    {
      "id": 121,
      "lastName": "Stark",
      "firstName": "Sansa",
      "age": 30,
      "job": "Developer",
      "skill": "Angular",
      "dob": "09/15/1994",
      "add": "Pune"
    },
    {
      "id": 122,
      "lastName": "Martell",
      "firstName": "Trystane",
      "age": 28,
      "job": "Designer",
      "skill": "UI/UX Design",
      "dob": "02/20/1996",
      "add": "Hyderabad"
    },
    {
      "id": 123,
      "lastName": "Tully",
      "firstName": "Edmure",
      "age": 36,
      "job": "Developer",
      "skill": "Java",
      "dob": "11/30/1988",
      "add": "Chennai"
    },
    {
      "id": 124,
      "lastName": "Baratheon",
      "firstName": "Renly",
      "age": 32,
      "job": "Marketing",
      "skill": "Social Media Marketing",
      "dob": "07/15/1992",
      "add": "Mumbai"
    },
    {
      "id": 125,
      "lastName": "Lannister",
      "firstName": "Jaime",
      "age": 35,
      "job": "HR",
      "skill": "Employee Training",
      "dob": "05/23/1989",
      "add": "Kolkata"
    }
    
  ];
  

  return (
    <div className='Employees'>
      <Navbar />
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-12'>
            <div className='emp' style={{ height: 800, width: '97%', }}>
              <DataGrid className='auto'
                style={{color:'white'}}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 13 },
                  },
                }}
                pageSizeOptions={[13, 26,]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees
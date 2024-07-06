'use client'
import SectionTitle from "../../SectionTitle";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from "react";




export default function Work(){

    const [value,setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
          </div>
        );
      }

    return(
        <div className="w-full flex items-center flex-col justify-center">
            <div style={{width:"1200px",maxWidth:"1200px"}} className="mt-10">
               <SectionTitle title="Where i've worked. " />
            </div>

            <div className="mt-10 mb-10">
            <Box sx={{ width: '100%' , display: "flex" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs  orientation="vertical" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="CodeItDz" />
          {/* <Tab label="Item Two" />
          <Tab label="Item Three"  /> */}
        </Tabs>
      </Box>
      <CustomTabPanel style={{color:"white"}} value={value} index={0}>
        <div>
            <h1 className="text-2xl">Web Developer <a href="https://codeitdz.com/" target="_blank" className="text-fun-pink">@CodeItDz</a></h1>
            <p className="text-sm text-fun-gray mt-2">February 2024 - Present</p>
            <ul className="mt-2">
                <li className="workList text-base mb-2">Implemented UI components with React & Next.js, Bootstrap & Tailwind CSS.</li>
                <li className="workList text-base mb-2">Understanding client needs and proposing effective solutions, which also involves strategising and planning.</li>
                <li className="workList text-base mb-2">Developed robust backend APIs using Next.js, MongoDB, and Express.js, ensuring seamless data flow and high performance.</li>
                <li className="workList text-base mb-2">Hosted multiple projects on a personal server using Docker, ensuring efficient deployment and consistent environments.</li>
            </ul>
        </div>
      </CustomTabPanel>
      {/* <CustomTabPanel style={{color:"white"}} value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel style={{color:"white"}} value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
            </div>
        </div>
    )
}
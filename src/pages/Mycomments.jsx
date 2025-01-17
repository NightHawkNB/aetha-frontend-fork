import React from 'react'
import "../components/Profile.css";
import Editprofilesidebar from '../components/Editprofilesidebar';
import { FaBookReader, FaComments } from "react-icons/fa";
import novelpic from '../../public/images/novel.jpg';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";


function Mycomments() {
  return (
    <div>
           <div className="">
      <div className="details bg-background text-foreground">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-8 relative">
          <div className="max-w-2xl px-4 m-auto relative z-10 flex">
            <div className="h-16 w-16">
              <FaComments size={50} className="text-white justify-middle " />
            </div>
            <span>
              <h1 className="text-3xl font-semibold text-left bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-purple- to-blue-100">
                Comments
              </h1>
              <h1 className='text-base text-left'>Manage your account</h1>
            </span>
          </div>
        </div>
         

    <div class="bg-white border-2 border-black m-4 h-20 p-4 text-black">
    Advertisement
    </div>
     <div className='m-4'>

          <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>History</TableColumn>
              <TableColumn></TableColumn>
              <TableColumn></TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell className='text-primary-400'>Chasing Sunlight</TableCell>
                <TableCell className='text-primary-400'>Not a Chapter - New Story Announcement!</TableCell>
                <TableCell>1 month ago</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell className='text-primary-400'>Riftwalker</TableCell>
                <TableCell className='text-primary-400'>R: Chapter 1: Kei Nakamura</TableCell>
                <TableCell>1 month ago</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell className='text-primary-400'>Reborn as a Lizard: Evolve! Cultivate! Become a Dragon!</TableCell>
                <TableCell className='text-primary-400'>Chapter 82 - Cooperation with the Holy See?</TableCell>
                <TableCell>1 month ago</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell className='text-primary-400'>William Howard</TableCell>
                <TableCell className='text-primary-400'>Community Manager</TableCell>
                <TableCell>2 months ago</TableCell>
              </TableRow>
            </TableBody>
          </Table>
</div>

        </div>
    </div>
   
      {/* <div className="footer"></div> */}
    </div>
  )
}

export default Mycomments
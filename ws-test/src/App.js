//
// import './App.css';
// import {
//   createColumnHelper,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from '@tanstack/react-table'
// import {useState} from "react";
// import { Table as BTable } from 'react-bootstrap'
//
// const defaultData = [
//   {
//     event: 'event 1' ,
//     date: '2023-01-13 14:01:26.549 +0300',
//     duration: '02:00',
//   },
//   {
//     event: 'event 2',
//     date: '2023-01-13 14:01:26.549 +0300',
//     duration: '02:00',
//   },
//   {
//     event: 'event 3',
//     date: '2023-01-13 14:01:26.549 +0300',
//     duration: '02:00',
//   },
// ]
//
// const columnHelper = createColumnHelper()
// const columns = [
//   columnHelper.accessor('event', {
//     cell: info => info.getValue(),
//   }),
//   columnHelper.accessor('date', {
//     header: () => 'Дата',
//     cell: info => info.getValue(),
//   }),
//   columnHelper.accessor('duration', {
//     header: () => 'Продолжительность ',
//     cell: info => info.getValue(),
//   })
// ]
// function App() {
//   const [data, setData] = useState(() => [...defaultData])
//
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   })
//   return (
//       <div className="p-2">
//         <BTable striped bordered hover responsive size="sm">
//         <thead>
//           {table.getHeaderGroups().map(headerGroup => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map(header => (
//                     <th key={header.id}>
//                       {header.isPlaceholder
//                           ? null
//                           : flexRender(
//                               header.column.columnDef.header,
//                               header.getContext()
//                           )}
//                     </th>
//                 ))}
//               </tr>
//           ))}
//           </thead>
//           <tbody>
//           {table.getRowModel().rows.map(row => (
//               <tr key={row.id}>
//                 {row.getVisibleCells().map(cell => (
//                     <td key={cell.id}>
//                       {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                     </td>
//                 ))}
//               </tr>
//           ))}
//           </tbody>
//           <tfoot>
//           {table.getFooterGroups().map(footerGroup => (
//               <tr key={footerGroup.id}>
//                 {footerGroup.headers.map(header => (
//                     <th key={header.id}>
//                       {header.isPlaceholder
//                           ? null
//                           : flexRender(
//                               header.column.columnDef.footer,
//                               header.getContext()
//                           )}
//                     </th>
//                 ))}
//               </tr>
//           ))}
//           </tfoot>
//         </BTable>
//       </div>
//   );
// }
//
// export default App;

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('ws://localhost:5000', {withCredentials: true});
console.log(socket)

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }

  return <p>123</p>
}

export default App

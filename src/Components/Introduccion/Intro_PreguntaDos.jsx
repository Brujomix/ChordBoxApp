import React from 'react'
import { Table } from 'react-bootstrap'

export const Intro_PreguntaDos = () => {
  return (
    <div className='Intro_PreguntaDos'>
        <h3>Escribe Cifrado Americano</h3>
        <Table>
            <thead>
                <tr>
                    <td>Do</td>
                    <td>Re</td>
                    <td>Mi</td>
                    <td>Fa</td>
                    <td>Sol</td>
                    <td>La</td>
                    <td>Si</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input id='C' className='NotaCifrado' type='string' placeholder='?'/></td>
                    <td><input id='D' className='NotaCifrado' type='string' placeholder='?'/></td>
                    <td><input id='E' className='NotaCifrado' type='string' placeholder='?'/></td>
                    <td><input id='F' className='NotaCifrado' type='string' placeholder='?'/></td>
                    <td><input id='G' className='NotaCifrado' type='string' placeholder='?'/></td>
                    <td><input id='A' className='NotaCifrado' type='string' placeholder='?'/></td>
                    <td><input id='B' className='NotaCifrado' type='string' placeholder='?'/></td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

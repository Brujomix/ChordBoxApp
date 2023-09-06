import React from 'react'
import { Table } from 'react-bootstrap'

export const IntroPreguntaUno = () => {
  return (
    <div className='Intro_PreguntaUno'>
        <h3>Enumera los dedos de la manos:</h3>
        <Table>
            <thead>
                <tr>
                    <td>Mano</td>
                    <td>Pulgar</td>
                    <td>Indice</td>
                    <td>Medio</td>
                    <td>Anular</td>
                    <td>Meñique</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Izquierda</td>
                    <td><input id='Pulgar' className='InputDedos' type='number' defaultValue='0'/></td>
                    <td><input id='Indice' className='InputDedos' type='number' defaultValue='0'/></td>
                    <td><input id='Medio' className='InputDedos' type='number' defaultValue='0'/></td>
                    <td><input id='Anular' className='InputDedos' type='number' defaultValue='0'/></td>
                    <td><input id='Meñique' className='InputDedos' type='number' defaultValue='0'/></td>
                </tr>
                <tr>
                    <td>Derecha</td>
                    <td><input id='Pulgar' className='InputDedos' type='number' defaultValue='0'/></td>
                    <td><input id='Indice' className='InputDedos' type='number' defaultValue='0'/></td>
                    <td><input id='Medio' className='InputDedos' type='number' defaultValue='0'/></td>
                    <td><input id='Anular' className='InputDedos' type='number' defaultValue='0'/></td>
                    <td><input id='Meñique' className='InputDedos' type='number' defaultValue='0'/></td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

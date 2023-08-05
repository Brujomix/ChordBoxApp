import React from 'react'
import Table from 'react-bootstrap/Table';

export const TablaGenericaTonalidad = ({a, b, c, d, e, f, g}) => {
  return (
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>I</th>
          <th>II</th>
          <th>III</th>
          <th>IV</th>
          <th>V</th>
          <th>VI</th>
          <th>VII</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{a}</td>
          <td>{b}</td>
          <td>{c}</td>
          <td>{d}</td>
          <td>{e}</td>
          <td>{f}</td>
          <td>{g}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Tonica</td>
          <td>Sub-Dominante</td>
          <td>Tonica</td>
          <td>Sub-Dominante</td>
          <td>Dominante</td>
          <td>Tonica</td>
          <td>Dominante</td>
        </tr>
      </tfoot>
    </Table>
    </div>
  )
}

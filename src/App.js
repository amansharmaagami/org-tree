import React from "react";
import OrganizationChart from "forkedorgchart";

import PropTypes from 'prop-types';

import './node-style.css';

// const nodeStyle = {
//   backgroundColor: '#181736',
//   width: '220px',
//   height: '130px',
//   borderRadius: '5%',
//   marginTop: '-20px',
//   padding: '0'
// }

function node ({ nodeData }) {

  function addNode ({ id }) {
    console.log(id)
  }

  return (
    // <div style={nodeStyle}>
    //   <h1>{nodeData.name}</h1>
    // </div>
    <div className='container'>
     <div className="position">
       {nodeData.title}
       <button onClick={() => addNode(nodeData)}>+</button>
     </div>
     <div className="fullname">{nodeData.name}</div>
   </div>
  )
}

node.propTypes = {
  nodeData: PropTypes.object.isRequired
}


function App() {

  const tree = {
    id: "n1",
    name: "Master Admin",
    title: "Master Admin",
    children: [
      { id: "n2", name: "Super Admin", title: "Adam Zima" },
      { id: "n3", name: "Super Admin", title: "Derrick", children: [
        {
          id: 'n4',
          name: 'Admin',
          title: 'Jeremy'
        },
        {
          id: 'n5',
          name: 'Admin',
          title: 'Someone'
        }
      ] },
    ]
  }
  return (
    <div className="App">
      <h1>Test 1</h1>
        <OrganizationChart
          datasource={tree}
          chartClass="myChart"
          pan={true}
          zoom={true}
          zoominLimit={2}
          zoomoutLimit={0.5}
          // onClickNode={(node) => console.log(node)}
          collapsible={false}
          draggable={true}
          // onClickChart={(...c) => console.log(c)}
          NodeTemplate={node}
          onDropNode={(node, targetNodeId) => console.log(node, targetNodeId)}
        />
    </div>
  );
}

export default App;

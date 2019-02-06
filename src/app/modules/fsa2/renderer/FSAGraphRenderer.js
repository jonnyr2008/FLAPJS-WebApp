import React from 'react';
import './FSAGraphRenderer.css';

import QuadraticEdgeRenderer from 'graph/renderer/QuadraticEdgeRenderer.js';
import FSANodeRenderer from './FSANodeRenderer.js';
import InitialMarkerRenderer from './InitialMarkerRenderer.js';

class FSAGraphRenderer extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  //Override
  render()
  {
    //Inherits props from parent
    const currentModule = this.props.currentModule;
    const inputController = currentModule.getInputController();
    const graphController = currentModule.getGraphController();
    const graph = graphController.getGraph();

    return (
      <g>
        {graph.getNodes().map((e, i) => <FSANodeRenderer key={e.getGraphElementID() || i} node={e}/>)}
        {graph.getEdges().map((e, i) => <QuadraticEdgeRenderer key={e.getGraphElementID() || i} edge={e}/>)}

        {/* Initial marker and ghost */}
        { graph.getStartNode() && (inputController.ghostInitialMarker == null ?
          <InitialMarkerRenderer node={graph.getStartNode()}/> :
          <InitialMarkerRenderer node={inputController.ghostInitialMarker}/>) }
      </g>
    );
  }
}

export default FSAGraphRenderer;
import React from 'react';

import '../Panel.css';
import './ExportingPanel.css';
import PNGIcon from "./icon/PNGIcon";
import JPGIcon from "./icon/JPGIcon";
import JSONIcon from "./icon/JSONIcon";
import XMLIcon from "./icon/XMLIcon";

class ExportingPanel extends React.Component
{
  render()
  {
    return <div className="panel-container" id="exporting">
      <div className="panel-title">
        <h1>Exporting</h1>
      </div>
      <JSONIcon graph={this.props.graph} toolbar={this.props.toolbar} />
      <PNGIcon workspace={this.props.app.workspace} toolbar={this.props.toolbar}/>
      <JPGIcon workspace={this.props.app.workspace} toolbar={this.props.toolbar}/>
      <XMLIcon/>

      <div className="panel-bottom"></div>
    </div>;
  }
}

export default ExportingPanel;

import React from 'react';
import '../Panel.css';
import './ExportingPanel.css';

import Downloader from 'util/Downloader.js';

import IconButton from 'icons/IconButton.js';
import PNGIcon from 'icons/flat/PNGIcon.js';
import JPGIcon from 'icons/flat/JPGIcon.js';
import JSONIcon from 'icons/flat/JSONIcon.js';
import XMLIcon from 'icons/flat/XMLIcon.js';

class ExportingPanel extends React.Component
{
  constructor(props)
  {
    super(props);

    this.container = React.createRef();
  }

  render()
  {
    const graph = this.props.graph;
    const toolbar = this.props.toolbar;
    const workspace = this.props.workspace;
    const controller = this.props.controller;

    return <div className="panel-container" id="exporting" ref={ref=>this.container=ref}>
      <div className="panel-title">
        <h1>{I18N.toString("EXPORTING_PANEL_TITLE")}</h1>
      </div>
      <div className="panel-content">
        {/*JSON*/}
        <IconButton className="export-button" id="export-json" title="Save as JSON"
          onClick={()=>Downloader.downloadText(toolbar.getMachineName() + '.json', JSON.stringify(graph.toJSON()))}>
          <JSONIcon/>
          <label>{I18N.toString("SAVE_AS_MACHINE")}</label>
        </IconButton>
        {/*PNG*/}
        <IconButton className="export-button" id="export-png" title="Export as PNG"
          onClick={() => {
            const workspaceDim = workspace.ref.viewBox.baseVal;
            const width = workspaceDim.width;
            const height = workspaceDim.height;
            const svg = workspace.getSVGForExport(width, height);
            Downloader.downloadSVG(toolbar.getMachineName(), 'png', svg, width, height);
          }}>
          <PNGIcon/>
          <label>{I18N.toString("SAVE_AS_PNG")}</label>
        </IconButton>
        {/*JPG*/}
        <IconButton className="export-button" id="export-jpg" title="Export as JPG"
          onClick={() => {
            const workspaceDim = workspace.ref.viewBox.baseVal;
            const width = workspaceDim.width;
            const height = workspaceDim.height;
            const svg = workspace.getSVGForExport(width, height);
            Downloader.downloadSVG(toolbar.getMachineName(), 'jpg', svg, width, height);
          }}>
          <JPGIcon/>
          <label>{I18N.toString("SAVE_AS_JPG")}</label>
        </IconButton>
        {/*XML*/}
        <IconButton className="export-button" id="export-xml" title="Export as JFF"
          disabled="true">
          {/*TODO: Add JFLAP export functionality*/}
          <XMLIcon/>
          <label>{I18N.toString("SAVE_AS_JFLAP")}</label>
        </IconButton>
      </div>

      <div className="panel-bottom"></div>
    </div>;
  }
}

export default ExportingPanel;
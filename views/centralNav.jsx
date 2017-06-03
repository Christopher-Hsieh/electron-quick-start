'use babel';

import React from 'react';

export default class CentralNav extends React.Component {

  render () {
    return (
      //<!-- All of the Node.js APIs are available in this renderer process. -->
      <div>
        We are using Node.js <script>document.write(process.versions.node)</script>,
        Chromium <script>document.write(process.versions.chrome)</script>,
        and Electron <script>document.write(process.versions.electron)</script>.
        <div>
          Display a few popular playlist
          </div>
        <div>
          display info about selected image
        </div>
      </div>
    );
  }
}

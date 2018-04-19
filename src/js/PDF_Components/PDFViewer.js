import React from 'react';
import testPDF from "./2010.Echeverri&Pereira.Mambear coca.español.pdf";
import { Document, Page } from 'react-pdf';

class MyPdfViewer extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file={testPDF}
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}
export default MyPdfViewer;

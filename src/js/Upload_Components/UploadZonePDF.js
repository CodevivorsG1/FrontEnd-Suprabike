import React from 'react';
import axios from 'axios';
import './style.css';

class UploadZonePDF extends React.Component {
  state = {
    selectedBookCoverFiles: [],
    submitFormProgress: 0,
    isSubmittingForm: false,
    didFormSubmissionComplete: false,
    book: {
    }
  };

  getNumberOfSelectedFiles() {
    return this.state.selectedBookCoverFiles.filter(el => {
      return el._destroy !== true;
    }).length;
  }

  render() {
    return (
      <div className="UploadZone">
        <form>
          <div className="form-group">
            {this.renderUploadCoversButton()}
            {this.renderSelectedBookCoverFiles()}
          </div>
          {this.renderUploadFormProgress()}
        </form>
        <br />
      </div>
    );
  }

  renderUploadCoversButton() {
    let numberOfSelectedCovers = this.getNumberOfSelectedFiles();
    return (
      <div>
        <input
          name="covers[]"
          ref={field => (this.bookCoversField = field)}
          type="file"
          disabled={this.state.isSubmittingForm}
          multiple={true}
          accept="application/pdf"
          style={{
            width: 0.1,
            height: 0.1,
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            zIndex: -1
          }}
          id="book_covers"
          onChange={e => this.handleBookCoversChange(e)}
          className="form-control"
        />
        <label
          disabled={this.state.isSubmittingForm}
          className="btn btn-success"
          htmlFor="book_covers">
          <span class="fas fa-cloud-upload-alt" />
          &nbsp; &nbsp;
          {numberOfSelectedCovers === 0
            ? 'Subir PDF'
            : `${numberOfSelectedCovers} PDF${numberOfSelectedCovers !== 1
                ? "'s"
                : ''}`}
        </label>

        <button
          disabled={this.state.isSubmittingForm}
          onClick={e => this.handleFormSubmit()}
          id="save"
          className="btn btn-primary">
          {this.state.isSubmittingForm ? 'Subiendo...' : 'Subir'}
        </button>
        &nbsp;
      </div>
    );
  }

  renderSelectedBookCoverFiles() {
    let fileDOMs = this.state.selectedBookCoverFiles.map((el, index) => {
      if (el._destroy) {
        return null;
      }

      return (
        <li key={index}>
          <div className="photo">
            <img
              width={150}
              src={'../img/pdf.png'}
              style={{ alignSelf: 'center' }}
            />
            <div
              className="remove"
              onClick={() => this.removeSelectedBookCoverFile(el, index)}>
              <span style={{ top: 2 }} class="far fa-times-circle" />
            </div>
          </div>
          <div className="file-name">
            {el.name}
          </div>
        </li>
      );
    });

    return (
      <ul className="selected-covers">
        {fileDOMs}
      </ul>
    );
  }

  renderUploadFormProgress() {
    if (this.state.isSubmittingForm === false) {
      return null;
    }

    return (
      <div className="progress">
        <div
          className={
            'progress-bar progress-bar-info progress-bar-striped' +
            (this.state.submitFormProgress < 100 ? 'active' : '')
          }
          role="progressbar"
          aria-valuenow={this.state.submitFormProgress}
          areavaluemin="0"
          areavaluemax="100"
          style={{ width: this.state.submitFormProgress + '%' }}>
          {this.state.submitFormProgress}% Complete
        </div>
      </div>
    );
  }

  removeSelectedBookCoverFile(cover, index) {
    let { selectedBookCoverFiles } = this.state;
    if (cover.id) {
      selectedBookCoverFiles[index]._destroy = true;
    } else {
      selectedBookCoverFiles.splice(index, 1);
    }

    this.setState({
      selectedBookCoverFiles: selectedBookCoverFiles
    });
  }

  handleBookCoversChange() {
    let selectedFiles = this.bookCoversField.files;
    let { selectedBookCoverFiles } = this.state;
    for (let i = 0; i < selectedFiles.length; i++) {
      selectedBookCoverFiles.push(selectedFiles.item(i));
    } //end for

    this.setState(
      {
        selectedBookCoverFiles: selectedBookCoverFiles
      },
      () => {
        this.bookCoversField.value = null;
      }
    );
  }

  handleCancel() {
    this.props.history.push('/books');
  }

  buildFormData() {
    let formData = new FormData();
    formData.append('book[title]', this.state.book.title);
    formData.append('book[description]', this.state.book.description);

    let { selectedBookCoverFiles } = this.state;
    for (let i = 0; i < selectedBookCoverFiles.length; i++) {
      let file = selectedBookCoverFiles[i];
      if (file.id) {
        if (file._destroy) {
          formData.append(`book[covers_attributes][${i}][id]`, file.id);
          formData.append(`book[covers_attributes][${i}][_destroy]`, '1');
        }
      } else {
        formData.append(
          `book[covers_attributes][${i}][photo]`,
          file,
          file.name
        );
      }
    }
    return formData;
  }

  submitForm() {
    axios.post('',
        this.buildFormData(), {
        onUploadProgress: progressEvent => {
          let percentage = progressEvent.loaded * 100.0 / progressEvent.total;
          this.setState({
            submitFormProgress: percentage
          });
        }
      })
      .then(response => {
        this.setState({
          didFormSubmissionComplete: true
        });
        console.log("Archivo guardado !");;
      })
      .catch(error => {
        let { book } = this.state;
        book.errors = error.response.data;
        this.setState({
          isSubmittingForm: false,
          submitFormProgress: 0,
          book: book
        });
      });
  }

  handleFormSubmit() {
    let { book } = this.state;
    book.errors = {};
    this.setState(
      {
        isSubmittingForm: true,
        book: book
      },
      () => {
        this.submitForm();
      }
    );
  }
}

export default UploadZonePDF;

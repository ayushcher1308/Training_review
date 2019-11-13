import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  modelData;
  ngOnInit() {
    this.modelData = [{
      "id": "1",
      "model_name": "model-1",
      "status": "trained"
    },
    {
      "id": "2",
      "model_name": "model-2",
      "status": "trained"
    },
    {
      "id": "3",
      "model_name": "model-3",
      "status": "trained"
    },
    {
      "id": "4",
      "model_name": "model-4",
      "status": "trained"
    },
    {
      "id": "5",
      "model_name": "model-5",
      "status": "untrained"
    },
    {
      "id": "6",
      "model_name": "model-6",
      "status": "untrained"
    },
    {
      "id": "7",
      "model_name": "model-7",
      "status": "trained"
    },
    {
      "id": "8",
      "model_name": "model-8",
      "status": "untrained"
    }
    ];
  }

  file: any;
  fileReaded;
  isChecked;
  fileChanged(e) {
    console.log(e);
    // this.file = e.target.files[0];
    this.fileReaded = e.target.files[0];

    let reader: FileReader = new FileReader();
    reader.readAsText(this.fileReaded);

    reader.onload = (e) => {
      let csv: string = reader.result;
      let allTextLines = csv.split(/\r|\n|\r/);
      let headers = allTextLines[0].split(',');
      let lines = [];

      for (let i = 0; i < allTextLines.length; i++) {
        // split content based on comma  
        let data = allTextLines[i].split(',');
        if (data.length === headers.length) {
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }

          // log each row to see output  
          console.log(tarr);
          lines.push(tarr);
        }
      }
      // all rows in the csv file  
      console.log(">>>>>>>>>>>>>>>>>", lines);
    }

  }
  uploadDocument(file) {
    console.log("submitted");
    // let fileReader = new FileReader();
    // fileReader.onload = (e) => {
    //   console.log(fileReader.result);
    // }
    // fileReader.readAsText(this.file);
    // return true;
  }

  toggle(e) {
    this.isChecked = e.target.checked;
    console.log(this.isChecked);
    if (this.isChecked) {
      document.getElementById("upload").style.display = "inline";
      document.getElementById("write").style.display = "none";
    }
    else{
      document.getElementById("upload").style.display = "none";
      document.getElementById("write").style.display = "inline";
    }
  }
}

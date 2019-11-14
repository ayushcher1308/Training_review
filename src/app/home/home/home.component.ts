import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'app works!';
  modelData;

  constructor(private router:Router){}

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
    const csvFilePath=this.fileReaded;
const csv=require('csvtojson');
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj); 
    
})

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
   
  }

  gotoModel(id)
  {
    console.log(id);
    this.router.navigate(['/model',id]);
  }
}

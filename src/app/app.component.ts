import { Component,OnInit } from '@angular/core';

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
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-model-details',
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.css']
})
export class ModelDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  modelData;
  id;
  modelName;
  ngOnInit() {
    this.modelData = JSON.parse(localStorage.getItem("model"));
    this.router.events.subscribe((event: any) => {
      let r = this.route;
      while (r.firstChild) {
        r = r.firstChild
      }
      r.params.subscribe(params => {
        // console.log(params);
        this.id = params['id'];
        for (var i = 0; i < this.modelData.length; i++) {
          if (this.id == this.modelData[i].id) {
            this.modelName = this.modelData[i].model_name;
          }
        }
        // console.log(this.modelName);
      });
    });

  }

}

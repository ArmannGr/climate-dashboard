import { Component, OnInit } from '@angular/core';


declare var tableau: any;

@Component({
  selector: 'windComponent',
  moduleId: module.id,
  templateUrl: 'wind.component.html'
})

export class WindComponent implements OnInit{
  ngOnInit(){
    this.drawWindOverTheYears()
  }
  drawWindOverTheYears(){
    let placeholderDiv = document.getElementById('windOverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Wind_1_X?:language=de-DE&:display_count=n&:origin=viz_share_link';
    let options = {
      hideTabs: true,
      width: "100%",
      height: "800px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished     loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.drawWindOverTheYears = new tableau.Viz(placeholderDiv, url, options);
  }
}

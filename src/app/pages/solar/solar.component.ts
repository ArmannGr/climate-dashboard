import { Component, OnInit } from '@angular/core';
declare var tableau: any;

@Component({
  selector: 'solarComponent',
  moduleId: module.id,
  templateUrl: 'solar.component.html'
})

export class SolarComponent implements OnInit{
  ngOnInit(){
    this.drawSolarOverTheYears()
  }
  drawSolarOverTheYears(){
    let placeholderDiv = document.getElementById('solarOverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Solar_1_X?:language=de-DE&:display_count=n&:origin=viz_share_link';
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
    this.drawSolarOverTheYears = new tableau.Viz(placeholderDiv, url, options);
  }
}

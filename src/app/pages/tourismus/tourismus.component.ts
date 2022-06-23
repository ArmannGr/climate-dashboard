import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'tourismusComponent',
  moduleId: module.id,
  templateUrl: 'tourismus.component.html'
})

export class TourismusComponent implements OnInit{
  ngOnInit(){
    this.drawTourismusOverTheYears();
    this.drawTourismusCo2OverTheYears();
  }
  drawTourismusOverTheYears(){
    let placeholderDiv = document.getElementById('tourismOverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Internet_1?:language=de-DE&:display_count=n&:origin=viz_share_link';
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
    this.drawTourismusOverTheYears = new tableau.Viz(placeholderDiv, url, options);
  }
  drawTourismusCo2OverTheYears(){
    let placeholderDiv = document.getElementById('tourismCo2OverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/TOURISMUS_CO2?:language=de-DE&:display_count=n&:origin=viz_share_link';
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
    this.drawTourismusCo2OverTheYears = new tableau.Viz(placeholderDiv, url, options);
  }
}

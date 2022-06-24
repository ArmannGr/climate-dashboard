import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'energieComponent',
  moduleId: module.id,
  templateUrl: 'energie.component.html'
})

export class EnergieComponent implements OnInit{
  ngOnInit(){
    this.drawEnergyOverTheYears()
    this.drawEnergyTempOverTheYears()
  }
  drawEnergyOverTheYears(){
    let placeholderDiv = document.getElementById('energyOverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/AnteileEE?:language=de-DE&:display_count=n&:origin=viz_share_link';
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
    this.drawEnergyOverTheYears = new tableau.Viz(placeholderDiv, url, options);
  }

  drawEnergyTempOverTheYears(){
    let placeholderDiv = document.getElementById('energyTempOverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/TEST_ENERGY-X?:language=de-DE&:display_count=n&:origin=viz_share_link';
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
    this.drawEnergyTempOverTheYears = new tableau.Viz(placeholderDiv, url, options);
  }
}

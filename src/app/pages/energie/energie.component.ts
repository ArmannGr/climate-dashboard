import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'energieComponent',
  moduleId: module.id,
  templateUrl: 'energie.component.html'
})

export class EnergieComponent implements OnInit{
  ngOnInit(){
    this.drawEnergyTempOverTheYears();
    this.drawWindOverTheYears();
    this.drawSolarOverTheYears();
  }

  drawEnergyTempOverTheYears(){
    let placeholderDiv = document.getElementById('energyTempOverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/TEST_ENERGY-X?:language=de-DE&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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

  drawWindOverTheYears(){
    let placeholderDiv = document.getElementById('windOverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Wind_1_X?:language=de-DE&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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

  drawSolarOverTheYears(){
    let placeholderDiv = document.getElementById('solarOverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Solar_1_X?:language=de-DE&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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

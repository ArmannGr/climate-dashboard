import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'wasserComponent',
  moduleId: module.id,
  templateUrl: 'wasser.component.html'
})

export class WasserComponent implements OnInit{

  waterPerPerson:any;
  waterEnergy:any;
  waterEnergyMap:any;

  ngOnInit(){
    this.drawWaterPerPerson();
    this.drawWaterEnergy();
    this.drawWaterEnergyMap();
  }

  drawWaterPerPerson(){
    let placeholderDiv = document.getElementById('waterPerPerson');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/WATER_2_X?:language=de-DE&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.waterPerPerson = new tableau.Viz(placeholderDiv, url, options);
  }

  drawWaterEnergy(){
    let placeholderDiv = document.getElementById('waterEnergy');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Hydro_2_X?:language=de-DE&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.waterEnergy = new tableau.Viz(placeholderDiv, url, options);
  }

  drawWaterEnergyMap(){
    let placeholderDiv = document.getElementById('waterEnergyMap');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Hydro_32?:language=de-DE&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.waterEnergyMap = new tableau.Viz(placeholderDiv, url, options);
  }
}

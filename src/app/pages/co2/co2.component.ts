import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'co2Component',
  moduleId: module.id,
  templateUrl: 'co2.component.html'
})

export class Co2Component implements OnInit{

  co2OverTheYears:any;
  co2Weather:any;
  co2PerHeadPerYear:any;
  co2PerHeadPerYearPerCountry:any;

  ngOnInit(){
    this.drawCo2OverTheYears();
    this.drawWeatherCo2();
  }

  drawCo2OverTheYears(){
    let placeholderDiv = document.getElementById('co2OverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/TEST_ENERGY-X?:language=en-US&:display_count=n&:origin=viz_share_link';
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
    this.co2OverTheYears = new tableau.Viz(placeholderDiv, url, options);
  }

  drawWeatherCo2(){
    let placeholderDiv = document.getElementById('co2Weather');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Wetter_CO2_X?:language=de-DE&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.co2Weather = new tableau.Viz(placeholderDiv, url, options);
  }
}

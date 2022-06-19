import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'einwohnerComponent',
  moduleId: module.id,
  templateUrl: 'einwohner.component.html'
})

export class EinwohnerComponent implements OnInit{

  populationWeather:any;
  co2PerHeadPerYear:any;
  co2PerHeadPerYearPerCountry:any;

  ngOnInit(){
    this.drawPopulationWeather();
    this.drawCo2PerHeadPerYear();
    this.drawCo2PerHeadPerYearPerCountry();
  }

  drawPopulationWeather(){
    let placeholderDiv = document.getElementById('populationWeather');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/VergleichEinwohnerCO2?:language=de-DE&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.populationWeather = new tableau.Viz(placeholderDiv, url, options);
  }

  drawCo2PerHeadPerYear(){
    let placeholderDiv = document.getElementById('co2PerHeadPerYear');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Co2proKopfjeJahr2?:language=en-US&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.co2PerHeadPerYear = new tableau.Viz(placeholderDiv, url, options);
  }

  drawCo2PerHeadPerYearPerCountry(){
    let placeholderDiv = document.getElementById('co2PerHeadPerYearPerCountry');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Co2proKopfjeJahrjeLand?:language=en-US&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.co2PerHeadPerYearPerCountry = new tableau.Viz(placeholderDiv, url, options);
  }
}

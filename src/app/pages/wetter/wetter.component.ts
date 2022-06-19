import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'wetterComponent',
  moduleId: module.id,
  templateUrl: 'wetter.component.html'
})
export class WetterComponent implements OnInit{

  weatherMap: any;
  weatherOfYear: any;
  weatherOverTheYears: any;
  weatherHottestCountries: any;
  weatherColdestCountries: any;

  ngOnInit(){
    this.drawWeatherMap();
    this.drawWeatherOfYear();
    this.drawWeatherOverTheYears();
    this.drawHottestCountries();
    this.drawColdestCountries();
  }

  drawWeatherMap(){
    let placeholderDiv = document.getElementById('weatherMap');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Wetter_4?:language=en-US&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.weatherMap = new tableau.Viz(placeholderDiv, url, options);
  }

  drawWeatherOfYear(){
    let placeholderDiv = document.getElementById('weatherOfYear');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Wetter_3?:language=en-US&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.weatherOfYear = new tableau.Viz(placeholderDiv, url, options);
  }

  drawWeatherOverTheYears(){
    let placeholderDiv = document.getElementById('weatherOverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Wetter_2?:language=en-US&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.weatherOverTheYears = new tableau.Viz(placeholderDiv, url, options);
  }

  drawHottestCountries(){
    let placeholderDiv = document.getElementById('weatherHottestCountries');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Wetter_7?:language=en-US&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.weatherHottestCountries = new tableau.Viz(placeholderDiv, url, options);
  }

  drawColdestCountries(){
    let placeholderDiv = document.getElementById('weatherColdestCountries');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/Wetter_8?:language=en-US&:display_count=n&:origin=viz_share_link&:toolbar=no&:showShareOptions=false';
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
    this.weatherColdestCountries = new tableau.Viz(placeholderDiv, url, options);
  }


}

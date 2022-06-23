import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'internetComponent',
  moduleId: module.id,
  templateUrl: 'internet.component.html'
})

export class InternetComponent implements OnInit{
  ngOnInit(){
    this.drawInternetOverTheYears();
    this.drawInternetCo2OverTheYears();
  }
  drawInternetOverTheYears(){
    let placeholderDiv = document.getElementById('internetOverTheYears');
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
    this.drawInternetOverTheYears = new tableau.Viz(placeholderDiv, url, options);
  }
  drawInternetCo2OverTheYears(){
    let placeholderDiv = document.getElementById('internetCo2OverTheYears');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/views/WetterAPI/INTERNET_CO2?:language=de-DE&:display_count=n&:origin=viz_share_link';
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
    this.drawInternetCo2OverTheYears = new tableau.Viz(placeholderDiv, url, options);
  }
}
